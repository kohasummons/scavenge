"use client";

import { useState, useRef, useEffect } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import type React from "react"; // Added import for React

interface SelectOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface SelectProps {
  options: SelectOption[];
  defaultValue: string;
  onChange: (value: string) => void;
}

export function Select({ options, defaultValue, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative " ref={dropdownRef}>
      <button
        className="flex items-center gap-2 px-2 py-1 
        text-sm bg-background border border-[#F1F1F1] rounded-2xl shadow-sm hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-1">
          {selectedOption?.icon}
          <span>{selectedOption?.label}</span>
        </div>
        <CaretDown size={16} className="h-4 w-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100"
              onClick={() => handleSelect(option.value)}
            >
              {option.icon}
              <span className="ml-2">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
