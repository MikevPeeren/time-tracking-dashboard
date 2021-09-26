import type { NextComponentType } from "next";

import Image from "next/image";

import classNames from "classnames";

const TrackingCard: NextComponentType = ({ key, title, timeFrames }) => {
  const titleFormatted = title.toLowerCase().split(" ").join("-");
  const svgUrl = "/icon-" + titleFormatted + ".svg";

  const backgroundColor = classNames({
    "bg-primary-lime-green": titleFormatted === "exercise",
    "bg-primary-soft-blue": titleFormatted === "play",
    "bg-primary-yellow": titleFormatted === "self-care",
    "bg-primary-violet": titleFormatted === "social",
    "bg-primary-light-red": titleFormatted === "study",
    "bg-primary-light-orange": titleFormatted === "work",
  });

  return (
    <div key={key} className="h-3/4 mx-4 rounded-2xl">
      <div
        className={`flex flex-col items-end h-20 pr-4 rounded-2xl ${backgroundColor}`}
      >
        <svg width="79" height="79" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m18.687 10.43 15.464 30.906c.31.682.743 1.322 1.3 1.88.558.557 1.198.99 1.714 1.217L68.237 59.98 52.484 75.732a8.025 8.025 0 0 1-11.355 0L2.934 37.538a8.025 8.025 0 0 1 0-11.356L18.687 10.43Zm19.345-7.99 10.839 10.838 2.065-2.064a5.845 5.845 0 0 1 8.258 0l8.258 8.259a5.845 5.845 0 0 1 0 8.258l-2.064 2.064 10.839 10.84a8.025 8.025 0 0 1 0 11.355l-4.728 4.728L39.126 40.53a1.963 1.963 0 0 1-.578-.413 1.963 1.963 0 0 1-.413-.578L21.95 7.168l4.728-4.728a8.025 8.025 0 0 1 11.355 0Zm17.033 12.903-2.064 2.065 8.258 8.258 2.064-2.064-8.258-8.259Z"
            fill="#D96C47"
            fillRule="nonzero"
          />
        </svg>
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
