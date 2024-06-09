import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Restaurantes" />
        <link rel="icon" type="image/png" href="/assets/media/img/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="text-restaurants-950 bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
