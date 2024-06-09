import Link from "next/link";

//
// interfaces
//
export type RestaurantProperties = {
  restaurant: any;
};

//
// component
//
export function Restaurant(props: RestaurantProperties) {
  //
  // constants
  //
  const { restaurant } = props;

  //
  // render
  //
  return (
    <>
      <Link href={`/restaurants/${restaurant.id}`} className="restaurant fadeIn" style={{ backgroundImage: "url('/assets/media/img/shape-path.svg')" }}>
        <div className="restaurant-content-container">
          <div className="restaurant-image-container">
            <img
              className="restaurant-image"
              src={`/assets/media/img/${restaurant.icon}`}
              alt={restaurant.description}
            />
          </div>
          <h3 className="restaurant-title">{restaurant.description}</h3>
        </div>

        <div className="restaurant-bg">
          <img src="/assets/media/img/shape-paws.svg" alt="Categoría" />
        </div>
      </Link>
    </>
  );
}
