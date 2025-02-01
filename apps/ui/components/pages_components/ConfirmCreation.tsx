"use client";

import type React from "react";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "motion/react";

const ConfirmCreation = () => {
  const savedUsername =
    typeof window !== "undefined" ? localStorage.getItem("link") : null;

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);

      // Create a temporary URL for preview
      const previewUrl = URL.createObjectURL(file);
      setImageUrl(previewUrl);

      setTimeout(() => {
        setIsUploading(false);
      }, 2000);

      //   // Create form data for upload
      //   const formData = new FormData();
      //   formData.append("image", file);

      //   // Send to endpoint
      //   const response = await fetch("/api/upload", {
      //     method: "POST",
      //     body: formData,
      //   });

      //   if (!response.ok) {
      //     throw new Error("Upload failed");
      //   }

      //   // Clean up the temporary URL
      //   URL.revokeObjectURL(previewUrl);

      //   // Get the permanent URL from server response
      //   const { url } = await response.json();
      //   setImageUrl(url);
    } catch (error) {
      console.error("Upload error:", error);
      setImageUrl(null);
    } finally {
      //   setIsUploading(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative h-full overflow-hidden">
      {/* Content */}
      <div
        className="space-y-36 md:w-[341px] w-full mx-auto md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 
md:-translate-y-1/2 md:transform text-center"
      >
        <span className="inline-block bg-black py-2 px-3 rounded-3xl text-white mx-auto ">
          billa.gg/<span className="text-gray">{savedUsername}</span>
        </span>

        <div className="space-y-10">
          {/* Header */}
          <div className="space-y-7 text-center">
            {/* Progress */}
            <div className="bg-white w-full h-4 rounded-3xl">
              <div className="w-full bg-[#ECAA04] h-full rounded-3xl"></div>
            </div>

            {/* Header */}
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-semibold">Sweet!</h1>
              <p>Welcome to billa, Williams!</p>
            </div>
          </div>

          {/* Profile info */}
          <div className="space-y-20">
            {/* Profile Image and link */}
            <div className="flex flex-col items-center gap-4">
              {/* Profile image */}
              <button
                onClick={handleClick}
                className={`relative w-32 h-32 rounded-full ${
                  imageUrl ? "" : "bg-[#F5841F]"
                }   hover:bg-orange-600 
                transition-colors overflow-hidden shadow-lg shadow-shadow-color`}
                disabled={isUploading}
              >
                {imageUrl ? (
                  <div>
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt="Background"
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                    <Image
                      src={`/Images/solar_camera-bold.svg`}
                      width={24}
                      height={24}
                      alt="Camera Icon"
                      className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                ) : (
                  <Image
                    src={`/Images/solar_camera-bold.svg`}
                    width={24}
                    height={24}
                    alt="Camera Icon"
                    className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                )}

                {isUploading && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}

                {imageUrl ? (
                  " "
                ) : (
                  <span className="text-white text-[64px] font-medium opacity-50">
                    W
                  </span>
                )}
              </button>

              <div
                className="rounded-3xl bg-white shadow-md shadow-shadow-color p-2 flex 
                items-center justify-between w-4/5 mx-auto -mt-7 z-50"
              >
                <div className="flex">
                  <span>billa.gg/</span>
                  <input
                    type="text"
                    name="link"
                    id="link"
                    className="outline-none bg-transparent border-none w-full text-gray cursor-not-allowed"
                    placeholder="you"
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

              <p className="text-gray-500 text-sm">
                You can use a custom profile picture later.
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
              />
            </div>

            <motion.button
              type="submit"
              className="mx-auto block w-full"
              whileHover={{ scale: 1.1 }} // Scale effect on hover
              whileTap={{ scale: 0.95 }} // Slight shrink on click
              transition={{ type: "spring", stiffness: 300 }} // Smooth spring effect
            >
              <span
                className="bg-black shadow-md shadow-[#8080801A] min-h-[60px] w-full rounded-[40px] 
                   text-white gradient-border block"
              >
                Let&apos;s go
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCreation;
