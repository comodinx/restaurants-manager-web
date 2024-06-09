import "@app/styles/globals.css";
import "moment/locale/es";
import moment from "moment";
import Head from "next/head";
import { useState } from "react";
import type { AppProps } from "next/app";
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";

//
// configurations
//
moment.locale("es");

//
// component
//
export default function App({ Component, pageProps }: AppProps) {
  //
  // constants
  //

  // states
  const [queryClient] = useState(() => new QueryClient());

  //
  // render
  //
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}
