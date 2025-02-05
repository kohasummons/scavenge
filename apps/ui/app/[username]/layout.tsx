// Library imports
import Link from "next/link";
import { BillaIcon } from "@/components/icons";

// Icons
import { GearSix, CaretDown, Bell } from "@phosphor-icons/react/dist/ssr";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const savedUsername =
    typeof window !== "undefined" ? localStorage.getItem("link") : "itxbo";

  return (
    <section className="flex flex-col lg:flex-row items-start">
      {/* Sidebar */}
      <nav
        className="lg:w-[15%] xl:w-[12%] lg:h-screen flex items-center justify-between lg:block lg:overflow-hidden
       xl:py-10 lg:py-8 py-5 bg-background z-50 lg:px-5 px-3 md:px-5 fixed top-0 lg:border-r
       lg:border-r-border border-b border-b-border lg:relative w-full"
      >
        <Link href={`/`} className="text-center ">
          <BillaIcon width={100} height={40} />
        </Link>

        {/* Sidebar footer */}
        <footer
          className="lg:absolute xl:bottom-10 lg:bottom-8 flex lg:block gap-3 items-center
         font-semibold lg:space-y-3 lg:w-full lg:left-1/2 lg:-translate-x-1/2 lg:px-5"
        >
          <div className="w-12 h-12 lg:hidden rounded-3xl flex items-center justify-center ">
            <Bell size={25} className="text[#6F6F6F]" />
          </div>

          <Link
            href={`/${savedUsername}/setting`}
            className="flex gap-1 items-center"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <GearSix size={25} className="text-gray-primary" />
            </div>

            <span className="hidden md:block">Settings</span>
          </Link>

          <div className="bg-[#F1F1F1] rounded-3xl p-2 flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <div className="w-6 h-6 rounded-full bg-orange"></div>
              <p>{savedUsername}</p>
            </div>

            <div>
              <CaretDown size={20} />
            </div>
          </div>
        </footer>
      </nav>

      <div className="lg:w-[85%] mx-auto xl:w-[88%] w-full lg:h-screen overflow-scroll scrollable-box pb-10">
        {children}
      </div>
    </section>
  );
}
