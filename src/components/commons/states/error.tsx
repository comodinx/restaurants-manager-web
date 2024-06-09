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
        <h2 className="font-semibold text-xl text-restaurants-950">{title}</h2>
        <p className="text-sm text-restaurants-950">{message}</p>
      </Panel>
    </>
  );
}
