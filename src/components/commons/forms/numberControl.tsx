import { InputNumber } from "@app/components";

//
// interfaces
//
export type InputNumberControlProperties = {
  type?: string;
  label?: string;
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
export function InputNumberControl(props: InputNumberControlProperties) {
  //
  // constants
  //
  const {
    min = 1,
    max = 99,
    type = "text",
    label = "",
    value = 1,
    className = "",
    classNameInput = "",
    classNameSubtract = "",
    classNamePlus = "",
    placeholder = "1",
    onChange = () => null,
  } = props;

  //
  // render
  //
  return (
    <>
      <div className="input-number-control-container">
        <label className="input-number-control-label">{label}</label>
        <InputNumber
          min={min}
          max={max}
          type={type}
          value={value}
          className={className}
          classNameInput={classNameInput}
          classNameSubtract={classNameSubtract}
          classNamePlus={classNamePlus}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
}
