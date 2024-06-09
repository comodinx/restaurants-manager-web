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
      <div className={`flex flex-row items-center justify-start gap-3 ${className}`}>
        {children}
      </div>
    </>
  );
}
