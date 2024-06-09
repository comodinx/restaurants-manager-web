import moment from "moment";
import { useContext } from "react";
import {
  Btn,
  BtnIcon,
  IconCalendar,
  IconClose,
  IconEmail,
  IconGuests,
  IconPhone,
  IconRestaurant,
  IconTable,
  IconUser,
  Panel,
  PanelDivider,
  PanelItem,
} from "@app/components";
import constants from "@app/constants";
import { RestaurantReservationsContext } from "../context";

//
// constants
//
const sizeBasedOnCapacity: any = {
  2: "w-6 h-6",
  4: "w-6 h-6",
  6: "w-6 h-8",
  8: "w-8 h-8",
  12: "w-10 h-8",
};

//
// interfaces
//
export type DrawerProperties = {
  table?: any;
  show?: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

//
// component
//
export function Drawer(props: DrawerProperties) {
  //
  // constants
  //
  const { show = false, onClose, onConfirm } = props;
  const {
    restaurant,
    customer,
    selectedDate = null,
    selectedTable = null,
    selectedNumGuests = 1,
    setShowDrawer,
    isConfirming,
  } = useContext(RestaurantReservationsContext);
  const formattedDate = selectedDate
    ? moment(selectedDate, constants.dates.formatReservationDate).format(
        constants.dates.formatReservationDateForHummands
      )
    : "";
  const hasCustomer = !!customer.email || !!customer.phone;
  const isEnabled = !isConfirming && hasCustomer;

  //
  // render
  //
  if (!show) {
    if (!selectedTable) {
      return <></>;
    }

    return (
      <>
        <div
          onClick={() => setShowDrawer(true)}
          className="fixed top-28 right-0 z-40 p-4 pe-8 overflow-y-auto transition-transform translate-x-6 shadow-md shadow-restaurants-300 flex items-center justify-center text-restaurants-950 bg-green-500 rounded-full w-auto h-14 hover:bg-green-600 focus:outline-none"
          tabIndex={-1}
        >
          confirmar
        </div>
      </>
    );
  }

  return (
    <>
      {/*
        This comment is used for force tailwind smart build
          translate-none
          translate-x-full
      */}
      <div
        className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-white w-80 border-s-1 border-restaurants-200 shadow-md shadow-restaurants-300 transition-transform translate-none"
        tabIndex={-1}
      >
        <h2 className="mt-1 mb-4 font-semibold text-xl text-restaurants-950">Confirmación</h2>

        <BtnIcon onClick={onClose}>
          <IconClose />
        </BtnIcon>

        <p className="mt-8 text-sm text-restaurants-950">¿Estás listo para confirmar tu reserva?</p>

        {!hasCustomer && (
          <Panel className="border-yellow-200 bg-yellow-50 mt-8">
            <p className="text-sm text-restaurants-950">
              💡 Por favor, recorda completar los datos de contanto
            </p>
          </Panel>
        )}

        {hasCustomer && (
          <>
            <Panel className="mt-8">
              {!!customer.name && (
                <>
                  <PanelItem>
                    <IconUser className="text-restaurants-950" />
                    <p className="mb-0 text-sm text-restaurants-950">{customer.name}</p>
                  </PanelItem>

                  <PanelDivider />
                </>
              )}

              {!!customer.email && (
                <>
                  <PanelItem>
                    <IconEmail className="text-restaurants-950" />
                    <p className="mb-0 text-sm text-restaurants-950">{customer.email}</p>
                  </PanelItem>

                  {!!customer.phone && <PanelDivider />}
                </>
              )}

              {!!customer.phone && (
                <>
                  <PanelItem>
                    <IconPhone className="text-restaurants-950" />
                    <p className="mb-0 text-sm text-restaurants-950">{customer.phone}</p>
                  </PanelItem>
                </>
              )}
            </Panel>
          </>
        )}

        <Panel className="mt-8">
          <PanelItem>
            <IconRestaurant size={5} />
            <p className="mb-0 text-sm text-restaurants-950">{restaurant.description}</p>
          </PanelItem>

          <PanelDivider />

          <PanelItem>
            <IconCalendar className="mx-1" size={4} />
            <p className="mb-0 text-sm text-restaurants-950">{formattedDate}</p>
          </PanelItem>

          <PanelDivider />

          <PanelItem>
            <IconGuests className="mx-1" size={4} />
            <p className="mb-0 text-sm text-restaurants-950">
              Cantidad de comensales {selectedNumGuests}
            </p>
          </PanelItem>

          <PanelDivider />

          <PanelItem>
            <IconTable
              capacity={selectedTable.capacity}
              size={sizeBasedOnCapacity[selectedTable.capacity]}
              alt={selectedTable.observations}
            />
            <p className="mb-0 text-sm text-restaurants-950">
              Mesa para {selectedTable.capacity} personas
            </p>
          </PanelItem>
        </Panel>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <Btn variant="cancel" onClick={onClose}>
            Cancelar
          </Btn>
          <Btn isLoading={isConfirming} disabled={!isEnabled} variant="accept" onClick={onConfirm}>
            Confirmar
          </Btn>
        </div>
      </div>
    </>
  );
}
