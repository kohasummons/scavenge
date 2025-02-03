"use client";

// Library imports
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// Icons
import { User, Wallet, ChartBar, Bell } from "@phosphor-icons/react/dist/ssr";

const DashboardCustomLayout = ({ children }: { children: React.ReactNode }) => {
  const savedUsername =
    typeof window !== "undefined" ? localStorage.getItem("link") : "itxbo";
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "profile";

  const navItems: { name: string; icon: React.ReactNode }[] = [
    {
      name: `profile`,
      icon: <User size={20} className="text-gray" />,
    },
    {
      name: `wallets`,
      icon: <Wallet size={20} className="text-gray" />,
    },
    {
      name: `analytics`,
      icon: <ChartBar size={20} className="text-gray" />,
    },
  ];
  return (
    <section className="lg:pt-10 xl:pt-14 pt-24 relative">
      <nav className="bg-[#F1F1F1] rounded-3xl max-w-[355px] p-2 mx-auto flex items-center justify-between">
        {navItems.map((item, index) => (
          <Link
            href={`/${savedUsername}/dashboard/?tab=${item.name}`}
            key={index}
            className={`${
              currentTab === item.name ? "bg-white" : ""
            } rounded-3xl p-2 flex items-center gap-2 font-medium transition-all duration-500`}
          >
            {item.icon}
            <p className="capitalize">{item.name}</p>
          </Link>
        ))}
      </nav>

      <div className="w-12 h-10 rounded-3xl bg-white flex items-center justify-center absolute top-5 md:right-60 lg:top-12 xl:top-16 right-44">
        <Bell size={25} className="text[#6F6F6F]" />
      </div>

      {children}
    </section>
  );
};

export default DashboardCustomLayout;
