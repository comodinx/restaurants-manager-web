import { StateLoading, StateError, StateEmpty } from "@app/components";
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
  const isEmpty = !isLoading && !isError && !restaurants?.length;

  //
  // render
  //
  return (
    <>
      <section className={"restaurants-container fadeIn"}>
        {isLoading && !isError && <StateLoading />}

        {isError && <StateError className="restaurants-state-error" />}

        {isEmpty && (
          <StateEmpty
            className="restaurants-state-empty"
            message="🍽️ No encontramos el restaurante que estas buscando, lo sentimos mucho 🥲"
          />
        )}

        {!isLoading && !isError && !isEmpty && (
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
