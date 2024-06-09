//
// interfaces
//
export type PanelDividerProperties = {
  className?: string;
};

//
// component
//
export function PanelDivider(props: PanelDividerProperties) {
  //
  // constants
  //
  const { className = "" } = props;

  //
  // render
  //
  return (
    <>
      <div className={`w-full h-1 border-b border-restaurants-200 ${className}`}></div>
    </>
  );
}
