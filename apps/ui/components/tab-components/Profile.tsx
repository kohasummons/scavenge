import React from "react";
import Image from "next/image";

// Icons
import { ShareNetwork } from "@phosphor-icons/react/dist/ssr";

const ProfileTab = () => {
  const savedUsername =
    typeof window !== "undefined" ? localStorage.getItem("link") : "itxbo";

  return (
    <div className="w-[480px] mx-auto pt-10 space-y-10">
      {/* User details */}
      <div className="bg-white rounded-2xl p-5 space-y-5">
        {/* Header */}
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-orange"></div>
          <div>
            <h3 className="text-2xl font-medium capitalize">Williams eni</h3>
            <p className="text-sm">
              my eyes build the plot, my hands tell the story.
            </p>
          </div>
        </div>

        {/* Profile CTAs */}
        <div className="bg-white rounded-3xl py-2 px-5 shadow-md shadow-shadow-color flex justify-between items-center">
          <p>
            billa.gg/<span className="text-gray">{savedUsername}</span>
          </p>

          <div className="flex gap-1 items-center">
            <p className="text-xs text-[#C4C4C4]">Tap to share</p>
            <ShareNetwork size={15} className="font-medium" />
            <Image
              src={`/Images/mage_qr-code-fill.svg`}
              width={15}
              height={15}
              alt="QR icon"
            />
          </div>
        </div>
      </div>

      {/* Profile details */}
    </div>
  );
};

export default ProfileTab;
