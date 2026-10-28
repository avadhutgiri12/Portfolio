import { InstagramIcon } from "@/components/ui/SocialIcons";
import {
  siReact,
  siNextdotjs,
  siPython,
  siTypescript,
  siTailwindcss,
  siJupyter,
} from "simple-icons";

export interface SocialIcon {
  name: string;
  icon: typeof InstagramIcon;
  url: string;
  color: string;
}

export interface SkillIcon {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
}

export const SOCIAL_ICONS: SocialIcon[] = [
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://instagram.com",
    color: "#E4405F",
  },
];

// Create React components from simple-icons SVG paths
const createIconComponent = (iconData: any) => {
  return function IconComponent({ size = 24, color = "currentColor", ...props }: { size?: number; color?: string }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill={color}
          d={iconData.path}
        />
      </svg>
    );
  };
};

export const SKILL_ICONS: SkillIcon[] = [
  {
    name: "React",
    icon: createIconComponent(siReact),
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: createIconComponent(siNextdotjs),
    color: "#000000",
  },
  {
    name: "Python",
    icon: createIconComponent(siPython),
    color: "#3776AB",
  },
  {
    name: "TypeScript",
    icon: createIconComponent(siTypescript),
    color: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    icon: createIconComponent(siTailwindcss),
    color: "#06B6D4",
  },
  {
    name: "Machine Learning",
    icon: createIconComponent(siJupyter),
    color: "#F37626",
  },
];

export const socialLinks = {
  instagram: {
    name: "Instagram",
    url: "https://instagram.com",
    icon: InstagramIcon,
    color: "#E4405F",
  },
};