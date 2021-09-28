import type { NextComponentType } from "next";

import { useState } from "react";

import styles from "./ProfileCard.module.scss";

import Image from "next/image";
import profilePic from "../public/image-jeremy.png";

const ProfileCard: NextComponentType = ({ handleTimeFrameTypeChange }) => {
  const [dailyActive, setDailyActive] = useState(false);
  const [weeklyActive, setWeeklyActive] = useState(true);
  const [monthlyActive, setMonthlyActive] = useState(false);

  return (
    <div
      className={`h-3/4 md:w-2/3 flex flex-col bg-secondary-dark-blue rounded-2xl mx-4 my-10`}
    >
      <div className="flex flex-row md:flex-col justify-center bg-primary-blue rounded-2xl py-8  md:p-8 relative z-10">
        <Image
          className="rounded-full border-2 border-white border-solid mr-2"
          src={profilePic}
          alt="Picture of the user"
          layout="fixed"
          width={100}
          height={100}
        />
        <div className="flex flex-col mx-4 my-4 ">
          <span className="font-light text-secondary-pale-blue">
            Report for
          </span>
          <span className="text-xl md:text-4xl font-normal text-white">
            Jeremy Robson
          </span>
        </div>
      </div>
      <div className="flex flex-row md:flex-col justify-between md:justify-center bg-secondary-dark-blue rounded-b-2xl p-8">
        <span
          className={`${
            dailyActive ? "text-white" : "text-secondary-desaturated-blue"
          } py-2 cursor-pointer`}
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
          } py-2 cursor-pointer`}
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
          } pt-2 cursor-pointer`}
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
