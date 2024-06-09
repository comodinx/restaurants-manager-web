import { Panel } from "../panels";

//
// interfaces
//
export type StateEmptyProperties = {
  className?: string;
  title?: string;
  message?: string;
};

//
// component
//
export function StateEmpty(props: StateEmptyProperties) {
  //
  // constants
  //
  const { className = "", title = "Ooops!", message = "" } = props;

  //
  // render
  //
  return (
    <>
      <Panel className={className}>
        <h2 className="font-semibold text-xl text-restaurants-950">{title}</h2>
        <p className="text-sm text-restaurants-950">{message}</p>
      </Panel>
    </>
  );
}
