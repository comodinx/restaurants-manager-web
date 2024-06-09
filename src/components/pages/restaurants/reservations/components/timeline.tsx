import moment from "moment";
import { IconCalendar } from "@app/components";
import { Table } from "./table";
import constants from "@app/constants";
import { useContext } from "react";
import { RestaurantReservationsContext } from "../context";

//
// interfaces
//
export type TimelineProperties = {
  date: string;
  timeline: any;
  onSelectTable: (selectedTable: any, date: string) => void;
};

//
// component
//
export function Timeline(props: TimelineProperties) {
  //
  // constants
  //
  const { date, timeline, onSelectTable } = props;
  const { selectedNumGuests, restaurant } = useContext(RestaurantReservationsContext);
  const formattedDate = moment(date, constants.dates.formatReservationDate).format(
    constants.dates.formatReservationDateForHummands
  );
  const tables: any = restaurant.tables.reduce((acc: any, table: any) => {
    acc[table.id] = table;
    return acc;
  }, {});
  const entries = timeline.filter(
    (entry: any) => tables[entry.tableId].capacity >= selectedNumGuests
  );

  //
  // render
  //
  return (
    <>
      <li className="restaurant-reservations-timeline">
        <span className="restaurant-reservations-timeline-icon">
          <IconCalendar />
        </span>

        <time className="restaurant-reservations-timeline-date">{formattedDate}</time>

        <div className="restaurant-reservations-timeline-tables">
          {entries.map((entry: any, i: any) => (
            <Table
              key={i}
              date={date}
              table={tables[entry.tableId]}
              available={entry.available}
              onSelectTable={onSelectTable}
            />
          ))}
        </div>
      </li>
    </>
  );
}
