//
// interfaces
//
export type IconPhoneProperties = {
  className?: string;
  size?: number;
};

//
// component
//
export function IconPhone(props: IconPhoneProperties) {
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
    <svg className={`w-${size} h-${size} ${className}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 14h12M1 4h12M6.5 16.5h1M2 1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"></path>
  </svg>
  );
}
