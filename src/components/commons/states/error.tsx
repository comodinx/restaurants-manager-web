import { Panel } from "../panels";

//
// interfaces
//
export type StateErrorProperties = {
  className?: string;
  title?: string;
  message?: string;
};

//
// component
//
export function StateError(props: StateErrorProperties) {
  //
  // constants
  //
  const {
    className = "",
    title = "Ooops!",
    message = "❌ Parece que ocurrio un error. Por favor intenta de nuevo más tarde 🥲",
  } = props;

  //
  // render
  //
  return (
    <>
      <Panel className={className}>
        <h2 className="state-error-title">{title}</h2>
        <p className="state-error-message">{message}</p>
      </Panel>
    </>
  );
}
