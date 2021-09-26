import useSWR from "swr";

import { fetcher } from "../swrFetcher";

export default function useTimeTrackingData(): unknown {
  const { data, error } = useSWR(`/api/timeTrackingData`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
