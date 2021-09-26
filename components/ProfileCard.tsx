import type { NextComponentType } from "next";

import Image from "next/image";
import profilePic from "../public/image-jeremy.png";

const ProfileCard: NextComponentType = () => {
  return (
    <div className={`h-2/4 w-64`}>
      <div className="flex flex-col bg-secondary-dark-blue h-full rounded-2xl">
        <div className="flex flex-col justify-center bg-primary-blue rounded-2xl p-8 relative z-10">
          <Image
            className="rounded-full border-2 border-white border-solid"
            src={profilePic}
            alt="Picture of the user"
            layout="fixed"
            width={100}
            height={100}
          />
          <div className="flex flex-col my-8 text-white">
            <span className=" font-light">Report for</span>
            <span className="text-4xl font-normal">Jeremy Robson</span>
          </div>
        </div>
        <div className="flex flex-col bg-secondary-dark-blue rounded-b-2xl p-6">
          <span className="text-secondary-desaturated-blue py-2">Daily</span>
          <span className="text-white py-2">Weekly</span>
          <span className="text-secondary-desaturated-blue py-2">Monthly</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
