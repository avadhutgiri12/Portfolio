"use client";

import { usePathname } from "next/navigation";
import PillLogo from "@/components/PillLogo";

export default function PillLogoWrapper() {
  const pathname = usePathname();
  const showPillLogo = pathname !== "/business";

  if (!showPillLogo) return null;

  return (
    <PillLogo
      name="Avadhut"
      accent="#ffbe38"
      size={16}
      className="fixed left-5 top-5 z-50 sm:left-10 sm:top-6"
    />
  );
}