"use client";

import dynamic from "next/dynamic";

// Loader is a client component - load it dynamically with SSR disabled
const Loader = dynamic(() => import("@/components/Loader").then((mod) => mod.default), {
  ssr: false,
  loading: () => null,
});

export default function LoaderWrapper() {
  return <Loader />;
}