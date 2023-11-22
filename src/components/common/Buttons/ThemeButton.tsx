import React from "react";

const baseClasses = {
  borderRadius: "8px",
  padding: "18px, 48px, 18px, 48px",
  width: "156px",
  height: "54px",
  border: "1px solid #2C263426",
  gap: "10px",
};

const ThemeButton = ({ text, onClick, isAccent }) => {
  const baseClasses =
    "px-8 py-2 rounded-[8px] focus:outline-lilacPurple focus:ring transition ease-in-out duration-300";
  const accentClasses =
    "bg-lilacPurple text-white hover:bg-purple-700 focus:ring-purple-500";
  const standardClasses =
    "bg-white text-black border-2 border-lightgray hover:bg-gray-100 ";

  const buttonClasses = `${baseClasses} ${
    isAccent ? accentClasses : standardClasses
  }`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default ThemeButton;
