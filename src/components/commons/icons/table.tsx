//
// interfaces
//
export type IconTableProperties = {
  capacity: number;
  className?: string;
  size?: string;
  alt: string;
};

//
// component
//
export function IconTable(props: IconTableProperties) {
  //
  // constants
  //
  const { capacity, alt, className = "", size = "w-5 h-5" } = props;

  //
  // render
  //

  /*
    This comment is used for force tailwind smart build
      w-2.5 h-2.5
      w-4 h-4
      w-6 h-6
      w-8 h-8
  */
  return (
    <img
      className={`${className} ${size}`}
      src={`/assets/media/img/img-table-${capacity}-guests.png`}
      alt={alt}
    />
  );
}
