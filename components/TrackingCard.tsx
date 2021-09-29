/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

import Image from "next/image";

import styles from "./TrackingCard.module.scss";

import classNames from "classnames";

import WORK from "../public/icon-work.svg";
import PLAY from "../public/icon-play.svg";
import EXERCISE from "../public/icon-exercise.svg";
import STUDY from "../public/icon-study.svg";
import SOCIAL from "../public/icon-social.svg";
import SELFCARE from "../public/icon-self-care.svg";

import { ITrackingCard } from "../lib/types";

const iconTypes: { [key: string]: string } = {
  work: WORK,
  play: PLAY,
  exercise: EXERCISE,
  study: STUDY,
  social: SOCIAL,
  "self-care": SELFCARE,
};

const TrackingCard: NextPage<ITrackingCard> = ({
  title,
  timeFrames,
  timeFrameType,
}) => {
  const titleFormatted = title.toLowerCase().split(" ").join("-");

  const backgroundColor = classNames({
    "bg-primary-lime-green": titleFormatted === "exercise",
    "bg-primary-soft-blue": titleFormatted === "play",
    "bg-primary-yellow": titleFormatted === "self-care",
    "bg-primary-violet": titleFormatted === "social",
    "bg-primary-light-red": titleFormatted === "study",
    "bg-primary-light-orange": titleFormatted === "work",
  });

  return (
    <div
      className={`${styles.TrackingCard} cursor-pointer mx-4 my-4 rounded-2xl`}
    >
      <div
        className={`flex flex-col items-end h-20 pr-4 rounded-2xl relative ${backgroundColor}`}
      >
        <Image
          src={iconTypes[titleFormatted]}
          alt="time-tracking-icon"
          preload
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUFJOsBwABYQDJy8FxnwAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="flex flex-col bg-secondary-dark-blue hover:bg-secondary-desaturated-blue rounded-2xl relative bottom-10 z-10 p-6">
        <div className="flex justify-between items-center mt-2 mb-4">
          <span className="text-white font-light md:text-xs xl:text-base">
            {title}
          </span>
          {/* We use a SVG here instead of an Image so that we can change the fill. */}
          <svg
            className={`${styles.TrackingCard__ellipsis} right-0`}
            width="21"
            height="5"
            viewBox="0 0 21 5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex flex-col mb-2 md:mb-6 xl:mb-0">
          <span className="text-white font-light text-4xl pr-4 md:text-2xl text-opacity-100 lg:text-2xl xl:text-5xl">
            {`${timeFrames[timeFrameType]?.current}hrs`}
          </span>
          <span
            className={`${styles.TrackingCard__informationText} md:text-xs xl:text-base md:h-8`}
          >
            {` Last Week - ${timeFrames[timeFrameType]?.previous}hrs`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrackingCard;
