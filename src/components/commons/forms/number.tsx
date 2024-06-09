//
// interfaces

import { IconPlus, IconSubtract } from "@app/components";
import { useState } from "react";

//
export type InputNumberProperties = {
  type?: string;
  className?: string;
  classNameInput?: string;
  classNameSubtract?: string;
  classNamePlus?: string;
  placeholder?: string;
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
};

//
// component
//
export function InputNumber(props: InputNumberProperties) {
  //
  // constants
  //
  const {
    min = 1,
    max = 99,
    type = "text",
    value = 1,
    className = "",
    classNameInput = "",
    classNameSubtract = "",
    classNamePlus = "",
    placeholder = "1",
    onChange = () => null,
  } = props;
  const [numberValue, setNumberValue] = useState(value);

  //
  // helpers
  //
  const handleChangeNumberValue = (value: number) => {
    setNumberValue((_numberValue) => {
      let newNumberValue = _numberValue + value;

      if (newNumberValue < min) {
        newNumberValue = min;
      }
      if (newNumberValue > max) {
        newNumberValue = max;
      }

      onChange(newNumberValue);
      return newNumberValue;
    });
  };

  //
  // render
  //
  return (
    <>
      <div className={`relative flex items-center max-w-[8rem] ${className}`}>
        <button
          type="button"
          className={`bg-restaurants-50 hover:bg-restaurants-200 border border-restaurants-300 rounded-s-lg py-2 px-3 h-10 focus:ring-restaurants-100 focus:ring-2 focus:outline-restaurants-300 ${classNameSubtract}`}
          onClick={() => handleChangeNumberValue(-1)}
        >
          <IconSubtract />
        </button>

        <input
          type={type}
          value={numberValue}
          placeholder={placeholder}
          className={`bg-white border-x-0 border-restaurants-300 h-10 text-center text-restaurants-950 text-sm focus:ring-restaurants-300 focus:border-restaurants-500 focus:outline-none block w-full p-2.5 ${classNameInput}`}
          onChange={(e: any) => handleChangeNumberValue(e.target.value)}
        />

        <button
          type="button"
          className={`bg-restaurants-50 hover:bg-restaurants-200 border border-restaurants-300 rounded-e-lg py-2 px-3 h-10 focus:ring-restaurants-100 focus:ring-2 focus:outline-restaurants-300 ${classNamePlus}`}
          onClick={() => handleChangeNumberValue(1)}
        >
          <IconPlus />
        </button>
      </div>
    </>
  );
}
