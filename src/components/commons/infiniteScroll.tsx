import { useEffect, useRef } from "react";

//
// interfaces
//
export type InfiniteScrollProperties = {
  text?: string;
  className?: string;
  classNameText?: string;
  fetchNextPage: any;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  delay?: number;
};

//
// component
//
export function InfiniteScroll(props: InfiniteScrollProperties) {
  //
  // constants
  //
  const {
    text = "cargando...",
    className = "",
    classNameText = "",
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    delay = 1000,
  } = props;
  const loader = useRef(null);

  //
  // effects
  //
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let timeoutId;

        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          timeoutId = setTimeout(() => fetchNextPage(), delay);
        }

        // Limpiamos el timeout en caso de cambiar de pantalla, esto evitar errores de renderin con eventos asincronicos
        return () => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        };
      },
      {
        threshold: 1.0,
      }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  //
  // render
  //
  return (
    <>
      <div ref={loader} className={className}>
        <div className={classNameText}>{text}</div>
      </div>
    </>
  );
}
