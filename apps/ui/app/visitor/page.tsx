"use client";

import Image from "next/image";
import { useState, type ReactNode, type ChangeEvent } from "react";
import { truncateAddress } from "@/lib/utils";

// Icons
import { CaretUp, CaretDown, Copy } from "@phosphor-icons/react";
import {
  TokenETH,
  TokenBTC,
  TokenUSDT,
  TokenBNB,
  TokenUSDC,
} from "@web3icons/react";

interface WalletProp {
  address: string;
  icon: ReactNode;
}

import type React from "react";

interface TokenProp {
  icon: ReactNode;
  abbr: string;
  name: string;
}

interface FormData {
  amount: number;
  token_name: string;
  token_abbr: string;
}

const VisitorPage = () => {
  const savedUsername =
    typeof window !== "undefined" ? localStorage.getItem("link") : "itxbo";

  const wallets: WalletProp[] = [
    {
      address: "0x4037D2daa35420Ee4A3b19F7c4137e1b36538f54",
      icon: <TokenBTC variant="branded" size="24" />,
    },
    {
      address: "0x4037D2daa35420Ee4A3b19F7c4137e1b36538f54",
      icon: <TokenETH variant="branded" size="24" />,
    },
    {
      address: "0x4037D2daa35420Ee4A3b19F7c4137e1b36538f54",
      icon: <TokenUSDT variant="branded" size="24" />,
    },
  ];

  const copyToClipboard = (payment_link: string): void => {
    navigator.clipboard.writeText(payment_link);
    alert("Payment link copied to clipboard");
  };

  const [formData, setFormData] = useState<FormData>({
    amount: 0,
    token_name: "",
    token_abbr: "",
  });

  // Select token functionality
  const tokens: TokenProp[] = [
    {
      name: "Bitcoin",
      icon: <TokenBTC variant="branded" size="24" />,
      abbr: "BTC",
    },
    {
      name: "Ethereum",
      icon: <TokenETH variant="branded" size="24" />,
      abbr: "ETH",
    },
    {
      name: "Tether",
      icon: <TokenUSDT variant="branded" size="24" />,
      abbr: "USDT",
    },
    {
      name: "BNB",
      icon: <TokenBNB variant="branded" size="24" />,
      abbr: "BNB",
    },
    {
      name: "USD Coin",
      icon: <TokenUSDC variant="branded" size="24" />,
      abbr: "USDC",
    },
  ];

  const [showTokenDrop, setShowTokenDrop] = useState<boolean>(false);
  const handleTokenDrop = (): void => {
    setShowTokenDrop(!showTokenDrop);
  };

  const [selectedToken, setSelectedToken] = useState<TokenProp>({
    abbr: "TKN",
    icon: "",
    name: "Token",
  });
  const handleSelectToken = (token: TokenProp): void => {
    setSelectedToken(token);
    setFormData((prev) => ({
      ...prev,
      token_name: token.name.toLowerCase(),
      token_abbr: token.abbr.toLowerCase(),
    }));
    handleTokenDrop();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const payment_link =
    "billa.gg/itxbo/pay/" +
    (formData?.token_name === "" ||
    formData?.token_abbr === "" ||
    formData?.amount === 0
      ? ""
      : `${formData?.token_name}/${formData?.token_abbr}/${formData.amount}`);

  // copy payment_link to clipboard
  const copyToClipboard2 = (): void => {
    navigator.clipboard.writeText(payment_link);
    alert("Payment link copied to clipboard");
  };

  return (
    <>
      <div
        className={`md:w-[480px] w-[92%] mx-auto md:pt-40 lg:pt-10 space-y-10  pt-36`}
      >
        {/* Header */}

        <div className="bg-white rounded-2xl p-5 space-y-5">
          <div className="flex items-center gap-2">
            <div className="w-20 md:w-16 h-16 rounded-full bg-orange"></div>
            <div>
              <h3 className="text-2xl font-semibold capitalize">
                Williams eni
              </h3>
              <p className="text-sm">
                my eyes build the plot, my hands tell the story.
              </p>
            </div>
          </div>

          {/* Profile CTAs */}

          <div className="drag-shadow p-1">
            <button
              type="button"
              className="bg-white rounded-3xl py-2 px-5 drag-shadow flex justify-between items-center w-full"
            >
              <p>
                billa.gg/<span className="text-gray">{savedUsername}</span>
              </p>

              <div className="flex gap-1 items-center">
                <p className="text-xs text-[#C4C4C4]">Tap to share</p>
                <Image
                  src={`/Images/material-symbols_share.svg`}
                  width={20}
                  height={20}
                  alt="Share icon"
                />
                <Image
                  src={`/Images/mage_qr-code-fill.svg`}
                  width={20}
                  height={20}
                  alt="QR icon"
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`bg-white rounded-2xl p-5 space-y-5 md:col-span-2 lg:col-span-1 `}
        >
          <h2 className="text-3xl font-semibold">Pay Me</h2>

          <div className="space-y-5">
            {/* Payment setup */}
            <div className="bg-[#FAFAFA] min-h-[44px] rounded-3xl p-1 flex flex-row items-center gap-3">
              <div className="lg:w-1/5 w-1/4 gap-1">
                {/* Token select */}
                <div
                  className=" h-9 bg-white flex gap-1 justify-center items-center rounded-3xl
               text-gray text-sm relative font-medium cursor-pointer"
                  onClick={handleTokenDrop}
                >
                  <span className="block">
                    {selectedToken?.icon || selectedToken?.abbr}
                  </span>
                  {showTokenDrop ? (
                    <CaretUp size={10} />
                  ) : (
                    <CaretDown size={10} />
                  )}

                  {showTokenDrop && (
                    <div className="absolute top-10 left-0 space-y-1 bg-white p-3 rounded-2xl shadow-lg shadow-shadow-color">
                      {tokens?.map((token, index) => (
                        <div
                          key={index}
                          className="flex gap-1 items-center p-1 rounded-lg hover:bg-background"
                          onClick={() => handleSelectToken(token)}
                        >
                          {token.icon}
                          <p className="text-sm">{token.abbr}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="w-[10px] flex items-start justify-center">
                <div className="w-[1px] h-[36px] bg-[#F1F1F1]"></div>
              </div>

              {/* Input Amount */}
              <div className="bg-white w-full py-2 px-3 text-center rounded-3xl flex items-center justify-center">
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className=" bg-transparent placeholder:text-input-gray font-medium outline-none w-full"
                  placeholder="Custom"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Payment link */}
            <div className="min-h-[52px] flex gap-2 items-center">
              {/* Link */}
              <div className="w-full bg-background p-2 rounded-lg flex justify-between items-center min-h-[52px]">
                <p>{payment_link}</p>
                {/* Link actions */}
                <div className="flex gap-2 items-center text-input-gray">
                  <button
                    type="button"
                    className="bg-white flex items-center justify-center w-9 h-9 rounded-full"
                    onClick={copyToClipboard2}
                  >
                    <Copy size={20} />
                  </button>
                  <button
                    type="button"
                    className="bg-white flex items-center justify-center w-9 h-9 rounded-full"
                  >
                    <Image
                      src={`/Images/mage_qr-code-fill1.svg`}
                      width={20}
                      height={20}
                      alt="QR"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wallets */}
        <div className={`bg-white rounded-2xl p-6 space-y-5 `}>
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">My Wallets</h2>
          </div>

          {/* Wallets */}
          <div className="space-y-3">
            {wallets?.map((wallet, index) => (
              <div
                key={index}
                className="bg-background min-h-[52px] p-3 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  {wallet.icon}
                  <p className="text-sm">
                    {truncateAddress(wallet.address, 6)}
                  </p>
                </div>

                <div className="flex gap-2 items-center text-input-gray">
                  <button
                    type="button"
                    className="bg-white flex items-center justify-center w-9 h-9 rounded-full"
                    onClick={() => copyToClipboard(wallet?.address)}
                  >
                    <Copy size={20} />
                  </button>
                  <button
                    type="button"
                    className="bg-white flex items-center justify-center w-9 h-9 rounded-full"
                  >
                    <Image
                      src={`/Images/mage_qr-code-fill1.svg`}
                      width={20}
                      height={20}
                      alt="QR"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VisitorPage;
