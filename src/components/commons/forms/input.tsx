//
// interfaces
//
export type InputProperties = {
  type?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
};

//
// component
//
export function Input(props: InputProperties) {
  //
  // constants
  //
  const {
    type = "text",
    placeholder = "",
    className = "",
    value = "",
    onChange = () => null,
  } = props;

  //
  // render
  //
  return (
    <>
      <input
        type={type}
        className={`input ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
