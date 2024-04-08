import {
  Handshake,
  Link,
  LucideIcon,
  MonitorSmartphone,
  MousePointerClick,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";

type valuePoints = {
  icon: LucideIcon;
  name: string;
  des: string;
};

export const valuePoints: valuePoints[] = [
  {
    icon: ThumbsUp,
    name: "Easy",
    des: "BitSnip is easy and fast, enter the long link to get your shortened link",
  },
  {
    icon: Link,
    name: "Shortened",
    des: "Use any link, no matter what size, BitSnip always shortens",
  },
  {
    icon: ShieldCheck,
    name: "Secure",
    des: "BitSnip is secure and safe, we never share your data with anyone",
  },
  {
    icon: MousePointerClick,
    name: "Statistics",
    des: "Get statistics of your shortened links, number of clicks, location, and more",
  },
  {
    icon: Handshake,
    name: "Reliable",
    des: "BitSnip is reliable, we never go down, and we always provide the best service",
  },
  {
    icon: MonitorSmartphone,
    name: "Devices",
    des: "BitSnip is responsive, you can use it on any device, no matter the screen size",
  },
];
