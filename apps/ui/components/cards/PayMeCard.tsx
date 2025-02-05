"use client";

import type React from "react";
import Image from "next/image";
import { useState, type ReactNode, type ChangeEvent } from "react";

// Icons
import { CaretUp, CaretDown, Copy } from "@phosphor-icons/react/dist/ssr";
import {
  TokenETH,
  TokenBTC,
  TokenUSDT,
  TokenBNB,
  TokenUSDC,
} from "@web3icons/react";

interface PayMeCardProps {
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDragLeave?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  className?: string;
  isReordering?: boolean;
  // handleModal: () => void;
}

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

export default function PayMeCard({
  draggable,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  // handleModal,
  className,
  isReordering,
}: PayMeCardProps) {
  const [formData, setFormData] = useState<FormData>({
    amount: 0,
    token_name: "",
    token_abbr: "",
  });

  // Select token functionality
  const tokens: {
    name: string;
    icon: ReactNode;
    abbr: string;
  }[] = [
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

  // Select Amount functionality
  const availableAmounts: {
    id: number;
    amount: number;
  }[] = [
    { id: 0, amount: 5 },
    { id: 1, amount: 10 },
    { id: 2, amount: 15 },
  ];

  const [activeAmount, setActiveAmount] = useState<number>(0);
  const handleSelectAmount = (amount: number, id: number): void => {
    setActiveAmount(amount);
    setActiveAmount(id);
    setFormData((prev) => ({ ...prev, amount: amount }));
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
  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(payment_link);
    alert("Payment link copied to clipboard");
  };

  return (
    <>
      <div
        draggable={draggable}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`bg-white rounded-2xl p-5 space-y-5 ${
          isReordering ? "border border-[#F5841F] drag-shadow" : ""
        } ${className} `}
      >
        <h2 className="text-3xl font-semibold">Pay Me</h2>

        <div className="space-y-5">
          {/* Payment setup */}
          <div className="bg-[#FAFAFA] min-h-[44px] rounded-3xl p-1 flex flex-col md:flex-row items-center gap-3">
            <div className="lg:w-3/5 w-full grid grid-cols-4 gap-1">
              {/* Token select */}
              <div
                className="col-span-1 h-9 bg-white flex gap-1 justify-center items-center rounded-3xl
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

              {/* Amount select */}
              {availableAmounts?.map((amount, index) => (
                <button
                  key={index}
                  className={`rounded-3xl col-span-1 h-9 font-medium transition-all duration-500 ${
                    activeAmount === amount.id
                      ? "bg-[#000] gradient-border text-white"
                      : "bg-white text-input-gray"
                  }`}
                  onClick={() => {
                    handleSelectAmount(amount.amount, amount.id);
                  }}
                >
                  ${amount.amount}
                </button>
              ))}
            </div>

            {/* <div className="flex gap-1">
           
          </div> */}

            {/* Input Amount */}
            <div className="bg-background lg:w-2/5 w-full py-2 text-center rounded-3xl flex items-center justify-center">
              <input
                type="number"
                id="amount"
                name="amount"
                className=" bg-transparent placeholder:text-input-gray font-medium text-center outline-none"
                placeholder="Custom"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Payment link */}
          <div className="min-h-[52px] flex gap-2 items-center">
            {/* Link */}
            <div className="w-[90%] bg-background p-2 rounded-lg flex justify-between items-center min-h-[52px]">
              <p>{payment_link}</p>
              {/* Link actions */}
              <div className="flex gap-2 items-center text-input-gray">
                <button
                  type="button"
                  className="bg-white flex items-center justify-center w-9 h-9 rounded-full"
                  onClick={copyToClipboard}
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

            <Image
              src={`/Images/material-symbols_share.svg`}
              width={24}
              height={24}
              alt="Share icon"
              className="cursor-pointer"
              // onClick={handleModal}
            />
          </div>
        </div>
      </div>
    </>
  );
}
