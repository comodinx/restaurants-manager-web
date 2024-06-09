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
      <h2 className="mt-10 mb-4 font-semibold text-xl text-restaurants-950">
        ¿Que día vas a reservar?
      </h2>

      <ol className="relative border-s-2 border-restaurants-200">
        {Object.keys(timelines).map((date: string, i: any) => (
          <Timeline key={i} date={date} timeline={timelines[date]} onSelectTable={onSelectTable} />
        ))}
      </ol>

      <div ref={loader} className="flex items-center justify-center">
        <div className="px-3 py-1 text-xs font-medium leading-none text-center text-restaurants-950 bg-green-200 rounded-full animate-pulse">
          cargando...
        </div>
      </div>
    </>
  );
}
