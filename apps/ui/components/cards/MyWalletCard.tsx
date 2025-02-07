import type React from "react";
import Image from "next/image";
import { type ReactNode } from "react";
import { truncateAddress } from "@/lib/utils";

// Icons
import { PencilSimple, Copy } from "@phosphor-icons/react";
import { TokenETH, TokenBTC, TokenUSDT } from "@web3icons/react";

interface MyWalletCardProps {
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDragLeave?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  className?: string;
  isReordering?: boolean;
}

// icon will be an image_link and then the icon prop will be changed to string
interface WalletProp {
  address: string;
  icon: ReactNode;
}

export default function MyWalletCard({
  draggable,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  className,
  isReordering,
}: MyWalletCardProps) {
  // Fetch wallets from backend (icon will be an image_link and then the ui will be changed to use Image element)
  const wallets: WalletProp[] = [
    {
      address: "0x4037D2daa35420Ee4A3b19F7c4137e1b36538f54",
      icon: <TokenBTC variant="branded" size="12" />,
    },
    {
      address: "0x4037D2daa35420Ee4A3b19F7c4137e1b36538f54",
      icon: <TokenETH variant="branded" size="12" />,
    },
    {
      address: "0x4037D2daa35420Ee4A3b19F7c4137e1b36538f54",
      icon: <TokenUSDT variant="branded" size="12" />,
    },
  ];

  const copyToClipboard = (payment_link: string): void => {
    navigator.clipboard.writeText(payment_link);
    alert("Payment link copied to clipboard");
  };

  return (
    <div
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`bg-white rounded-2xl p-6 space-y-5 ${
        isReordering ? "border border-[#F5841F] drag-shadow" : ""
      } ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">My Wallets</h2>
        <div
          className="w-8 h-8 rounded-full bg-white shadow-xl shadow-shadow-color flex items-center 
        justify-center border border-[#8080801A]"
        >
          <PencilSimple size={12} className="text-input-gray" />
        </div>
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
              <p className="text-sm">{truncateAddress(wallet.address, 6)}</p>
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
  );
}
