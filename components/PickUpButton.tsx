
"use client";

import "./PickUpButton.css";

interface PickUpButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function PickUpButton({
  onClick,
  className = "",
  children = "Pick up!",
}: PickUpButtonProps) {
  return (
    <button
      type="button"
      className={`pickup-button ${className}`.trim()}
      onClick={onClick}
    >
      {children}
    </button>
  );
}