import type React from "react";
import QRCode from "react-qr-code";
import { truncateAddress } from "@/lib/utils";

// Icons
import { TokenETH, TokenBTC, TokenUSDT, TokenBNB } from "@web3icons/react";
import { Copy } from "@phosphor-icons/react/dist/ssr";

interface Token {
  name: string;
  symbol: string;
  address: string;
  icon: React.ReactNode;
  bg_color: string;
}

interface QRCodeCardProps {
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDragLeave?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  className?: string;
  isReordering?: boolean;
}

export default function QRCodeCard({
  draggable,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  className,
  isReordering,
}: QRCodeCardProps) {
  const value = "https://link_to_payment";
  // Fetch available tokens from backend
  const tokens: Token[] = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      address: "0x1234567890",
      icon: <TokenBTC variant="branded" size="12" />,
      bg_color: "#F7931A",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      address: "0x1234567890",
      icon: <TokenETH variant="branded" size="12" />,
      bg_color: "#627EEA",
    },
    {
      name: "Tether",
      symbol: "USDT",
      address: "0x1234567890",
      icon: <TokenUSDT variant="branded" size="12" />,
      bg_color: "#26A17B",
    },
    {
      name: "BNB",
      symbol: "BNB",
      address: "0x1234567890",
      icon: <TokenBNB variant="branded" size="12" />,
      bg_color: "#F3BA2F",
    },
  ];

  const wallet_address = "0x4037D2daa35420Ee4A3b19F7c4137e1b36538f54";

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(wallet_address);
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
      <div className="flex justify-between items-start">
        {/* QR Code */}
        <div className="w-16 h-16">
          <QRCode value={value} size={64} className="w-full h-auto" />
        </div>

        {/* Tokens */}
        <div className="inline-flex items-center bg-black rounded-full p-1">
          <div className="flex -space-x-2">
            {tokens.map((token) => (
              <div
                key={token.symbol}
                className="relative flex items-center justify-center w-6 h-6 rounded-full bg-opacity-50 bg-background"
                // style={{ backgroundColor: token.bg_color }}
                title={`${token.name} (${token.symbol})`}
              >
                <div className="w-3 h-3 flex items-center justify-center">
                  {token.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-background p-2 rounded-lg flex justify-between items-center min-h-[52px]">
        <p>{truncateAddress(wallet_address, 6)}</p>

        <button
          type="button"
          className="bg-white flex items-center justify-center w-9 h-9 rounded-full"
          onClick={copyToClipboard}
        >
          <Copy size={20} />
        </button>
      </div>
    </div>
  );
}
