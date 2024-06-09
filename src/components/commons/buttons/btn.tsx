import { IconSpinner } from "@app/components";

//
// constants
//
const classesByVariant: any = {
  cancel:
    "text-restaurants-950 bg-restaurants-50 hover:bg-restaurants-100 hover:text-restaurants-700 focus:ring-restaurants-100",
  accept:
    "text-restaurants-950 bg-green-500 hover:bg-green-600 hover:text-restaurants-950 focus:ring-green-100 disabled:animate-pulse",
};

//
// interfaces
//
export type BtnProperties = {
  children: any;
  className?: string;
  variant?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (e: any) => void;
};

//
// component
//
export function Btn(props: BtnProperties) {
  //
  // constants
  //
  const {
    children,
    className = "",
    variant = "accept",
    disabled = false,
    isLoading = false,
    onClick = () => null,
  } = props;

  //
  // render
  //
  return (
    <button
      type="button"
      disabled={isLoading || disabled}
      className={`btn ${classesByVariant[variant] || ""} ${className}`}
      onClick={onClick}
    >
      {isLoading && <IconSpinner />}
      {children}
    </button>
  );
}
