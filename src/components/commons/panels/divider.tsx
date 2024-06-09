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
      <div className={`panel-divider ${className}`}></div>
    </>
  );
}
