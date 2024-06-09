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
      <div className={`input-number-container ${className}`}>
        <button
          type="button"
          className={`input-number-btn input-number-btn-subtract ${classNameSubtract}`}
          onClick={() => handleChangeNumberValue(-1)}
        >
          <IconSubtract />
        </button>

        <input
          type={type}
          value={numberValue}
          placeholder={placeholder}
          className={`input-number ${classNameInput}`}
          onChange={(e: any) => handleChangeNumberValue(e.target.value)}
        />

        <button
          type="button"
          className={`input-number-btn input-number-btn-plus ${classNamePlus}`}
          onClick={() => handleChangeNumberValue(1)}
        >
          <IconPlus />
        </button>
      </div>
    </>
  );
}
