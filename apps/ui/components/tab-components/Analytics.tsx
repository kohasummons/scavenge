import { type ReactNode, useState } from "react";

import { TransactionList } from "../Helpers/TransactionList";
import { ActivityGraph } from "../Helpers/ActivityGraph";
import { LinksList } from "../Helpers/LinkList";
import { Select } from "../Helpers/Select";

import {
  TokenETH,
  TokenBTC,
  TokenUSDT,
  TokenBNB,
  TokenUSDC,
} from "@web3icons/react";
import { CaretUp, CaretDown } from "@phosphor-icons/react/dist/ssr";

interface TokenProp {
  icon: ReactNode;
  abbr: string;
  name: string;
}

export const AnalyticsTab = () => {
  // Select token functionality
  const tokens: TokenProp[] = [
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

    handleTokenDrop();
  };
  return (
    <div className="p-6 space-y-6 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:w-[850px] xl:w-[1080px] md:w-full mx-auto w-full -mt-5 md:mt-0">
      {/* Stats */}
      <div className="max-w-[400px] bg-white p-5 rounded-lg grid grid-cols-10 gap-5">
        {/* Total Received */}
        <div className="col-span-6 space-y-3">
          <h2 className="text-gray-primary text-sm">Total Received</h2>

          <div className="flex gap-3 items-center">
            <p className="text-2xl font-semibold">2.55 {selectedToken.abbr}</p>

            <div
              className="col-span-1 h-9 bg-white flex gap-1 justify-center items-center rounded-3xl
               text-gray text-sm relative font-medium cursor-pointer box-shadow p-2"
              onClick={handleTokenDrop}
            >
              <span className="block">
                {selectedToken?.icon || selectedToken?.abbr}
              </span>
              {showTokenDrop ? <CaretUp size={10} /> : <CaretDown size={10} />}

              {showTokenDrop && (
                <div className="absolute top-10 left-0 space-y-1 bg-white p-3 z-50 rounded-2xl shadow-lg shadow-shadow-color">
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
          </div>
        </div>

        {/* Total page visits */}
        <div className="col-span-4 space-y-3 border-l border-l-background pl-5">
          <h2 className="text-gray-primary text-sm">Total Received</h2>
          <div className="flex gap-3 items-center">
            <p className="text-2xl font-semibold">122</p>

            <span className="py-1 px-2 rounded-3xl bg-[#EAFAF5] text-[#26A17B] text-[10px]">
              +16%
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="bg-white rounded-3xl p-5">
          <div className="flex items-start md:justify-between mb-6">
            <h2 className=" font-semibold text-sm lg:text-base">
              Payment Activity
            </h2>
            <div className="flex gap-1 md:gap-2">
              <Select
                options={[
                  {
                    label: "BTC",
                    value: "btc",
                    icon: <TokenBTC variant="branded" size="16" />,
                  },
                ]}
                defaultValue="btc"
                onChange={(value) => console.log(value)}
              />
              <Select
                options={[{ label: "Wallet ", value: "wallet1" }]}
                defaultValue="wallet1"
                onChange={(value) => console.log(value)}
              />
            </div>
          </div>
          <TransactionList />
        </div>

        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Links (3)</h2>
            <div className="text-sm font-medium">Clicks</div>
          </div>
          <LinksList />
        </div>
      </div>

      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Payment Activity</h2>
          <div className="flex gap-2">
            <Select
              options={[
                {
                  label: "BTC",
                  value: "btc",
                  icon: <TokenBTC variant="branded" size="16" />,
                },
              ]}
              defaultValue="btc"
              onChange={(value) => console.log(value)}
            />
            <Select
              options={[{ label: "Wallet ", value: "wallet1" }]}
              defaultValue="wallet1"
              onChange={(value) => console.log(value)}
            />
          </div>
        </div>
        <ActivityGraph />
      </div>
    </div>
  );
};
