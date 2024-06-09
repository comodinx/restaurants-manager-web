//
// interfaces
//
export type PanelItemProperties = {
  children?: any;
  className?: string;
};

//
// component
//
export function PanelItem(props: PanelItemProperties) {
  //
  // constants
  //
  const { className = "", children } = props;

  //
  // render
  //
  return (
    <>
      <div className={`panel-item ${className}`}>{children}</div>
    </>
  );
}
