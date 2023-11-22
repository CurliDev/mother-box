// ButtonBox.tsx
import React, { useState } from "react";

interface ButtonBoxProps {
  leftButtonLabel: string;
  rightButtonLabel: string;
  onToggle: (value: string) => void;
}

const ButtonBox: React.FC<ButtonBoxProps> = ({
  leftButtonLabel,
  rightButtonLabel,
  onToggle,
}) => {
  const [isLeftSelected, setIsLeftSelected] = useState(true);

  const handleToggle = () => {
    const newPosition = isLeftSelected ? "right" : "left";
    setIsLeftSelected(!isLeftSelected);
    onToggle(newPosition);
  };

  return (
    <div className="relative flex items-center justify-center p-4 bg-white rounded-full w-full">
      <div
        id="btnToggle"
        className={`absolute bg-midnightIndigo rounded-lg transition-transform duration-500`}
        style={{
          transform: isLeftSelected ? "translateX(-45%)" : "translateX(45%)",
          width: "50%",
          height: "54px",
        }}
      />
      <div className="flex items-center justify-center w-full border-2 border-lightgray rounded-[8px] overflow-hidden">
        <button
          type="button"
          className={`flex-1 text-sm ${
            isLeftSelected ? "text-white" : "text-midnightIndigo"
          } bg-transparent outline-none relative text-center px-6 py-4`}
          onClick={handleToggle}
        >
          {leftButtonLabel}
        </button>
        <button
          type="button"
          className={`flex-1 text-sm ${
            !isLeftSelected ? "text-white" : "text-midnightIndigo"
          } bg-transparent outline-none relative text-center px-6 py-4`}
          onClick={handleToggle}
        >
          {rightButtonLabel}
        </button>
      </div>
    </div>
  );
};

export default ButtonBox;
