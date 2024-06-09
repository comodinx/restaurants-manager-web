//
// interfaces
//
export type BtnIconProperties = {
  children: any;
  className?: string;
  size?: string;
  onClick?: (e: any) => void;
};

//
// component
//
export function BtnIcon(props: BtnIconProperties) {
  //
  // constants
  //
  const { children, className = "", size = "w-8 h-8", onClick = () => {} } = props;

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
    <button type="button" className={`text-restaurants-400 bg-transparent hover:bg-restaurants-200 hover:text-restaurants-900 rounded-lg text-sm absolute top-2.5 end-2.5 inline-flex items-center justify-center ${size} ${className}`} onClick={onClick}>
      {children}
      <span className="sr-only">&nbsp;</span>
    </button>
  );
}
