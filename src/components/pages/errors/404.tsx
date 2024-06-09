import Link from "next/link";

//
// component
//
export function Error404() {
  return (
    <>
      <div className="d-flex flex-column flex-center">
        <div className="card-body py-15 py-lg-20 text-center">
          <h1 className="fw-bolder fs-2qx text-gray-900 mb-4">Ooops!</h1>
          <div className="fw-semibold fs-6 text-gray-500 mb-7">
            La página que estas buscando no existe
          </div>
          <div className="mb-11">
            <img
              src="/assets/media/auth/404-error.png"
              className="mw-100 mh-300px theme-light-show"
              alt="error"
            />
            <img
              src="/assets/media/auth/404-error-dark.png"
              className="mw-100 mh-300px theme-dark-show"
              alt="error"
            />
          </div>
          <div className="mb-0">
            <Link href="/" className="btn btn-sm btn-primary">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
