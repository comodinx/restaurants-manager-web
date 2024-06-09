import { StateLoading, StateError } from "@app/components";
import { useRestaurants } from "../hooks";
import { Restaurant } from "./restaurant";

//
// interfaces
//
export type RestaurantsProperties = {
  searchTerm?: string;
};

//
// component
//
export function Restaurants(props: RestaurantsProperties) {
  //
  // constants
  //
  const { searchTerm = null } = props;
  const { restaurants, isError, isLoading } = useRestaurants({ searchTerm });

  //
  // render
  //
  return (
    <>
      <section className={`restaurants-container fadeIn`}>
        {isLoading && !isError && <StateLoading />}

        {isError && <StateError />}

        {!isLoading && !isError && (
          <div className="restaurants">
            {restaurants.map((restaurant: any, i: any) => (
              <Restaurant key={i} restaurant={restaurant} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
