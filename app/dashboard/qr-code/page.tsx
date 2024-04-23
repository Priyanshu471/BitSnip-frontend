"use client";

import { useLinkData } from "@/hooks/useLinkData";
import Nothing from "../_components/nothing";

export default function Page() {
  const { linkData } = useLinkData();
  return <>{<Nothing pagename="qr" />}</>;
}
