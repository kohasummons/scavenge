"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import type { Token, WalletAddress } from "@/types/wallet";
import { addWalletAddress } from "@/store/walletSlice";

import { CaretDown } from "@phosphor-icons/react/dist/ssr";

interface AddressInputProps {
  tokens: Token[];
  onSave?: () => void;
}

export default function AddressInput({ tokens, onSave }: AddressInputProps) {
  const dispatch = useDispatch();
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [address, setAddress] = useState("");

  const handleSave = () => {
    if (selectedToken && address) {
      dispatch(
        addWalletAddress({
          id: Date.now().toString(),
          token: selectedToken,
          address,
        } as WalletAddress)
      );
      setSelectedToken(null);
      setAddress("");
      onSave?.();
    }
  };

  return (
    <div className="flex items-center justify-between space-x-2 bg-gray-50 rounded-lg">
      <div className="flex gap-2 items-center bg-background rounded-lg p-2 w-4/5">
        <div className="relative min-w-[65px] bg-white rounded-3xl">
          <select
            value={selectedToken?.id || ""}
            onChange={(e) => {
              const token = tokens.find((t) => t.id === e.target.value);
              setSelectedToken(token || null);
            }}
            className="w-full p-2 bg-white outline-none shadow-sm
             shadow-shadow-color text-xs text-gray rounded-3xl appearance-none"
          >
            <option value="" className="flex items-center gap-1">
              Token
            </option>
            {tokens.map((token) => (
              <option key={token.id} value={token.id}>
                {token.symbol}
              </option>
            ))}
          </select>
        </div>

        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter wallet address"
          className="flex-1 bg-transparent outline-none"
        />
      </div>

      <button
        onClick={handleSave}
        disabled={!selectedToken || !address}
        className="px-4 py-2 bg-orange text-sm font-medium text-white 
        rounded-3xl hover:bg-orange-600 disabled:opacity-50 w-1/5 block"
      >
        Save
      </button>
    </div>
  );
}
