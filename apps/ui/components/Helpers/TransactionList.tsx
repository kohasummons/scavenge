import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { TokenBTC } from "@web3icons/react";

export function TransactionList() {
  const transactions = [
    {
      id: 1,
      address: "0x4B4cF2c...0996F46bc3",
      amount: "0.00001264",
    },
    {
      id: 2,
      address: "0x4B4cF2c...0996F46bc3",
      amount: "0.00001264",
    },
  ];

  return (
    <div className="space-y-5">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <TokenBTC variant="branded" size="24" />
              <p className="font-medium text-2xl">Bitcoin</p>
            </div>

            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-input-gray text-white">
              <ArrowDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-primary ">
            <p className="px-2">{transaction.address}</p>
            <span>{transaction.amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
