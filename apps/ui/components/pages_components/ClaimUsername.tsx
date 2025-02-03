// Library import
import Image from "next/image";
import Link from "next/link";

// Icons
import { Globe } from "@phosphor-icons/react/dist/ssr";
import {
  WalletMetamask,
  WalletCoinbase,
  WalletPhantom,
} from "@web3icons/react";

const ClaimUsername = () => {
  // Get username from localStorage on component mount
  const savedUsername =
    typeof window !== "undefined" ? localStorage.getItem("link") : "itxbo";

  return (
    <div className="relative h-full overflow-hidden">
      <Link
        href={`/wallet-setup`}
        className="absolute right-0 md:right-14 top-28 md:top-14 font-medium"
      >
        Continue and pay later
      </Link>
      {/* Content */}
      <div
        className="space-y-14 md:w-[341px] w-full mx-auto md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 
  md:-translate-y-1/2 md:transform pt-40 md:pt-0"
      >
        {/* Header */}
        <div className="space-y-7 text-center">
          <span className="inline-block bg-black py-2 px-3 rounded-3xl text-white mx-auto ">
            billa.gg/<span className="text-gray">{savedUsername}</span>
          </span>

          {/* Progress */}
          <div className="bg-white w-full h-4 rounded-3xl">
            <div className="w-1/2 bg-[#ECAA04] h-full rounded-3xl"></div>
          </div>

          {/* Header */}
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-semibold">
              {" "}
              Welcome, {savedUsername}
            </h1>
            <p className="text-black">
              Pay <span className="font-bold">$5</span> by{" "}
              <span className="font-bold ">21 Jan 2025</span> to fully claim
              your username.
            </p>
          </div>
        </div>

        {/* Payment options */}
        <div className="space-y-10">
          <div className="space-y-2">
            <p className="font-medium">Pay with Wallet</p>

            <button
              type="button"
              className="bg-white rounded-lg flex gap-1 items-center w-full p-3 shadow-md shadow-shadow-color"
            >
              <WalletMetamask variant="branded" size="24" />
              <span>Metamask</span>
            </button>

            <button
              type="button"
              className="bg-white rounded-lg flex gap-1 items-center w-full p-3 shadow-md shadow-shadow-color 
            opacity-50 cursor-not-allowed"
              disabled
            >
              <WalletCoinbase variant="branded" size="24" />
              <span>Coming soon</span>
            </button>

            <button
              type="button"
              className="bg-white rounded-lg flex gap-1 items-center w-full p-3 shadow-md shadow-shadow-color 
            opacity-50 cursor-not-allowed"
              disabled
            >
              <WalletPhantom variant="branded" size="24" />
              <span>Coming soon</span>
            </button>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Pay Oniline</p>

            <button
              type="button"
              className="bg-white rounded-lg  w-full p-3 shadow-md shadow-shadow-color space-y-1"
            >
              <span className="flex gap-1 items-center pb-2 border-b border-b-border-primary">
                <Globe size="24" />
                <span>Pay Online</span>
              </span>

              <span className="flex gap-2 items-center justify-center">
                Secured by{" "}
                <Image
                  src={`/Images/paystack_logo.svg`}
                  width={56}
                  height={10}
                  alt="Paystack logo"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimUsername;
