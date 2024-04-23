import React, { useState } from "react";
import reactCSS from "reactcss";
import { TwitterPicker } from "react-color";
import { useQrGenerator } from "@/hooks/useQrGenerator";

const ColorPicker = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  const { color, setColor } = useQrGenerator();

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChangeComplete = (newColor: { hex: string }) => {
    setColor(newColor.hex);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className=" p-1 bg-background rounded-md border cursor-pointer flex items-center"
        style={{ borderColor: color }}
      >
        <div
          style={{ backgroundColor: color }}
          className="w-24 h-9 rounded-md"
        />
        <span className="mx-2">{color}</span>
      </div>
      {displayColorPicker ? (
        <div className="absolute z-[2]">
          <div
            className="fixed top-0 right-0 bottom-0 left-0"
            onClick={handleClose}
          />
          <TwitterPicker
            color={color}
            onChangeComplete={handleChangeComplete}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
