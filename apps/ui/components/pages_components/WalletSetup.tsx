"use client";

// Library imports
import { useEffect, useState } from "react";
import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

// Components

import { setCurrentWallet } from "@/store/walletSlice";
import AddressList from "../Helpers/AddressList";
import AddWalletModal from "../Modals/AddWalletModal";

import { truncateAddress } from "@/lib/utils";

// Icons
import { Plus } from "@phosphor-icons/react/dist/ssr";
import {
  WalletMetamask,
  WalletCoinbase,
  WalletPhantom,
} from "@web3icons/react";

const initialWallet = {
  id: "1",
  name: "Wallet 1",
  addresses: [
    {
      id: "1",
      token: {
        id: "1",
        name: "Ethereum",
        symbol: "ETH",
        icon: "eth",
      },
      address: "0x4B4cF2c...09963",
    },
    {
      id: "2",
      token: {
        id: "2",
        name: "Bitcoin",
        symbol: "BTC",
        icon: "btc",
      },
      address: "0x4B4cF2c...0996F46",
    },
  ],
};

const WalletSetup = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/welcome");
  };
  // Get username from localStorage on component mount
  const [showAddModal, setShowAddModal] = useState(false);
  const handleModal = () => {
    setShowAddModal(!showAddModal);
  };

  const savedUsername =
    typeof window !== "undefined" ? localStorage.getItem("link") : "/itxbo";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentWallet(initialWallet));
  }, [dispatch]);

  const { currentWallet } = useSelector((state: RootState) => state.wallet);

  if (!currentWallet) return null;

  return (
    <>
      <div
        className={`${
          showAddModal
            ? "h-[50vh] md:h-screen overflow-hidden"
            : "relative h-full overflow-hidden"
        }`}
      >
        {/* Content */}
        <div className="space-y-14 md:w-3/5 lg:w-1/3 w-full h-full mx-auto overflow-scroll scrollable-box md:pt-20 pb-10 ">
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
                    className="bg-background rounded-3xl py-1 px-2 text-sm font-semibold"
                  >
                    Disconnect
                  </button>
                </div>
              </div>

              {/* Addresses */}
              <div className="space-y-3">
                <h3 className="text-gray-primary text-xs">Addresses</h3>

                <AddressList addresses={currentWallet.addresses} />

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-background rounded-3xl py-1 px-2 text-sm font-semibold flex gap-2 items-center"
                    onClick={handleModal}
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
            <h3 className="font-semibold">Connect Wallet</h3>

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

          <motion.button
            type="submit"
            className="mx-auto block w-full"
            whileHover={{ scale: 1.1 }} // Scale effect on hover
            whileTap={{ scale: 0.95 }} // Slight shrink on click
            transition={{ type: "spring", stiffness: 300 }} // Smooth spring effect
            onClick={handleSubmit}
          >
            <span
              className="bg-black shadow-md shadow-[#8080801A] min-h-[60px] rounded-[40px] min-w-[175px]
                   text-white gradient-border flex items-center justify-center"
            >
              Finish
            </span>
          </motion.button>
        </div>
      </div>

      {showAddModal && <AddWalletModal handleClose={handleModal} />}
    </>
  );
};

export default WalletSetup;
