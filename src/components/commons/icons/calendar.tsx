//
// interfaces
//
export type IconCalendarProperties = {
  className?: string;
  size?: number;
};

//
// component
//
export function IconCalendar(props: IconCalendarProperties) {
  //
  // constants
  //
  const { className = "", size = 2.5 } = props;

  //
  // render
  //

  /*
    This comment is used for force tailwind smart build
      w-2.5 h-2.5
      w-4 h-4
      w-6 h-6
      w-8 h-8
  */
  return (
    <svg
      className={`${className} w-${size} h-${size}`}
      fill="#000000"
      viewBox="0 0 20 20"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
    </svg>
  );
}
