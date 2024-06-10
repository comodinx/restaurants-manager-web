//
// interfaces
//
export type IndicatorProperties = {
  text: string;
  variant?: string;
};

//
// component
//
export function Indicator(props: IndicatorProperties) {
  //
  // constants
  //
  const { text, variant = "green" } = props;

  return (
    <>
      {/*
        This comment is used for force tailwind smart build
          bg-red-100 bg-red-500 text-red-800
          bg-green-100 bg-green-500 text-green-800
          bg-violet-100 bg-violet-500 text-violet-800
      */}
      <span className={`indicator bg-${variant}-100 text-${variant}-800`}>
        <span className={`indicator-icon bg-${variant}-500`}></span>
        {text}
      </span>
    </>
  );
}
