import { IconSpinner } from "@app/components";

//
// constants
//
const classesByVariant: any = {
  cancel: "text-restaurants-950 bg-restaurants-50 hover:bg-restaurants-100 hover:text-restaurants-700 focus:ring-restaurants-100",
  accept: "text-restaurants-950 bg-green-500 hover:bg-green-600 hover:text-restaurants-950 focus:ring-green-100 disabled:animate-pulse",
};

//
// interfaces
//
export type BtnProperties = {
  children: any;
  className?: string;
  variant?: string;
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
  const { children, className = "", variant = "accept", isLoading = false, onClick = () => {} } = props;

  //
  // render
  //
  return (
    <button
      type="button"
      disabled={isLoading}
      className={`flex flex-row items-center justify-center px-5 py-3 text-sm font-medium text-center rounded-lg focus:outline-none focus:z-10 focus:ring-4 ${classesByVariant[variant] || ""} ${className}`}
      onClick={onClick}>
      {isLoading && <IconSpinner />}
      {children}
    </button>
  );
}
