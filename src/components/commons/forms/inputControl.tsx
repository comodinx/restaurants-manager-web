import { Input } from "./input";

//
// interfaces
//
export type InputControlProperties = {
  icon?: any;
  type?: string;
  label?: string;
  value?: string;
  className?: string;
  classNameInput?: string;
  classNameLabel?: string;
  classNameIcon?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
};

//
// component
//
export function InputControl(props: InputControlProperties) {
  //
  // constants
  //
  const {
    type = "text",
    icon = null,
    label = "",
    value = "",
    className = "",
    classNameInput = "",
    classNameLabel = "",
    classNameIcon = "",
    placeholder = "",
    onChange = () => null,
  } = props;

  //
  // render
  //
  return (
    <>
      <div className={`flex flex-col items-start justify-center ${className}`}>
        <label className={`block mb-2 text-sm font-medium text-restaurants-900 ${classNameLabel}`}>
          {label}
        </label>
        <div className="relative">
          {!!icon && (
            <div
              className={`absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none ${classNameIcon}`}
            >
              {icon}
            </div>
          )}
          <Input
            className={classNameInput}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}
