import { InstagramIcon } from "@/components/ui/SocialIcons";

export interface SocialIcon {
  name: string;
  icon: typeof InstagramIcon;
  url: string;
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

export const socialLinks = {
  instagram: {
    name: "Instagram",
    url: "https://instagram.com",
    icon: InstagramIcon,
    color: "#E4405F",
  },
};