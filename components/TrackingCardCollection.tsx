import type { NextComponentType } from "next";

import TrackingCard from "./TrackingCard";

import useTimeTrackingData from "../lib/hooks/useTimeTrackingData";

const TrackingCardCollection = (): NextComponentType => {
  const { data, isLoading, isError } = useTimeTrackingData();

  if (isLoading) return <div>LOADING</div>;
  if (isError) return <div>ERROR</div>;

  return (
    <div className="grid grid-cols-3 h-2/4 w-3/5">
      {data.map((timeTrack) => {
        return (
          <TrackingCard
            key={timeTrack?.title}
            title={timeTrack?.title}
            timeFrames={timeTrack?.timeframes}
          />
        );
      })}
    </div>
  );
};

export default TrackingCardCollection;
