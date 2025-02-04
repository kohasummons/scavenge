"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import AddressInput from "./AddressInput";
import AddressList from "./AddressList";

import { Plus } from "@phosphor-icons/react/dist/ssr";

interface WalletManagerProps {
  handleClose: () => void;
}

export default function WalletManager({ handleClose }: WalletManagerProps) {
  const { currentWallet, tokens } = useSelector(
    (state: RootState) => state.wallet
  );
  const [isEditing, setIsEditing] = useState(false);

  if (!currentWallet) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:max-w-lg w-[95%] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Wallet Name</h2>
        <div className="space-x-2">
          <button
            onClick={handleClose}
            className={`px-4 py-2 font-semibold text-sm hover:text-gray-800 bg-background rounded-3xl ${
              isEditing ? "opacity-30" : ""
            }`}
          >
            Cancel
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className={`px-4 py-2 bg-orange text-white font-semibold text-sm rounded-3xl hover:bg-orange-600 ${
              isEditing ? "opacity-30" : ""
            }`}
          >
            Save
          </button>
        </div>
      </div>

      <div className="mb-6 space-y-2">
        <h3 className="text-gray-600 mb-2">Addresses</h3>
        <AddressList addresses={currentWallet.addresses} />
        {isEditing ? (
          <AddressInput tokens={tokens} onSave={() => setIsEditing(false)} />
        ) : (
          <div className="flex justify-end">
            <button
              onClick={() => setIsEditing(true)}
              type="button"
              className="bg-background rounded-3xl py-1 px-2 text-sm font-semibold flex gap-2 items-center"
            >
              <Plus size={15} />
              Add
            </button>
          </div>
        )}
      </div>

      <p className="text-sm text-gray-500">
        Make sure your wallet addresses are accurate. You could lose funds if
        they aren&apos;t.
      </p>
    </div>
  );
}
