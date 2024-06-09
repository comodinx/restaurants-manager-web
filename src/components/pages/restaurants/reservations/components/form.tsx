import { useContext } from "react";
import { IconEmail, IconPhone, IconUser, InputControl, InputNumberControl, Panel } from "@app/components";
import { RestaurantReservationsContext } from "../context";

//
// interfaces
//
export type FormProperties = {
  onChangeNumGuests: (numGuests: number) => void;
};

//
// component
//
export function Form(props: FormProperties) {
  //
  // constants
  //
  const { onChangeNumGuests } = props;
  const { customer, setCustomer, selectedNumGuests } = useContext(RestaurantReservationsContext);

  //
  // helpers
  //
  const handleChangeName = (name: string) => setCustomer({ ...customer, name });

  const handleChangeEmail = (email: string) => setCustomer({ ...customer, email });

  const handleChangePhone = (phone: string) => setCustomer({ ...customer, phone });

  //
  // render
  //
  return (
    <>
      <h2 className="mt-1 mb-4 font-semibold text-xl text-restaurants-950">
        Datos de contacto
      </h2>

      <Panel className="mb-12">
        <form className="flex items-center justify-between gap-12 w-full relative">
          <InputControl icon={<IconUser />} label="Nombre" placeholder="Jonh Doe" value={customer.name || ""} onChange={(e: any) => handleChangeName(e.target.value)} />
          <InputControl icon={<IconEmail />} type="email" label="Correo electrónico" placeholder="jonhdoe@gmail.com" value={customer.email || ""} onChange={(e: any) => handleChangeEmail(e.target.value)} />
          <InputControl icon={<IconPhone />} label="Teléfono" placeholder="+541123456789" value={customer.phone || ""} onChange={(e: any) => handleChangePhone(e.target.value)} />
          <InputNumberControl label="¿Cuantas personas son?" value={selectedNumGuests} onChange={onChangeNumGuests} />
        </form>
      </Panel>
    </>
  );
}
