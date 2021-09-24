import type { NextPage } from "next";
import Head from "next/head";

import ProfileCard from "../components/ProfileCard";
import TrackingCard from "../components/TrackingCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Time Tracking Dashboard</title>
        <meta name="description" content="Time Tracking Dashboard" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <ProfileCard />
        <TrackingCard />
      </main>
    </div>
  );
};

export default Home;
