// Library import

import { truncateAddress } from "@/lib/utils";

// Icons
import { Plus, CaretDown } from "@phosphor-icons/react/dist/ssr";
import {
  WalletMetamask,
  TokenBTC,
  TokenETH,
  TokenTON,
  WalletCoinbase,
  WalletPhantom,
} from "@web3icons/react";

const WalletSetup = () => {
  // Get username from localStorage on component mount
  const savedUsername =
    typeof window !== "undefined" ? localStorage.getItem("link") : "/itxbo";

  return (
    <div className="relative h-full overflow-hidden">
      {/* Content */}
      <div
        className="space-y-14 md:w-[341px] w-full mx-auto md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 
md:-translate-y-1/2 md:transform "
      >
        {/* Header */}
        <div className="space-y-7 text-center">
          <span className="inline-block bg-black py-2 px-3 rounded-3xl text-white mx-auto ">
            billa.gg/<span className="text-gray">{savedUsername}</span>
          </span>

          {/* Progress */}
          <div className="bg-white w-full h-4 rounded-3xl">
            <div className="w-3/4 bg-[#ECAA04] h-full rounded-3xl"></div>
          </div>

          {/* Header */}
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-semibold">Set up a Few Things</h1>
            <p>Get started with a few social accounts and wallets</p>
          </div>
        </div>

        {/* Wallets */}
        <div className="space-y-5">
          <h2>Wallets</h2>

          <div className="bg-white rounded-2xl p-5 space-y-3">
            {/* Main wallet */}
            <div className="space-y-3">
              <h3 className="text-gray-primary text-xs">Main Wallet</h3>

              <div className="border border-border-primary p-3 rounded-lg space-y-2">
                <span className="flex gap-2 items-center">
                  <WalletMetamask variant="branded" size="24" />
                  <span>Metamask</span>
                </span>

                <span className="block text-gray-primary text-xs">
                  {truncateAddress(
                    "0xc1b731BAc627073558BDE08C4622f1341843b977",
                    8
                  )}
                </span>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-background rounded-3xl py-1 px-2 text-sm font-medium"
                >
                  Disconnect
                </button>
              </div>
            </div>

            {/* Addresses */}
            <div className="space-y-3">
              <h3 className="text-gray-primary text-xs">Addresses</h3>

              <div className="space-y-2">
                <div className="rounded-lg bg-background flex gap-3 items-center p-2">
                  <span className="bg-white p-1 rounded-3xl flex gap-1 items-center">
                    <TokenBTC variant="branded" size="16" />
                    <CaretDown size={12} className="text-gray" />
                  </span>
                  <span>
                    {" "}
                    {truncateAddress(
                      "0xc1b731BAc627073558BDE08C4622f1341843b977",
                      8
                    )}
                  </span>
                </div>

                <div className="rounded-lg bg-background flex gap-3 items-center p-2">
                  <span className="bg-white p-1 rounded-3xl flex gap-1 items-center">
                    <TokenETH variant="branded" size="16" />
                    <CaretDown size={12} className="text-gray" />
                  </span>
                  <span>
                    {truncateAddress(
                      "0xc1b731BAc627073558BDE08C4622f1341843b977",
                      8
                    )}
                  </span>
                </div>

                <div className="rounded-lg bg-background flex gap-3 items-center p-2">
                  <span className="bg-white p-1 rounded-3xl flex gap-1 items-center">
                    <TokenTON variant="branded" size="16" />
                    <CaretDown size={12} className="text-gray" />
                  </span>
                  <span>
                    {truncateAddress(
                      "0xc1b731BAc627073558BDE08C4622f1341843b977",
                      8
                    )}
                  </span>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-background rounded-3xl py-1 px-2 text-sm font-medium flex gap-2 items-center"
                >
                  <Plus size={15} />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Connect Wallet */}
        <div className="bg-white rounded-2xl p-5 space-y-2">
          <h3 className="font-medium">Connect Wallet</h3>

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
      </div>
    </div>
  );
};

export default WalletSetup;
