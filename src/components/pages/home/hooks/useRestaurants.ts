import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@app/helpers";

//
// constants
//
const regexpSpace = /\s+/g

//
// hooks
//
export const useRestaurants = (options: any = {}) => {
  const { searchTerm = null } = options;
  const opts: any = {
    params: {
      page: 1,
      pageSize: 3,
    },
  };

  resolveFilters(opts, searchTerm);

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["restaurants", JSON.stringify({ searchTerm })],
    queryFn: () => fetcher.get("/restaurants", opts),
  });

  return {
    isLoading,
    isError,
    error,
    restaurants: data,
  };
};

//
// helpers
//
const resolveFilters = (options: any, searchTerm: string | null = null) => {
  const filtersBuilder: string[] = [];
  
  if (searchTerm) {
    filtersBuilder.push(`description li %${searchTerm.replace(regexpSpace, "%")}%`);
  }

  if (filtersBuilder.length) {
    options.params.filters = filtersBuilder.join(",");
  }
};
