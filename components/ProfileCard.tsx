import type { NextPage } from "next";

import { useState } from "react";

import styles from "./ProfileCard.module.scss";

import Image from "next/image";
import profilePic from "../public/image-jeremy.png";

import { IProfileCard } from "../lib/types";

const ProfileCard: NextPage<IProfileCard> = ({ handleTimeFrameTypeChange }) => {
  const [dailyActive, setDailyActive] = useState(false);
  const [weeklyActive, setWeeklyActive] = useState(true);
  const [monthlyActive, setMonthlyActive] = useState(false);

  return (
    <div
      className={`${styles.ProfileCard} flex flex-col bg-secondary-dark-blue rounded-2xl mx-4 my-10`}
    >
      <div className="flex flex-row md:flex-col justify-center md:justify-start items-center md:items-start bg-primary-blue rounded-2xl py-4 md:py-8 px-2 md:p-8 relative z-10">
        <div>
          <Image
            className={`${styles.ProfileCard__imageBorder} rounded-full `}
            src={profilePic}
            alt="Picture of the user"
            layout="fixed"
            objectFit="cover"
            width={70}
            height={70}
            priority
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUFJOsBwABYQDJy8FxnwAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="flex flex-col mx-4 md:mx-0 my-4 ">
          <h1 className="font-light text-secondary-pale-blue">Report for</h1>
          <span className="text-xl md:text-4xl font-normal text-white">
            Jeremy Robson
          </span>
        </div>
      </div>
      <div className="flex flex-row md:flex-col justify-between md:justify-center bg-secondary-dark-blue rounded-b-2xl p-8">
        <span
          className={`${
            dailyActive ? "text-white" : "text-secondary-desaturated-blue"
          } hover:text-white transition ease-in-out duration-700 py-2 cursor-pointer`}
          onClick={() => {
            setDailyActive(true);
            setWeeklyActive(false);
            setMonthlyActive(false);
            handleTimeFrameTypeChange("daily");
          }}
        >
          Daily
        </span>
        <span
          className={`${
            weeklyActive ? "text-white" : "text-secondary-desaturated-blue"
          } hover:text-white transition ease-in-out duration-700 py-2 cursor-pointer`}
          onClick={() => {
            setDailyActive(false);
            setWeeklyActive(true);
            setMonthlyActive(false);
            handleTimeFrameTypeChange("weekly");
          }}
        >
          Weekly
        </span>
        <span
          className={`${
            monthlyActive ? "text-white" : "text-secondary-desaturated-blue"
          } hover:text-white transition ease-in-out duration-700 pt-2 cursor-pointer`}
          onClick={() => {
            setDailyActive(false);
            setWeeklyActive(false);
            setMonthlyActive(true);
            handleTimeFrameTypeChange("monthly");
          }}
        >
          Monthly
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
