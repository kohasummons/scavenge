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
    <section className="lg:pt-10 xl:pt-14 pt-32 relative">
      {/* <div
        className="fixed top-0 left-0 w-full h-[30%] xl:h-[17%] md:h-1/5 lg:h-[18%] border border-background
       shadow-sm bg-background rounded-b-[70px] md:rounded-b-[100px] z-0"
      /> */}
      <div>
        <nav
          className="bg-[#F1F1F1] z-50 rounded-3xl max-w-[355px] p-2 mx-auto flex items-center justify-between fixed 
      top-28 lg:top-10 xl:top-14 left-1/2 -translate-x-1/2 transform"
        >
          {navItems.map((item, index) => (
            <Link
              href={`/${savedUsername}/dashboard/?tab=${item.name}`}
              key={index}
              className={`${
                currentTab === item.name ? "bg-white" : ""
              } rounded-3xl p-2 flex items-center gap-2 font-semibold transition-all duration-500`}
            >
              {item.icon}
              <p className="capitalize">{item.name}</p>
            </Link>
          ))}
        </nav>

        <div className="w-12 hidden h-10 rounded-3xl bg-white lg:flex items-center justify-center fixed top-5 md:right-60 lg:top-12 xl:top-16 right-44">
          <Bell size={25} className="text[#6F6F6F]" />
        </div>
      </div>

      <div className="pt-20 md:pt-16 lg:-ml-[11%]">{children}</div>
    </section>
  );
};

export default DashboardCustomLayout;
