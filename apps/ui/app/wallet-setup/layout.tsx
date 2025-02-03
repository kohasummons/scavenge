import Link from "next/link";

// Component
import CustomLayout from "@/components/layout/CustomLayout";

// Icons
import { BillaIcon } from "@/components/icons";

export default function WalletSetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-14 md:flex-row items-start md:h-screen ">
      <nav
        className="md:h-full md:overflow-hidden w-full md:w-1/4 lg:w-[15%] 2xl:w-[12%] border-r border-r-border 
          md:px-7 md:pt-14 p-5 fixed z-50 bg-background md:relative border-b border-b-border"
      >
        {/* Logo */}
        <Link href={`/`} className="text-center ">
          <BillaIcon width={100} height={40} />
        </Link>

        <footer className="hidden md:block absolute bottom-10 text-xs text-gray">
          <p>Terms and Conditions</p>
          <p>©2025 Billa App</p>
        </footer>
      </nav>

      <CustomLayout>{children}</CustomLayout>

      <footer className="text-center text-xs text-gray md:hidden w-full">
        <p>Terms and Conditions</p>
        <p>©2025 Billa App</p>
      </footer>
    </section>
  );
}
