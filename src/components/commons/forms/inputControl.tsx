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
    placeholder = "",
    onChange = () => {},
  } = props;

  //
  // render
  //
  return (
    <>
      <div className="flex flex-col items-start justify-center">
          <label className="block mb-2 text-sm font-medium text-restaurants-900">{label}</label>
          <div className="relative">
            {!!icon && (
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                {icon}
              </div>
            )}
            <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
          </div>
        </div>
    </>
  );
}
