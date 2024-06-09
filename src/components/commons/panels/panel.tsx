//
// interfaces
//
export type PanelProperties = {
  children?: any;
  className?: string;
};

//
// component
//
export function Panel(props: PanelProperties) {
  //
  // constants
  //
  const { className = "", children } = props;

  //
  // render
  //
  return (
    <>
      <div className={`panel ${className}`}>{children}</div>
    </>
  );
}
