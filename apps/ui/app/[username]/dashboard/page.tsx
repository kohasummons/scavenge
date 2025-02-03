"use client";

import { useSearchParams } from "next/navigation";

// Components
import ProfileTab from "@/components/tab-components/Profile";
import WalletTab from "@/components/tab-components/Wallet";
import { AnalyticsTab } from "@/components/tab-components/Analytics";

const DashboardPage = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "profile";

  return (
    <div className="pt-5">
      {tab === "profile" && <ProfileTab />}
      {tab === "wallets" && <WalletTab />}
      {tab === "analytics" && <AnalyticsTab />}
    </div>
  );
};

export default DashboardPage;
