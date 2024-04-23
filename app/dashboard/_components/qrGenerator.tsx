import ColorPicker from "@/components/colorPicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useLinkData } from "@/hooks/useLinkData";
import { useQrGenerator } from "@/hooks/useQrGenerator";
import { useUrlId } from "@/hooks/useUrlId";
import { linkConstructor } from "@/lib/utils";
import { Download } from "lucide-react";
import QRCodeStyling, {
  CornerSquareType,
  DotType,
  FileExtension,
} from "qr-code-styling";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

const DotOptions = [
  { value: "square", label: "Square" },
  { value: "dots", label: "Circle" },
  { value: "extra-rounded", label: "Rounded" },
  { value: "classy", label: "Classy" },
];
const CornerOptions = [
  { value: "square", label: "Square" },
  { value: "dots", label: "Circle" },
  { value: "extra-rounded", label: "Rounded" },
];
const FileExtensions = [
  { value: "png", label: "PNG" },
  { value: "svg", label: "SVG" },
  { value: "jpeg", label: "JPEG" },
  { value: "webp", label: "WEBP" },
];
const qrCode: QRCodeStyling = new QRCodeStyling({
  width: 300,
  height: 300,
  image: "/logo.png",
  dotsOptions: {
    color: "#016496",
    type: "square",
  },
  data: "https://bit-snip.vercel.app",
  cornersSquareOptions: {
    color: "#016496",
    type: "square",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20,
  },
});

const QrGenerator = () => {
  const { linkData } = useLinkData();
  const qrCodeRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { urlId, setUrlId } = useUrlId();
  const {
    color,
    fileExt,
    cornerStyle,
    dotStyle,
    imageUrl,
    setFileExt,
    setCornerStyle,
    setDotStyle,
    setImageUrl,
  } = useQrGenerator();

  useEffect(() => {
    qrCode.append(qrCodeRef.current as HTMLElement);
  }, []);
  //   useEffect(() => {
  //     if (window && window.innerWidth < 768) {
  //       qrCode.update({
  //         width: 200,
  //         height: 200,
  //       });
  //     }
  //   }, []);

  const handleUpload = (file: File) => {
    if (file) {
      const imgurl = URL.createObjectURL(file);
      setImageUrl(imgurl);
    }
  };
  const handleClick = () => {
    qrCode.update({
      image: imageUrl || "/logo.png",
      data: linkConstructor(urlId),
      dotsOptions: {
        color,
        type: dotStyle as DotType,
      },
      cornersSquareOptions: {
        color,
        type: cornerStyle as CornerSquareType,
      },
    });
    toast.success("QR code generated successfully");
  };
  const handleDownload = () => {
    qrCode.download({
      extension: fileExt,
    });
  };
  return (
    <>
      <div className="flex flex-col items-center gap-x-4 w-full md:w-1/2 px-4 m-2">
        <Label className="text-lg text-meta-4">Edit Details</Label>
        <div className="w-full my-2">
          <Label className="block mb-2 text-sm font-medium text-gray-900">
            Select link
          </Label>
          <Select
            onValueChange={(value: string) => {
              //       setUrl(linkConstructor(value));
              setUrlId(value);
            }}
            defaultValue={urlId}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select link to generate QR code" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {linkData.map((link) => (
                  <SelectItem key={link.urlId} value={link.urlId}>
                    <span className="text-meta-3 font-medium text-base">
                      {linkConstructor(link.urlId)}
                    </span>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full my-2 ">
          <Label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="file_input"
          >
            Upload file
          </Label>
          <div className="w-full flex gap-x-2">
            <Input
              className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 file:bg-meta-0 file:text-meta-1 p-0 file:h-full"
              id="file_input"
              type="file"
              ref={inputRef}
              //     defaultValue={imageUrl}
              onChange={(e) => handleUpload(e.target.files?.[0] as File)}
            />
            <Button
              onClick={() => {
                setImageUrl("");
                inputRef.current?.files?.[0] && (inputRef.current.value = "");
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
        <div className="w-full my-2">
          <Label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="color_input"
          >
            Select Color
          </Label>
          <ColorPicker />
        </div>
        <div className="w-full my-2 grid grid-cols-2 gap-x-2">
          <div>
            <Label className="block mb-2 text-sm font-medium text-gray-900">
              Dot Style
            </Label>
            <Select
              onValueChange={(value: string) => {
                setDotStyle(value);
              }}
              defaultValue={dotStyle}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select dot style" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {DotOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <span className="text-meta-3 font-medium text-base">
                        {option.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="block mb-2 text-sm font-medium text-gray-900">
              Corner Style
            </Label>
            <Select
              onValueChange={(value: string) => {
                setCornerStyle(value);
              }}
              defaultValue={cornerStyle}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Corner style" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {CornerOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <span className="text-meta-3 font-medium text-base">
                        {option.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button className="my-2" onClick={handleClick}>
          Generate
        </Button>
      </div>

      <Separator
        orientation="vertical"
        className="h-[90%] my-auto hidden md:block"
      />

      <div className="flex flex-col items-center justify-center md:justify-start gap-x-4 w-full md:w-1/2 m-2">
        <Label className="text-lg text-meta-4">QR Code</Label>
        <div ref={qrCodeRef as React.RefObject<HTMLDivElement>} />
        <div className="w-full my-2 flex gap-x-4">
          <Select
            onValueChange={(value: FileExtension) => {
              setFileExt(value);
            }}
            defaultValue={fileExt}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Format" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {FileExtensions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <span className="text-meta-3 font-medium text-base">
                      {option.label}
                    </span>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button onClick={handleDownload}>
            <Download size={16} className="mr-2" />
            Download
          </Button>
        </div>
      </div>
    </>
  );
};
export default QrGenerator;
