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
    onChange = () => {},
  } = props;

  //
  // render
  //
  return (
    <>
      <div className="flex flex-col items-start justify-center">
        <label className="block mb-2 text-sm font-medium text-restaurants-900">{label}</label>
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
          onChange={onChange} />
      </div>
    </>
  );
}
