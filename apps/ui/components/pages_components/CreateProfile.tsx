"use client";

// Library imports
import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

// Components
import FormInput from "../form/FormInput";

interface FormData {
  username: string;
  full_name: string;
  email: string;
  date_of_birth: string;
}

const CreateProfileComponent = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    full_name: "",
    email: "",
    date_of_birth: "",
  });

  useEffect(() => {
    // Get username from localStorage on component mount
    if (typeof window !== "undefined") {
      const savedUsername = localStorage.getItem("link") || "itxbo";
      setFormData((prev) => ({ ...prev, username: savedUsername }));
    }
  }, []);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const submitText = isLoading ? "Creating profile..." : "Create profile";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      //   const response = await fetch('/api/create-profile', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(formData),
      //   })

      //   if (!response.ok) {
      //     throw new Error('Failed to create profile')
      //   }

      //   const data = await response.json()
      setTimeout(() => {
        setIsLoading(false);
        router.push("/claim-username");
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      //   setIsLoading(false)
    }
  };

  return (
    <div className="relative h-full overflow-hidden">
      {/* Content */}
      <div
        className="space-y-14 md:w-[341px] w-full mx-auto md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 
      md:-translate-y-1/2 md:transform"
      >
        {/* Header */}
        <div className="space-y-7">
          {/* Progress */}
          <div className="bg-white w-full h-4 rounded-3xl">
            <div className="w-1/4 bg-[#ECAA04] h-full rounded-3xl"></div>
          </div>

          {/* Header */}
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-semibold">Create your Profile</h1>
            <p>Connect to a Social Account to Continue</p>
          </div>
        </div>

        {/* Form */}
        <div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label htmlFor="link" className="block font-semibold">
                Username
              </label>
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
                    className="outline-none bg-transparent border-none w-full text-gray cursor-not-allowed"
                    placeholder="you"
                    value={formData.username}
                    onChange={handleChange}
                    readOnly
                  />
                </div>

                <Image
                  src={`/Images/lets-icons_check-fill.svg`}
                  width={15}
                  height={15}
                  alt="Check Icons"
                />
              </div>
            </div>

            <FormInput
              label="Full Name"
              type="text"
              name="full_name"
              placeholder="Your name"
              onChange={handleChange}
              value={formData.full_name}
            />

            <FormInput
              label="Email address"
              type="email"
              name="email"
              placeholder="you@email.com"
              onChange={handleChange}
              value={formData.email}
            />

            <FormInput
              label="Date of Birth"
              type="date"
              name="date_of_birth"
              placeholder="DD/MM/YY"
              onChange={handleChange}
              value={formData.date_of_birth}
            />

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <motion.button
              type="submit"
              className="mx-auto block w-full"
              whileHover={{ scale: 1.1 }} // Scale effect on hover
              whileTap={{ scale: 0.95 }} // Slight shrink on click
              transition={{ type: "spring", stiffness: 300 }} // Smooth spring effect
            >
              <span
                className="bg-black shadow-md shadow-[#8080801A] min-h-[60px] w-full rounded-[40px] 
                   text-white gradient-border flex items-center justify-center"
              >
                {submitText}
              </span>
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfileComponent;
