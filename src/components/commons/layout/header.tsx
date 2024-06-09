import Link from "next/link";
import { IconConfort } from "@app/components";

//
// component
//
export function LayoutHeader() {
  return (
    <>
      <header>
        <Link href="/" className="header-logo-container">
          <img className="header-logo" src="/assets/media/img/logo.png" alt="Restaurantes" />
          <span className="header-title">Restaurantes</span>
        </Link>

        <div className="header-actions">
          <div className="header-action">
            <IconConfort />
            <span className="header-action-title">Reservas online para tu comodidad</span>
          </div>
        </div>
      </header>
    </>
  );
}
