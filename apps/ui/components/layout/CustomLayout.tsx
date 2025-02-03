"use client";

import { Providers } from "@/providers";

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <div className="w-full px-5 md:px-0 md:h-full overflow-scroll scrollable-box pt-40 md:pt-0 md:-ml-[5%]">
        {children}
      </div>
    </Providers>
  );
};

export default CustomLayout;
