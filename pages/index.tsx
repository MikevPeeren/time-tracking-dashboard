import type { NextPage } from "next";
import Head from "next/head";

import { useState } from "react";

import ProfileCard from "../components/ProfileCard";
import TrackingCardCollection from "../components/TrackingCardCollection";

const Home: NextPage = () => {
  const [timeFrameType, setTimeFrameType] = useState("weekly");

  const handleTimeFrameTypeChange = (timeFrameType: string): void => {
    return setTimeFrameType(timeFrameType);
  };

  return (
    <div>
      <Head>
        <title>Time Tracking Dashboard</title>
        <meta name="description" content="Time Tracking Dashboard" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <div className="flex flex-col md:flex-row md:items-center justify-between md:justify-center h-full md:h-screen my-10 md:my-0">
          <ProfileCard handleTimeFrameTypeChange={handleTimeFrameTypeChange} />
          <TrackingCardCollection timeFrameType={timeFrameType} />
        </div>
      </main>
    </div>
  );
};

export default Home;
