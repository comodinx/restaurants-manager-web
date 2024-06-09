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
      <li className="mb-14 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white bg-green-500">
          <IconCalendar />
        </span>

        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {formattedDate}
        </time>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-4 border border-restaurants-200 rounded-lg shadow-lg">
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
