import Image from "next/image";

// Icons
import { XLogo, Copy, InstagramLogo, X } from "@phosphor-icons/react/dist/ssr";

interface SharePaymentLinkProps {
  handleClose: () => void;
}

const SharePaymentLink = ({ handleClose }: SharePaymentLinkProps) => {
  return (
    <div
      className="absolute inset-0 backdrop-blur-sm lg:backdrop-blur-0 bg-gray-200/60 flex items-center overflow-hidden justify-center 
    lg:justify-end z-50"
    >
      <div className="bg-white p-4 rounded-2xl shadow-lg min-w-[302px] min-h-[200px] text-center space-y-5 relative">
        <X
          size={25}
          className="absolute top-4 right-4 cursor-pointer"
          onClick={handleClose}
        />
        <h2 className="font-semibold">Share</h2>
        <Image
          src={`/Images/image_9.svg`}
          width={64}
          height={64}
          alt="QR Code"
          className="mx-auto"
        />

        <div className="flex items-center justify-center">
          <button
            type="button"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg shadow-shadow-color"
          >
            <XLogo size={25} className="text-gray-primary" />
          </button>
          <button
            type="button"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg shadow-shadow-color"
          >
            <InstagramLogo size={25} className="text-gray-primary" />
          </button>
          <button
            type="button"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg shadow-shadow-color"
          >
            <Copy size={25} className="text-gray-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharePaymentLink;
