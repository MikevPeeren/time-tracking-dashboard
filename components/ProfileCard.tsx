import type { NextComponentType } from "next";

const ProfileCard: NextComponentType = () => {
  return (
    <div>
      <div>Report for Jeremy Robson</div>
      <div>
        <span>daily</span>
        <span>weekly</span>
        <span>monthly</span>
      </div>
    </div>
  );
};

export default ProfileCard;
