//
// interfaces
//
export type IconEmailProperties = {
  className?: string;
  size?: number;
};

//
// component
//
export function IconEmail(props: IconEmailProperties) {
  //
  // constants
  //
  const { className = "text-restaurants-300", size = 4 } = props;

  //
  // render
  //

  /*
    This comment is used for force tailwind smart build
      w-4 h-4
      w-6 h-6
      w-8 h-8
  */
  return (
    <svg
      className={`w-${size} h-${size} ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 16"
    >
      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
    </svg>
  );
}
