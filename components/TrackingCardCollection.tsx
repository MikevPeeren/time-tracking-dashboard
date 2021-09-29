import type { NextPage } from "next";

import TrackingCard from "./TrackingCard";

import { ITrackingCardCollection } from "../lib/types";

import { timeTrackingJSONData } from "../lib/timeTrackingJSONData";

const TrackingCardCollection: NextPage<ITrackingCardCollection> = ({
  timeFrameData,
  timeFrameType,
}) => {
  return (
    <div className={`grid md:grid-cols-3 grid-cols-1`}>
      {timeFrameData &&
        timeFrameData.map((timeTrack, index) => {
          return (
            <TrackingCard
              key={index}
              title={timeTrack?.title}
              timeFrames={timeTrack?.timeFrames}
              timeFrameType={timeFrameType}
            />
          );
        })}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticProps = () => {
  return {
    props: {
      data: timeTrackingJSONData,
      isLoading: false,
      isError: false,
      timeFrameType: "weekly",
    },
  };
};

export default TrackingCardCollection;
