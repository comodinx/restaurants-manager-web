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
        className={`bg-white border border-restaurants-300 text-restaurants-950 text-sm rounded-lg focus:ring-restaurants-500 focus:border-restaurants-300 focus:outline-restaurants-300 block w-full ps-10 p-2.5 ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
