import { useContext } from "react";
import { RestaurantReservationsContext } from "../context";
import { InfiniteScroll } from "@app/components";
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
  const {
    timelines = {},
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useContext(RestaurantReservationsContext);

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

          <InfiniteScroll
            className="restaurant-reservations-timelines-loader-container"
            classNameText="restaurant-reservations-timelines-loader"
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </div>
      </section>
    </>
  );
}
