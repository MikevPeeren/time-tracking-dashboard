import type { NextPage } from "next";
import Head from "next/head";

import ProfileCard from "../src/components/ProfileCard";
import TrackingCard from "../src/components/TrackingCard";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Time Tracking Dashboard</title>
        <meta name="description" content="Time Tracking Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProfileCard />
        <TrackingCard />
      </main>
    </div>
  );
};

export default Home;
