"use client";
import { useLinkData } from "@/hooks/useLinkData";
import Nothing from "../_components/nothing";
import QrGenerator from "../_components/qrGenerator";
export default function Page() {
  const { linkData } = useLinkData();
  return (
    <div className="flex flex-col items-center h-full my-2 w-full">
      {linkData.length === 0 ? (
        <Nothing pagename="qr" />
      ) : (
        <>
          <h1 className="text-2xl font-semibold text-center text-meta-3 my-4">
            Generate, Edit, Download, and Share QR Codes with Ease
          </h1>
          <div className="bg-white w-3/4 shadow-md rounded-md flex flex-col md:flex-row">
            <QrGenerator />
          </div>
        </>
      )}
    </div>
  );
}
