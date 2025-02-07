import type React from "react";
import Image from "next/image";

// Icons
import { Copy } from "@phosphor-icons/react/dist/ssr";

interface FiatCardProps {
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDragLeave?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  className?: string;
  isReordering?: boolean;
}

interface Bank {
  img: string;
  acct_num: string;
  bank_name: string;
  acct_name: string;
}

export default function FiatCard({
  draggable,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  className,
  isReordering,
}: FiatCardProps) {
  // Fetch bank details
  const bank: Bank = {
    img: "/Images/gt_bank_logo.svg",
    acct_num: "2637702067",
    bank_name: "Guaranty Trust Bank",
    acct_name: "Eni Williams",
  };
  const copyToClipboard = (acct_num: string): void => {
    navigator.clipboard.writeText(acct_num);
    alert("Payment link copied to clipboard");
  };

  return (
    <div
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`bg-white rounded-2xl p-6 space-y-5 md:col-span-2 lg:col-span-1 ${
        isReordering ? "border border-[#F5841F] drag-shadow" : ""
      } ${className}`}
    >
      {/* Header */}
      <div className="space-y-3">
        <Image
          src={bank.img}
          width={32}
          height={32}
          alt={`${bank.bank_name} Logo`}
        />

        <p className="font-medium">{bank.bank_name}</p>
      </div>

      {/* Footer */}
      <div className="space-y-3">
        <div className="bg-background min-h-[52px] p-3 rounded-lg flex items-center justify-between">
          <p>{bank.acct_num}</p>
          <button
            type="button"
            className="bg-white flex items-center justify-center w-9 h-9 rounded-full"
            onClick={() => copyToClipboard(bank?.acct_num)}
          >
            <Copy size={20} />
          </button>
        </div>
        <p className="text-gray-primary text-xs">{bank.acct_name}</p>
      </div>
    </div>
  );
}
