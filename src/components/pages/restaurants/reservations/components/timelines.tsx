import { useContext, useEffect, useRef } from "react";
import { RestaurantReservationsContext } from "../context";
import { Timeline } from "./timeline";

//
// interfaces
//
export type TimelinesProperties = {
  onSelectTable: (selectedTable: any, date: string) => void;
};

//
// component
//
export function Timelines(props: TimelinesProperties) {
  //
  // constants
  //
  const { onSelectTable } = props;
  const loader = useRef(null);
  const {
    timelines = {},
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useContext(RestaurantReservationsContext);

  //
  // effects
  //
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let timeoutId;

        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          timeoutId = setTimeout(() => fetchNextPage(), 1000);
        }

        // Limpiamos el timeout en caso de cambiar de pantalla, esto evitar errores de renderin con eventos asincronicos
        return () => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        };
      },
      {
        threshold: 1.0,
      }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  //
  // render
  //
  return (
    <>
      <section className="restaurant-reservations-timelines-container">
        <div className="restaurant-reservations-timelines">
          <h2 className="restaurant-reservations-timelines-title">¿Que día vas a reservar?</h2>

          <ol className="restaurant-reservations-timelines-entries">
            {Object.keys(timelines).map((date: string, i: any) => (
              <Timeline
                key={i}
                date={date}
                timeline={timelines[date]}
                onSelectTable={onSelectTable}
              />
            ))}
          </ol>

          <div ref={loader} className="restaurant-reservations-timelines-loader-container">
            <div className="restaurant-reservations-timelines-loader">cargando...</div>
          </div>
        </div>
      </section>
    </>
  );
}
