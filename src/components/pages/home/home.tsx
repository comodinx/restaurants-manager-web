import Head from "next/head";
import { useState } from "react";
import { LayoutHeader, LayoutFooter } from "@app/components";
import { Restaurants } from "./components/restaurants";
import { Search } from "./components/search";

//
// component
//
export function Home() {
  //
  // constants
  //
  const [searchTerm, setSearchTerm] = useState<string>("");

  //
  // events
  //
  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  //
  // render
  //
  return (
    <>
      <Head>
        <title>Restaurantes - Reservas online</title>
      </Head>

      <LayoutHeader />

      <main className="home">
        <Search onSearch={handleSearch} />
        <Restaurants searchTerm={searchTerm} />
      </main>

      <LayoutFooter />
    </>
  );
}
