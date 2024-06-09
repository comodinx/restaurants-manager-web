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
  const { children, className = "", size = "w-8 h-8", onClick = () => null } = props;

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
    <button type="button" className={`btn-icon ${size} ${className}`} onClick={onClick}>
      {children}
      <span className="sr-only">&nbsp;</span>
    </button>
  );
}
