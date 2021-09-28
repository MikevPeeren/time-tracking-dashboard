import type { NextComponentType } from "next";

import TrackingCard from "./TrackingCard";

import useTimeTrackingData from "../lib/hooks/useTimeTrackingData";

const TrackingCardCollection = ({ timeFrameType }): NextComponentType => {
  const { data, isLoading, isError } = useTimeTrackingData();

  if (isLoading) return <div>LOADING</div>;
  if (isError) return <div>ERROR</div>;

  return (
    <div
      className={`grid md:grid-cols-3 grid-cols-1 ${styles.TrackingCardCollection}`}
    >
      {data.map((timeTrack, index) => {
        return (
          <TrackingCard
            key={index}
            title={timeTrack?.title}
            timeFrames={timeTrack?.timeframes}
            timeFrameType={timeFrameType}
          />
        );
      })}
    </div>
  );
};

export default TrackingCardCollection;
