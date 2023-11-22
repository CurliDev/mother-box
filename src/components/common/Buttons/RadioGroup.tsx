// components/RadioGroup.tsx
import React, { useState } from "react";

interface RadioOption {
  id: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  name: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, name }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelection = (id: string) => {
    setSelectedOption(id);
    // Programmatically check the radio input
    const radioInput = document.getElementById(id) as HTMLInputElement;
    if (radioInput) {
      radioInput.checked = true;
    }
  };

  return (
    <div className="container mx-auto">
      <ul>
        {options.map((option) => (
          <li
            key={option.id}
            className="text-lightgray flex items-center h-10 cursor-pointer"
            onClick={() => handleSelection(option.id)}
          >
            <div
              className={`check rounded-full border-6 border-gray-400 h-6 w-6 ml-1 ${
                selectedOption === option.id ? "border-lilacPurple " : ""
              }`}
            ></div>
            <input
              type="radio"
              style={{ display: "none" }}
              id={option.id}
              name={name}
              className="absolute opacity-0"
              checked={selectedOption === option.id}
              onChange={() => {}}
              tabIndex={-1}
            />
            <label
              htmlFor={option.id}
              className="block font-light text-lg pl-4 text-black duration-300"
            >
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioGroup;
