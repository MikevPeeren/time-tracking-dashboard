import type { NextPage } from "next";
import Head from "next/head";

import ProfileCard from "../components/ProfileCard";
import TrackingCardCollection from "../components/TrackingCardCollection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Time Tracking Dashboard</title>
        <meta name="description" content="Time Tracking Dashboard" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <div className="h-screen flex flex-row justify-center items-center">
          <ProfileCard />
          <TrackingCardCollection />
        </div>
      </main>
    </div>
  );
};

export default Home;
