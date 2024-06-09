import { Btn, LayoutFooter, LayoutHeader } from "@app/components";
import Head from "next/head";

//
// component
//
export function Error404() {
  //
  // render
  //
  return (
    <>
      <Head>
        <title>Restaurantes - Reservas online</title>
      </Head>

      <LayoutHeader />

      <main className="error-404-container">
        <div className="error-404">
          <img className="error-404-img" src="/assets/media/img/img-error-404.jpg" alt="Imagen" />
          <h2 className="error-404-title">Ooops!</h2>
          <p className="error-404-description">No pudimos encontrar lo que estas buscando.</p>
          <Btn className="error-404-action" onClick={() => (window.location.href = "/")}>
            Volver al inicio
          </Btn>
        </div>
      </main>

      <LayoutFooter />
    </>
  );
}
