"use client";

import { useEffect, useRef } from "react";

/**
 * useMarqueeScroll
 * An infinite auto-scrolling strip the visitor can also scroll themselves.
 *
 *  - the strip is a real horizontal scroll container, so touch swipe,
 *    trackpad, shift + wheel and keyboard scrolling all work natively
 *  - a requestAnimationFrame loop advances scrollLeft while nobody interacts
 *  - the content is rendered COPIES times; scrollLeft is kept inside the
 *    middle copy and wrapped by exactly one copy's width, so the loop is
 *    seamless in both directions
 *  - mouse click-drag scrolls it on desktop, with a little momentum
 *  - after the visitor stops (IDLE_MS), auto-scroll eases back in from where
 *    they left it, no jump
 *  - prefers-reduced-motion: no auto-scroll, still scrollable
 */

export const MARQUEE_COPIES = 3;

const SPEED = 48; // px per second
const IDLE_MS = 1600; // resume auto-scroll this long after the last input
const RAMP_SECONDS = 0.8; // speed eases from 0 to SPEED over this
const KEY_STEP = 0.8; // arrow keys move this fraction of a card

export function useMarqueeScroll<
  S extends HTMLElement,
  G extends HTMLElement
>() {
  const scrollerRef = useRef<S>(null);
  const groupRef = useRef<G>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    const group = groupRef.current;
    if (!el || !group) return;

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let copyWidth = group.offsetWidth; // one copy, gap included
    let pos = 0; // float scroll position (scrollLeft is rounded by the browser)
    let speed = 0; // current auto speed, ramps toward SPEED
    let lastInput = -Infinity;
    let hovering = false;
    let focused = false;
    let touching = false;
    let raf = 0;
    let lastTime = 0;
    let visible = true;

    // mouse drag
    let dragging = false;
    let dragMoved = 0;
    let dragX = 0;
    let velocity = 0; // px per ms, for the release momentum
    let lastMoveTime = 0;
    let momentum = 0; // px per ms, decays after a drag
    let keyNudge = 0; // px still to travel from arrow keys

    const wrap = (value: number) => {
      if (copyWidth <= 0) return value;
      // keep the position inside the middle copy: [copyWidth, 2 * copyWidth)
      let v = value;
      while (v >= copyWidth * 2) v -= copyWidth;
      while (v < copyWidth) v += copyWidth;
      return v;
    };

    const write = (value: number) => {
      pos = wrap(value);
      el.scrollLeft = pos;
    };

    const markInput = () => {
      lastInput = performance.now();
      speed = 0;
    };

    // start inside the middle copy so the strip can move both ways at once
    write(copyWidth);

    const onScroll = () => {
      // a scroll we did not write (swipe, trackpad, scrollbar, keyboard)
      if (Math.abs(el.scrollLeft - pos) > 1.5) {
        markInput();
        const wrapped = wrap(el.scrollLeft);
        pos = wrapped;
        if (Math.abs(wrapped - el.scrollLeft) > 0.5) el.scrollLeft = wrapped;
      }
    };

    const onWheel = (event: WheelEvent) => {
      // shift + vertical wheel scrolls the strip; plain vertical wheel is
      // left alone so the page keeps scrolling
      const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      if (event.shiftKey && !horizontal && event.deltaY !== 0) {
        event.preventDefault();
        event.stopPropagation();
        markInput();
        write(pos + event.deltaY);
      } else if (horizontal) {
        markInput();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      dragging = true;
      dragMoved = 0;
      dragX = event.clientX;
      velocity = 0;
      momentum = 0;
      lastMoveTime = performance.now();
      el.setPointerCapture(event.pointerId);
      markInput();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const dx = event.clientX - dragX;
      dragX = event.clientX;
      dragMoved += Math.abs(dx);
      if (dragMoved > 3) el.classList.add("is-dragging");
      const now = performance.now();
      const dt = Math.max(1, now - lastMoveTime);
      velocity = 0.8 * (-dx / dt) + 0.2 * velocity;
      lastMoveTime = now;
      write(pos - dx);
      markInput();
    };

    const endDrag = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      if (el.hasPointerCapture(event.pointerId)) {
        el.releasePointerCapture(event.pointerId);
      }
      // a fresh release keeps some of the drag speed
      momentum = performance.now() - lastMoveTime < 80 ? velocity : 0;
      // let the click that ends a drag through only if it was a real click
      window.setTimeout(() => el.classList.remove("is-dragging"), 0);
      markInput();
    };

    const onClickCapture = (event: MouseEvent) => {
      if (dragMoved > 3) {
        event.preventDefault();
        event.stopPropagation();
        dragMoved = 0;
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const card = group.firstElementChild as HTMLElement | null;
      const step = (card?.offsetWidth ?? 320) * KEY_STEP;
      keyNudge += event.key === "ArrowRight" ? step : -step;
      markInput();
    };

    const onTouchStart = () => {
      touching = true;
      momentum = 0;
      markInput();
    };
    const onTouchEnd = () => {
      touching = false;
      markInput();
    };

    const onPointerEnter = (event: PointerEvent) => {
      if (event.pointerType === "mouse") hovering = true;
    };
    const onPointerLeave = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      hovering = false;
      markInput();
    };
    const onFocusIn = () => {
      // keyboard focus pauses the loop; a mouse click on the strip does not
      focused = el.matches(":focus-visible");
    };
    const onFocusOut = (event: FocusEvent) => {
      if (!el.contains(event.relatedTarget as Node | null)) {
        focused = false;
        markInput();
      }
    };

    const tick = (time: number) => {
      raf = requestAnimationFrame(tick);
      const dt = lastTime ? Math.min((time - lastTime) / 1000, 1 / 20) : 0;
      lastTime = time;
      if (!visible) return;

      if (keyNudge !== 0) {
        const move = Math.abs(keyNudge) < 1 ? keyNudge : keyNudge * 0.18;
        keyNudge -= move;
        write(pos + move);
        lastInput = performance.now();
        return;
      }

      if (Math.abs(momentum) > 0.01) {
        write(pos + momentum * dt * 1000);
        momentum *= Math.pow(0.05, dt); // decays to ~5% per second
        lastInput = performance.now();
        return;
      }
      momentum = 0;

      const busy =
        dragging ||
        touching ||
        hovering ||
        focused ||
        reducedQuery.matches ||
        performance.now() - lastInput < IDLE_MS;

      if (busy) {
        speed = 0;
        return;
      }

      speed = Math.min(SPEED, speed + (SPEED / RAMP_SECONDS) * dt);
      write(pos + speed * dt);
    };

    const resizeObserver = new ResizeObserver(() => {
      const next = group.offsetWidth;
      if (next > 0 && next !== copyWidth) {
        // keep the same spot within the copy after a layout change
        const offset = copyWidth > 0 ? (pos - copyWidth) / copyWidth : 0;
        copyWidth = next;
        write(copyWidth + offset * copyWidth);
      }
    });
    resizeObserver.observe(group);

    // stop the loop work while the section is off screen
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    intersectionObserver.observe(el);

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
    el.addEventListener("click", onClickCapture, true);
    el.addEventListener("keydown", onKeyDown);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });
    el.addEventListener("pointerenter", onPointerEnter);
    el.addEventListener("pointerleave", onPointerLeave);
    el.addEventListener("focusin", onFocusIn);
    el.addEventListener("focusout", onFocusOut);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("click", onClickCapture, true);
      el.removeEventListener("keydown", onKeyDown);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
      el.removeEventListener("pointerenter", onPointerEnter);
      el.removeEventListener("pointerleave", onPointerLeave);
      el.removeEventListener("focusin", onFocusIn);
      el.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return { scrollerRef, groupRef };
}
