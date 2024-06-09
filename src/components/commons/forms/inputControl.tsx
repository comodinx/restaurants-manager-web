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
      <div className={`input-control-container ${className}`}>
        <label className={`input-control-label ${classNameLabel}`}>{label}</label>
        <div className="input-control-icon-container">
          {!!icon && <div className={`input-control-icon ${classNameIcon}`}>{icon}</div>}
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
