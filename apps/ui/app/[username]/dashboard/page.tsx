"use client";

import { useSearchParams } from "next/navigation";

// Components
import ProfileTab from "@/components/tab-components/Profile";
import WalletTab from "@/components/tab-components/Wallet";
import { AnalyticsTab } from "@/components/tab-components/Analytics";

import { Card } from "@/components/tab-components/Profile";

// This would normally come from your database
const mockCards: Card[] = [
  { id: "1", type: "pay-me", order: 0 },
  { id: "2", type: "qr-code", order: 1 },
  { id: "3", type: "my-wallet", order: 2 },
  { id: "4", type: "fiat", order: 3 },
];

const DashboardPage = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "profile";

  return (
    <div className="pt-5">
      {tab === "profile" && <ProfileTab initialCards={mockCards} />}
      {tab === "wallets" && <WalletTab />}
      {tab === "analytics" && <AnalyticsTab />}
    </div>
  );
};

export default DashboardPage;
