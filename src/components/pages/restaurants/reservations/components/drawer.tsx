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
          className="restaurant-reservations-drawer-toggler"
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
      <section className="restaurant-reservations-drawer" tabIndex={-1}>
        <h2 className="restaurant-reservations-drawer-title">Confirmación</h2>

        <BtnIcon onClick={onClose}>
          <IconClose />
        </BtnIcon>

        <p className="restaurant-reservations-drawer-subtitle">
          ¿Estás listo para confirmar tu reserva?
        </p>

        {!hasCustomer && (
          <Panel className="restaurant-reservations-drawer-warning">
            <p className="restaurant-reservations-drawer-warning-message">
              💡 Por favor, recorda completar los datos de contanto
            </p>
          </Panel>
        )}

        {hasCustomer && (
          <>
            <Panel className="restaurant-reservations-drawer-body">
              {!!customer.name && (
                <>
                  <PanelItem>
                    <IconUser className="text-restaurants-950" />
                    <p className="restaurant-reservations-drawer-body-text">{customer.name}</p>
                  </PanelItem>

                  <PanelDivider />
                </>
              )}

              {!!customer.email && (
                <>
                  <PanelItem>
                    <IconEmail className="text-restaurants-950" />
                    <p className="restaurant-reservations-drawer-body-text">{customer.email}</p>
                  </PanelItem>

                  {!!customer.phone && <PanelDivider />}
                </>
              )}

              {!!customer.phone && (
                <>
                  <PanelItem>
                    <IconPhone className="text-restaurants-950" />
                    <p className="restaurant-reservations-drawer-body-text">{customer.phone}</p>
                  </PanelItem>
                </>
              )}
            </Panel>
          </>
        )}

        <Panel className="restaurant-reservations-drawer-body">
          <PanelItem>
            <IconRestaurant size={5} />
            <p className="restaurant-reservations-drawer-body-text">{restaurant.description}</p>
          </PanelItem>

          <PanelDivider />

          <PanelItem>
            <IconCalendar className="mx-1" size={4} />
            <p className="restaurant-reservations-drawer-body-text">{formattedDate}</p>
          </PanelItem>

          <PanelDivider />

          <PanelItem>
            <IconGuests className="mx-1" size={4} />
            <p className="restaurant-reservations-drawer-body-text">
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
            <p className="restaurant-reservations-drawer-body-text">
              Mesa para {selectedTable.capacity} personas
            </p>
          </PanelItem>
        </Panel>

        <div className="restaurant-reservations-drawer-actions">
          <Btn variant="cancel" onClick={onClose}>
            Cancelar
          </Btn>
          <Btn isLoading={isConfirming} disabled={!isEnabled} variant="accept" onClick={onConfirm}>
            Confirmar
          </Btn>
        </div>
      </section>
    </>
  );
}
