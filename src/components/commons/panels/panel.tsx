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
      <div className={`flex flex-col items-start justify-start gap-4 p-4 border border-restaurants-200 rounded-lg shadow-lg ${className}`}>
        {children}
      </div>
    </>
  );
}
