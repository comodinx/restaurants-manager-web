import { IconRestaurant } from "@app/components/commons";
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
      <Link
        href={`/restaurants/${restaurant.id}`}
        className="restaurant fadeIn"
        style={{ backgroundImage: "url('/assets/media/img/shape-path.svg')" }}
      >
        <div className="restaurant-content-container">
          <div className="restaurant-image-container">
            <IconRestaurant className="restaurant-image" />
          </div>
          <h3 className="restaurant-title">{restaurant.description}</h3>
        </div>

        <div className="restaurant-bg">
          <img src="/assets/media/img/shape-utensils.png" alt="Categoría" />
        </div>
      </Link>
    </>
  );
}
