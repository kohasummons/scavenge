// Library imports
import Link from "next/link";
import { BillaIcon } from "@/components/icons";

// Icons
import { GearSix, CaretDown } from "@phosphor-icons/react/dist/ssr";

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
       xl:py-10 lg:py-8 py-5 lg:px-5 px-3 md:px-5 fixed top-0 lg:border-r lg:border-r-border border-b border-b-border lg:relative w-full"
      >
        <Link href={`/`} className="text-center ">
          <BillaIcon width={100} height={40} />
        </Link>

        {/* Sidebar footer */}
        <footer className="lg:absolute xl:bottom-10 lg:bottom-8 flex lg:block gap-3 items-center font-medium lg:space-y-3 lg:w-full lg:left-1/2 lg:-translate-x-1/2 lg:px-5">
          <Link
            href={`/${savedUsername}/setting`}
            className="flex gap-1 items-center"
          >
            <GearSix size={25} className="text-gray-primary" />
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

      <div className="lg:w-[85%] xl:w-[88%]"> {children}</div>
    </section>
  );
}
