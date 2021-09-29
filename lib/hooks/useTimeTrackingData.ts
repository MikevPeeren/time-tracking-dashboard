import useSWR from "swr";

import { fetcher } from "../swrFetcher";

export default function useTimeTrackingData(): {
  data: [
    {
      title: string;
      timeFrames: {
        [k: string]: { current: number; previous: number };
      };
      index: number;
    }
  ];
  isLoading: boolean;
  isError: boolean;
} {
  const { data, error } = useSWR(`/api/timeTrackingData`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
