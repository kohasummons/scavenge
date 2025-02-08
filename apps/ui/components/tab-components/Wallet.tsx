// library imports
import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { truncateAddress } from "@/lib/utils";

// Components
import { TransactionCard } from "../cards/TransactioonCard";

// Icons
import { CaretUp, CaretDown } from "@phosphor-icons/react/dist/ssr";
import {
  TokenETH,
  TokenBTC,
  TokenUSDT,
  TokenBNB,
  TokenUSDC,
  WalletMetamask,
} from "@web3icons/react";

interface TokenProp {
  icon: ReactNode;
  abbr: string;
  name: string;
}

export interface Transaction {
  id: string;
  token: string;
  amount: number;
  from: string;
  to: string;
  timestamp: number;
  type: "send" | "receive";
  // Will contain icon coming from backend
}

const WalletTab = () => {
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

  const [selectedToken, setSelectedToken] = useState<TokenProp>(tokens[0]);
  const handleSelectToken = (token: TokenProp): void => {
    setSelectedToken(token);
    handleTokenDrop();
  };

  const generateTransactions = (token: string): Transaction[] => {
    return Array.from({ length: 3 }, (_, i) => ({
      id: `${token}-${i}`,
      token,
      amount: Number(
        (
          Math.random() * (token === "USDT" || token === "USDC" ? 1000 : 1)
        ).toFixed(8)
      ),
      from: `0x${Math.random().toString(16).slice(2, 42)}`,
      to: `0x${Math.random().toString(16).slice(2, 42)}`,
      timestamp: Date.now() - i * 86400000, // Subtract days
      type: Math.random() > 0.5 ? "send" : "receive",
    }));
  };

  const mockTransactions: Record<string, Transaction[]> = {
    BTC: generateTransactions("BTC"),
    ETH: generateTransactions("ETH"),
    USDT: generateTransactions("USDT"),
    BNB: generateTransactions("BNB"),
    USDC: generateTransactions("USDC"),
  };

  const fetchTransactions = async (token: string): Promise<Transaction[]> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockTransactions[token] || [];
  };

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hideAmounts, setHideAmounts] = useState<boolean>(false);
  console.log(transactions);

  // useEffect(() => {
  //   const getTransactions = async () => {
  //     setIsLoading(true);
  //     try {
  //       const data = await fetchTransactions(selectedToken.abbr);
  //       setTransactions(data);
  //     } catch (error) {
  //       console.error("Failed to fetch transactions:", error);
  //     }
  //     setIsLoading(false);
  //   };

  //   getTransactions();
  // }, [selectedToken.abbr]);

  // Available wallet
  const available_wallet: {
    icon: ReactNode;
    wallet_addresss: string;
    id: number;
    isMainWallet: boolean;
    name: string;
  }[] = [
    {
      id: 1,
      icon: <WalletMetamask variant="branded" size="10" />,
      wallet_addresss: "0x4B4cF2c...09B4c96FBB4c4c46",
      isMainWallet: true,
      name: "Metamask",
    },
    {
      id: 2,
      icon: <WalletMetamask variant="branded" size="10" />,
      wallet_addresss: "0x4B4cF2c...09B4c96FBB4c4c46",
      isMainWallet: false,
      name: "Phantom",
    },
  ];

  const [activeWallet, setActiveWallet] = useState<number>(1);
  const handleSelectWallet = (id: number): void => {
    setActiveWallet(id);
  };

  return (
    <div className="w-[92%] mx-auto md:pt-10 space-y-10 md:w-[480px] relative">
      {/* Main wallet */}
      <div className="p-5 rounded-2xl bg-white space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Main Wallet</h2>

          {available_wallet[activeWallet - 1].isMainWallet ? (
            <span className="flex items-center gap-2 p-2 rounded-3xl border border-orange">
              <Image
                src={`/Images/flowbite_award-solid.svg`}
                width={16}
                height={16}
                alt="Award icon"
              />

              <span className="text-sm font-semibold text-sm">Main Wallet</span>
            </span>
          ) : (
            <button
              type="button"
              className="p-2 rounded-3xl bg-orange text-white"
            >
              Set as Main Wallet
            </button>
          )}
        </div>

        {/* Wallet */}
        <div className="p-3 flex items-center justify-between box-shadow rounded-lg">
          <div className="space-y-2">
            <div className="flex gap-1 items-center">
              <WalletMetamask variant="branded" size="24" />
              <span>{available_wallet[activeWallet - 1]?.name}</span>
            </div>

            <p className="text-xs text-gray-primary">
              {available_wallet[activeWallet - 1]?.wallet_addresss}
            </p>
          </div>

          <button
            type="button"
            className="bg-white flex items-center justify-center w-9 h-9 rounded-full box-shadow"
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

      {/* Transactions */}
      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between font-semibold">
          <h3>Transactions</h3>

          <div
            className="col-span-1 min-w-[104px] h-9 bg-white flex gap-1 justify-between items-center rounded-3xl
               relative font-medium cursor-pointer px-3"
            onClick={handleTokenDrop}
          >
            <span className="flex items-center font-semibold">
              {selectedToken?.icon}
              {selectedToken?.abbr}
            </span>

            {showTokenDrop ? <CaretUp size={20} /> : <CaretDown size={20} />}

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

          <button
            type="button"
            onClick={() => setHideAmounts(!hideAmounts)}
            className={`${transactions.length <= 0 ? "text-[#C4C4C4]" : ""}`}
          >
            {hideAmounts ? "Show figures" : "Hide figures"}{" "}
          </button>
        </div>

        {/* isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-24 bg-gray-100 animate-pulse rounded-lg"
              />
            ))}
          </div>
        ) : */}

        {/* Trans */}
        {transactions.length > 0 ? (
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <TransactionCard
                key={transaction.id}
                transaction={transaction}
                hidden={hideAmounts}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Image
              src={`/Images/iconoir_wallet-solid.svg`}
              width={128}
              height={128}
              alt="iconoir_wallet-solid"
              className="mx-auto"
            />
            <p className="text-[#C4C4C4] font-semibold">
              {" "}
              No transactions yet for {selectedToken.abbr}
            </p>
          </div>
        )}
      </div>

      {/* Wallet list */}
      <div className="absolute -left-28 top-0 space-y-3">
        {available_wallet?.map((wallet, index) => (
          <div key={index} className="flex gap-2 items-start">
            <span className="text-gray-primary text-xs">{wallet.id}</span>

            <span
              className={`bg-white flex cursor-pointer ${
                wallet.isMainWallet ? "justify-between" : ""
              } gap-1  items-center box-shadow rounded-xl p-2 text-[8px] w-[80px] ${
                wallet.id === activeWallet ? "border-2 border-black" : ""
              }`}
              onClick={() => handleSelectWallet(wallet.id)}
            >
              {wallet.icon}
              {truncateAddress(wallet.wallet_addresss, 2)}
              {wallet.isMainWallet && (
                <Image
                  src={`/Images/flowbite_award-solid.svg`}
                  width={10}
                  height={10}
                  alt="Award icon"
                />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletTab;
