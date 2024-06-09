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
  const status = available ? (isSelected ? "Selecciona" : "Disponible") : "Reservada";
  const variant = available ? (isSelected ? "violet" : "green") : "red";

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
      <div
        className={`restaurant-reservations-timeline-table-container border-${
          available ? "restaurants" : "red"
        }-200 ${isSelected ? "shadow-lg bg-restaurants-50" : ""}`}
        onClick={handleSelectTable}
      >
        <div className="restaurant-reservations-timeline-table">
          <div className="restaurant-reservations-timeline-table-icon">
            <img
              className={sizeBasedOnCapacity[table.capacity]}
              src={`/assets/media/img/img-table-${table.capacity}-guests.png`}
              alt={table.observations}
            />
          </div>

          <div className="restaurant-reservations-timeline-table-body">
            <div className="restaurant-reservations-timeline-table-text-container">
              <p className="restaurant-reservations-timeline-table-text">
                {table.capacity} personas
              </p>
            </div>

            <Indicator text={status} variant={variant} />
          </div>
        </div>
      </div>
    </>
  );
}
