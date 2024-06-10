import Head from "next/head";
import { useState } from "react";
import { LayoutHeader, LayoutFooter, StateLoading, Error404 } from "@app/components";
import { fetcher, isInteger } from "@app/helpers";
import { useRestaurantReservations } from "./hooks";
import { RestaurantReservationsContext } from "./context";
import { Timelines, Form, Drawer } from "./components";

//
// interfaces
//
export type RestaurantReservationsProperties = {
  id: string | number;
};

//
// component
//
export function RestaurantReservations(props: RestaurantReservationsProperties) {
  //
  // constants
  //
  const { id } = props;
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [isConfirming, setIsConfirming] = useState<boolean>(false);
  const [customer, setCustomer] = useState<any>({});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTable, setSelectedTable] = useState<any>(null);
  const [selectedNumGuests, setSelectedNumGuests] = useState<number>(1);
  const { data, isError, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useRestaurantReservations(id);
  const context: any = {
    id,
    restaurant: data?.restaurant,
    timelines: data?.timelines,
    isConfirming,
    setIsConfirming,
    customer,
    setCustomer,
    selectedDate,
    setSelectedDate,
    selectedTable,
    setSelectedTable,
    selectedNumGuests,
    setSelectedNumGuests,
    showDrawer,
    setShowDrawer,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };

  //
  // helpers
  //
  const handleChangeTable = (selectedTable: any, date: string | null) => {
    const previousSelectedDate = selectedDate;

    setSelectedDate(date);
    setSelectedTable((_selectedTable) => {
      const change = _selectedTable?.id !== selectedTable?.id || previousSelectedDate !== date;
      const newSelectedTable =
        _selectedTable?.id === selectedTable?.id && !change ? null : selectedTable;

      handleDrawerShow(!!newSelectedTable);
      return newSelectedTable;
    });
  };

  const handleChangeNumGuests = (value: number) => {
    if (selectedTable && selectedTable.capacity < value) {
      handleChangeTable(null, null);
    }
    setSelectedNumGuests(value);
  };

  const handleDrawerShow = (show: boolean) => {
    if (show !== showDrawer) {
      setShowDrawer(show);
    }
  };

  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  const handleConfirm = async () => {
    setIsConfirming(true);

    if (!customer.email?.trim() && !customer.phone?.trim()) {
      setIsConfirming(false);
      return alert(
        "Por favor ingresa tu Correo Electrónico o tu teléfono para la confirmación de tu reserva."
      );
    }

    const options: any = {
      body: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        restaurantId: data?.restaurant.id,
        tableId: selectedTable.id,
        reservationDate: selectedDate,
        numGuests: selectedNumGuests,
      },
    };

    try {
      const reservation = await fetcher.post("/reservations", options);

      if (reservation?.id) {
        alert("Reserva realizada con exito.");
        window.location.href = "/";
      } else {
        alert(
          "Lo sentimos, parece que el correo electrónico o el código ingresados no son correctos, inténtalo de nuevo."
        );
      }
    } catch (e) {
      alert(
        "Lo sentimos, parece que el correo electrónico o el código ingresados no son correctos, inténtalo de nuevo."
      );
    }

    setIsConfirming(false);
  };

  //
  // render
  //
  if (!isLoading && isError) {
    return <Error404 />;
  }

  return (
    <RestaurantReservationsContext.Provider value={context}>
      <Head>
        <title>{`Restaurantes - Reservas online - ${data?.restaurant?.description}`}</title>
      </Head>

      <LayoutHeader />

      <main className="restaurant-reservations-container">
        {isLoading && !isError && <StateLoading />}

        {!isLoading && !isError && (
          <>
            <Form onChangeNumGuests={handleChangeNumGuests} />
            <Timelines onSelectTable={handleChangeTable} />
            <Drawer show={showDrawer} onClose={handleDrawerClose} onConfirm={handleConfirm} />
          </>
        )}
      </main>

      <LayoutFooter />
    </RestaurantReservationsContext.Provider>
  );
}

export const getRestaurantReservationsServerSideProps = async ({ params }) => {
  if (!isInteger(params?.id)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id: Number(params.id),
    },
  };
};
