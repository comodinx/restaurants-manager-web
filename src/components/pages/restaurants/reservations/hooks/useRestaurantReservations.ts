import moment from "moment";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetcher } from "@app/helpers";
import constants from "@app/constants";

//
// hooks
//
export const useRestaurantReservations = (id?: string | number) => {
  const fetchReservations = async ({
    pageParam = moment().format(constants.dates.formatReservationDate),
  }) => {
    const startDate = pageParam;
    const opts = {
      params: {
        includeNotAvailables: "true",
        includeRestaurant: "true",
        startDate,
        endDate: moment(startDate).add(7, "days").format(constants.dates.formatReservationDate),
      },
    };
    return fetcher.get(`/restaurants/${id}/availability`, opts);
  };

  const { data, error, isError, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["restaurant-availability", id],
      queryFn: fetchReservations,
      enabled: !!id,
      initialPageParam: moment().format(constants.dates.formatReservationDate),
      getNextPageParam: (lastPage) => {
        const lastLoadPageTimelines = lastPage?.timelines;

        if (!lastLoadPageTimelines) {
          return null;
        }

        const lastTimelineDates = Object.keys(lastLoadPageTimelines);
        return moment(
          lastTimelineDates[lastTimelineDates.length - 1],
          constants.dates.formatReservationDate
        )
          .add(1, "days")
          .format(constants.dates.formatReservationDate);
      },
    });

  const allData: any = {
    restaurant: data?.pages[0]?.restaurant || {},
    timelines: data?.pages.reduce((acc: any, page: any) => ({ ...acc, ...page?.timelines }), {}),
  };

  return {
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
    data: allData,
  };
};
