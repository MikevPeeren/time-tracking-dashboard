/* eslint-disable @next/next/no-img-element */
import type { NextComponentType } from "next";

import Image from "next/image";

import classNames from "classnames";

import WORK from "../public/icon-work.svg";
import PLAY from "../public/icon-play.svg";
import EXERCISE from "../public/icon-exercise.svg";
import STUDY from "../public/icon-study.svg";
import SOCIAL from "../public/icon-social.svg";
import SELFCARE from "../public/icon-self-care.svg";

const iconTypes = {
  work: WORK,
  play: PLAY,
  exercise: EXERCISE,
  study: STUDY,
  social: SOCIAL,
  "self-care": SELFCARE,
};

const TrackingCard: NextComponentType = ({ title, timeFrames }) => {
  const titleFormatted = title.toLowerCase().split(" ").join("-");

  const backgroundColor = classNames({
    "bg-primary-lime-green": titleFormatted === "exercise",
    "bg-primary-soft-blue": titleFormatted === "play",
    "bg-primary-yellow": titleFormatted === "self-care",
    "bg-primary-violet": titleFormatted === "social",
    "bg-primary-light-red": titleFormatted === "study",
    "bg-primary-light-orange": titleFormatted === "work",
  });

  console.log(timeFrames);
  return (
    <div className="h-3/4 mx-4 rounded-2xl">
      <div
        className={`flex flex-col items-end h-20 pr-4 rounded-2xl relative ${backgroundColor}`}
      >
        <Image src={iconTypes[titleFormatted]} alt="time-tracking-icon" />
      </div>
      <div className="flex flex-col bg-secondary-dark-blue rounded-2xl relative bottom-10 z-10 p-6">
        <div className="flex justify-between mt-2 mb-4">
          <span className="text-white font-light">Work</span>
          <Image
            className="right-0"
            src="/icon-ellipsis.svg"
            width={21}
            height={5}
            alt="Ellipsis"
          />
        </div>
        <span className="text-white font-light text-6xl">32hrs</span>
        <span className="text-secondary-desaturated-blue pb-2">
          last week - 36hrs
        </span>
      </div>
    </div>
  );
};

export default TrackingCard;
