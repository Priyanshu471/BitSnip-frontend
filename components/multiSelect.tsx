"use client";
import React, { useState, useRef } from "react";
import { Input } from "./ui/input";
import { X } from "lucide-react";

function TagSelect() {
  const [open, setOpen] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const textInputRef = useRef<HTMLInputElement>(null);

  const addTag = (tag: string) => {
    tag = tag.trim();
    if (tag !== "" && !hasTag(tag)) {
      setTags([...tags, tag]);
    }
    clearSearch();
    textInputRef?.current?.focus();
    fireTagsUpdateEvent();
  };

  const fireTagsUpdateEvent = () => {
    const event = new CustomEvent("tags-update", {
      detail: { tags: tags },
      bubbles: true,
    });
    textInputRef?.current?.dispatchEvent(event);
  };

  const hasTag = (tag: string) => {
    return tags.some((e) => e.toLowerCase() === tag.toLowerCase());
  };

  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
    fireTagsUpdateEvent();
  };

  const search = (q: string) => {
    if (q.includes(",")) {
      q.split(",").forEach((val) => {
        addTag(val);
      });
    }
    toggleSearch();
  };

  const clearSearch = () => {
    toggleSearch();
    setTextInput("");
  };

  const toggleSearch = () => {
    setOpen(textInput !== "");
  };

  return (
    <div className="w-full" data-tags={JSON.stringify(tags)}>
      <div
        onClick={clearSearch}
        onKeyDown={(e) => e.key === "Escape" && clearSearch()}
        onBlur={clearSearch}
      >
        <div
          className="relative"
          onKeyDown={(e) => e.key === "Enter" && addTag(textInput)}
        >
          <Input
            ref={textInputRef}
            value={textInput}
            onChange={(e) => {
              setTextInput(e.target.value);
              search(e.target.value);
            }}
            className="rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="tags..."
          />
          {open && (
            <div className="absolute z-40 left-0 mt-2 w-full">
              <div className="py-1 text-sm bg-white rounded shadow-lg border border-gray-300">
                <div
                  onClick={() => addTag(textInput)}
                  className="block py-1 px-5 cursor-pointer hover:bg-meta-4 hover:text-white"
                >
                  Add tag &quot;
                  <span className="font-semibold">{textInput}</span>&quot;
                </div>
              </div>
            </div>
          )}
          {/* selections */}
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-meta-3/10 border-2  border-meta-3 inline-flex items-center text-sm rounded-3xl mt-2 mr-1"
            >
              <span className="ml-2 mr-1 leading-relaxed truncate max-w-xs text-meta-3">
                {tag}
              </span>
              <button
                onClick={() => removeTag(index)}
                className="w-6 h-8 inline-block align-middle text-meta-4 hover:bg-none focus:outline-none"
              >
                <X size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TagSelect;
