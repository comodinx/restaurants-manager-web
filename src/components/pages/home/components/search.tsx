import { useState, useEffect, useRef } from "react";
import { resolveQueryParam } from "@app/helpers";
import { IconSearch } from "@app/components";

//
// interfaces
//
export type SearchProperties = {
  onSearch: (searchTerm: string) => void;
};

//
// component
//
export function Search(props: SearchProperties) {
  //
  // constants
  //
  const { onSearch } = props;

  // states
  const inputSearch = useRef(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  //
  // effects
  //
  useEffect(() => {
    setSearchTerm(resolveQueryParam("q"));
  }, []);

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm]);

  //
  // events
  //
  const handleSearchClick = () => onSearch((inputSearch.current as any).value);

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  //
  // render
  //
  return (
    <>
      <section className="search-container">
        <div className="search-control">
          <input
            ref={inputSearch}
            type="text"
            className="search-input"
            placeholder="¿Qué restaurante están buscando?"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="button" className="search-btn" onClick={handleSearchClick}>
            <IconSearch />
          </button>
        </div>
      </section>
    </>
  );
}
