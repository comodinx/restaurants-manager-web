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
        <h2 className="state-empty-title">{title}</h2>
        <p className="state-empty-message">{message}</p>
      </Panel>
    </>
  );
}
