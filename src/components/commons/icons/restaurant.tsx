//
// interfaces
//
export type IconRestaurantProperties = {
  className?: string;
  size?: number;
};

//
// component
//
export function IconRestaurant(props: IconRestaurantProperties) {
  //
  // constants
  //
  const { className = "", size = 2.5 } = props;

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
    <img className={`${className} w-${size} h-${size}`} src="/assets/media/img/ic-restaurant.png" alt="" />
  );
}
