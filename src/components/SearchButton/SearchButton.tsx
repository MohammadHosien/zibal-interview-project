"use client";

import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRef } from "react";

const SearchButton = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (e: string) => void;
}) => {
  const [isInput, setIsinput] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (event.target.tagName !== ref.current?.tagName && isInput) {
        setIsinput(false);
        onChange("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    if (isInput) {
      ref.current?.focus();
    }
  }, [isInput]);

  return !isInput ? (
    <div className="inline-flex items-center gap-2">
      <div
        onClick={() => {
          setIsinput(true);
        }}
        className="bg-purlple-base p-2 rounded-lg"
      >
        <FaSearch className="fill-white-base" size={12} />
      </div>
      {label}
    </div>
  ) : (
    <input
      ref={ref}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      className="w-[130px] outline-none border-purlple-base py-1 px-2 border-2 rounded-md shadow-md"
    />
  );
};

export default SearchButton;
