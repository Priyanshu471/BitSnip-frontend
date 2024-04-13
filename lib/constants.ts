import {
  Handshake,
  Link,
  LucideIcon,
  MonitorSmartphone,
  MousePointerClick,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";

type ValuePoints = {
  icon: LucideIcon;
  name: string;
  des: string;
};
export type ColorCodes = {
  color: string;
  name: string;
};

export const valuePoints: ValuePoints[] = [
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

export const colorCodes: ColorCodes[] = [
  {
    color: "#A6AFFF",
    name: "Purple",
  },
  {
    color: "#AAFFA6",
    name: "Green",
  },
  {
    color: "#FF7272",
    name: "Red",
  },
  {
    color: "#5DB9FF",
    name: "Blue",
  },
  {
    color: "#FFA6EF",
    name: "Pink",
  },
];

interface Url {
  urlId: string;
  longUrl: string;
}

export interface AllLinks {
  urls: Url[];
}

export const allLinks: AllLinks = {
  urls: [
    {
      urlId: "1f4bH5",
      longUrl:
        "https://youtu.be/SfPGQN5wKFs?feature=shahttps://youtu.be/SfPGQN5wKFs?feature=shared",
    },
    {
      urlId: "xwtdVR",
      longUrl: "https://app.dub.co/bit-snip",
    },
    {
      urlId: "8bz3Li",
      longUrl:
        "https://vercel.com/priyanshu471s-projects/bit-snip-backend/logs?page=1&timeline=past30Minutes&startDate=1712952190943&endDate=1712953990943",
    },
  ],
};
