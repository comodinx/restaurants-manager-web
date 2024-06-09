import { useContext } from "react";
import { Indicator } from "@app/components";
import { RestaurantReservationsContext } from "../context";

//
// constants
//
const sizeBasedOnCapacity: any = {
  2: "w-12 h-12",
  4: "w-12 h-12",
  6: "w-12 h-16",
  8: "w-16 h-16",
  12: "w-20 h-16",
};

//
// interfaces
//
export type TableProperties = {
  date: string;
  table: any;
  available: boolean;
  onSelectTable: (selectedTable: any, date: string) => void;
};

//
// component
//
export function Table(props: TableProperties) {
  //
  // constants
  //
  const { date, table, available, onSelectTable } = props;
  const { selectedTable, selectedDate } = useContext(RestaurantReservationsContext);
  const isSelected = selectedTable?.id === table.id && selectedDate === date;
  const status = available ? isSelected ? "Selecciona" : "Disponible" : "Reservada";
  const variant = available ? isSelected ? "violet" : "green" : "red";

  //
  // helpers
  //
  const handleSelectTable = () => {
    if (available) {
      onSelectTable(table, date);
    }
  };

  //
  // render
  //
  return (
    <>
      {/*
        This comment is used for force tailwind smart build
          border-red-200
          bg-restaurant-200
      */}
      <div className={`flex items-center justify-start p-4 mt-4 border border-${available ? "restaurants" : "red"}-200 rounded-lg hover:shadow-lg ${isSelected ? "shadow-lg bg-restaurants-50" : ""}`} onClick={handleSelectTable}>
        <div className="flex flex-col md:flex-row gap-2 items-center space-x-3 rtl:space-x-reverse">
          <div className="flex-shrink-0">
            <img
              className={sizeBasedOnCapacity[table.capacity]}
              src={`/assets/media/img/img-table-${table.capacity}-guests.png`}
              alt={table.observations} />
          </div>
          
          <div className="flex-1 flex flex-col gap-2 items-start justify-center">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-restaurants-900 truncate">
                {table.capacity} pers.
              </p>
            </div>

            <Indicator text={status} variant={variant} />
          </div>
        </div>
      </div>
    </>
  );
}
