import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import type { Transaction } from "../tab-components/Wallet";

interface TransactionCardProps {
  transaction: Transaction;
  hidden: boolean;
}

import { TokenBTC } from "@web3icons/react";

export const TransactionCard = ({
  transaction,
  hidden,
}: TransactionCardProps) => {
  return (
    <div className="p-4 bg-white rounded-lg box-shadow space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Will contain the token icon coming from backend */}
          <TokenBTC variant="branded" size="24" />
          {/* {transaction.type === "receive" ? (
            <ArrowDown className="text-green-500" size={20} />
          ) : (
            <ArrowUp className="text-red-500" size={20} />
          )} */}
          <span className="font-medium">{transaction.token}</span>
        </div>
        <button
          type="button"
          className="bg-input-gray w-5 h-5 rounded-full text-white flex items-center justify-center"
        >
          <ArrowDown size={12} />
        </button>
      </div>

      <div className="text-sm text-gray-primary truncate">
        {transaction.type === "receive" ? "From: " : "To: "}
        {transaction.type === "receive" ? transaction.from : transaction.to}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-primary">
          {transaction.type === "receive" ? "Received" : "Sent"}
        </span>
        <span className="font-medium">
          {hidden ? "****" : transaction.amount}
        </span>
      </div>
    </div>
  );
};
