"use client";

// Library imports
import { useState, useRef, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

// Icons
import { BillaIcon } from "../icons";

const LandingPageComponent = () => {
  const link = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const submitText = isLoading ? "Claming link..." : "Claim link";
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const enteredLink = link.current!.value;

    // Safely access localstorage in next to save an item
    if (typeof window !== "undefined") {
      localStorage.setItem("link", enteredLink);
    }

    try {
      // Integrate Endpoint here
      setTimeout(() => {
        router.push(`/create-profile`);
        if (link.current) {
          link.current.value = "";
        }

        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      //   setIsLoading(false)
    }
  };
  return (
    <div className="space-y-14 md:space-y-20 2xl:h-screen relative scrollable-box">
      <header className="pt-10 flex justify-center items-center">
        {/* Logo */}
        <Link href={`/`} className="text-center ">
          <BillaIcon width={100} height={40} />
        </Link>
      </header>

      <main>
        {/* Hero */}
        <section className="space-y-16 md:space-y-32">
          {/* Word content */}
          <div className="px-5 lg:px-0 lg:max-w-[850px] mx-auto flex flex-col items-center justify-center gap-10">
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="font-giest font-semibold text-[32px] leading-10 md:text-heading md:leading-[52px]">
                Get Paid in every Way Possible through your Universal Payments
                Profile
              </h1>
              <p>Collect Payments, dust and living matter</p>
            </div>

            {/* Link */}
            <div className="space-y-5">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div
                  className="rounded-3xl bg-white shadow-md shadow-[#8080801A] p-3 flex 
                items-center justify-between"
                >
                  <div className="flex">
                    <span>billa.gg/</span>
                    <input
                      type="text"
                      name="link"
                      id="link"
                      className="outline-none bg-transparent border-none w-full text-gray"
                      placeholder="you"
                      ref={link}
                    />
                  </div>

                  <Image
                    src={`/Images/check_icon.svg`}
                    width={15}
                    height={15}
                    alt="Check Icons"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="mx-auto block"
                  whileHover={{ scale: 1.1 }} // Scale effect on hover
                  whileTap={{ scale: 0.95 }} // Slight shrink on click
                  transition={{ type: "spring", stiffness: 300 }} // Smooth spring effect
                >
                  <span
                    className="bg-black shadow-md shadow-[#8080801A] min-h-[60px] rounded-[40px] min-w-[175px]
                   text-white gradient-border block"
                  >
                    {submitText}
                  </span>
                </motion.button>
              </form>

              <p className="text-center">$5 One time. Forever</p>
            </div>
          </div>

          {/* Images */}
          <div className="px-5 md:px-16 lg:px-0 lg:w-4/5 mx-auto flex flex-col md:flex-row gap-10 justify-center 2xl:absolute 2xl:bottom-0 2xl:left-1/2 2xl:-translate-x-1/2">
            <div className="w-full lg:w-[590px] h-[330px] rounded-[32px] bg-[#7F7F7F]"></div>
            <div className="w-full lg:w-[590px] h-[330px] rounded-[32px] bg-[#7F7F7F]"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPageComponent;
