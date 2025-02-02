"use client";

import type { WalletAddress } from "@/types/wallet";
import { truncateAddress } from "@/lib/utils";

// Icons
import { Copy, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { TokenBTC } from "@web3icons/react";

interface AddressListProps {
  addresses: WalletAddress[];
}

export default function AddressList({ addresses }: AddressListProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-2">
      {addresses.map((address) => (
        <div
          key={address.id}
          className="flex items-center space-x-2 bg-gray-50 rounded"
        >
          <div className="rounded-lg bg-background  p-2 w-full flex justify-between items-center">
            <div className="flex gap-3 items-center">
              {" "}
              <span className="bg-white p-1 rounded-3xl flex gap-1 items-center">
                <TokenBTC variant="branded" size="16" />
                <CaretDown size={12} className="text-gray" />
              </span>
              <span> {truncateAddress(`${address.address}`, 8)}</span>
            </div>

            <button
              onClick={() => copyToClipboard(address.address)}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <Copy size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
