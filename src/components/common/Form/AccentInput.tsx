import React from "react";

interface TextInputProps {
  title: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const AccentInput: React.FC<TextInputProps> = ({
  title,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <p className="flex-shrink-0 tracking-wider text-md font-urbanist font-bold text-midnightIndigo dark:text-white">
        {title}
      </p>
      <div
        style={{ borderBottom: "2px solid #cccccc" }}
        className="flex items-center w-full py-1 focus:border-midnightIndigo"
      >
        <input
          type="text"
          placeholder={placeholder || title}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-midnightIndigo outline-none text-md flex-grow bg-transparent pl-1 border-lightgray"
        />
      </div>
    </div>
  );
};

export default AccentInput;
