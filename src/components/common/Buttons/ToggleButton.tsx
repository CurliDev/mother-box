// ButtonBox.tsx
import React, { useState } from "react";

interface ButtonBoxProps {
  leftButtonLabel: string;
  rightButtonLabel: string;
  initialPosition: string;
  buttonWidth: number;

  onToggle: (value: string) => void;
}

const ButtonBox: React.FC<ButtonBoxProps> = ({
  leftButtonLabel,
  rightButtonLabel,
  initialPosition,
  buttonWidth,
  onToggle,
}) => {
  const [position, setPosition] = useState<string>(initialPosition);
  const isLeftSelected = position === "15px";

  const handleToggle = (value: string) => {
    setPosition(value);
    onToggle(value);
  };

  return (
      <div className="flex items-center justify-center relative p-4 bg-white rounded-full">
        <div
          id="btnToggle"
          className={`bg-midnightIndigo rounded-lg absolute transition-all duration-500`}
          style={{ left: position, width: buttonWidth + "rem", height: "54px" }}
        />
        <button
          type="button"
          className={`flex-1 text-sm ${
            isLeftSelected ? "text-white" : "text-midnightIndigo"
          } bg-transparent border-0 outline-none relative text-center ml-2 px-6 py-3`}
          onClick={() => handleToggle("15px")}
        >
          {leftButtonLabel}
        </button>
        <button
          type="button"
          className={`flex-1 text-sm ${
            !isLeftSelected ? "text-white" : "text-midnightIndigo"
          } bg-transparent border-0 outline-none relative text-center px-6 py-3`}
          onClick={() => handleToggle("9.5rem")}
        >
          {rightButtonLabel}
        </button>
      </div>
  );
};

export default ButtonBox;
