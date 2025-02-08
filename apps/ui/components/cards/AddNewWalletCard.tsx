// Library imports
import { useState, type ChangeEvent } from "react";

// Components
import FormInput from "../form/FormInput";

// Icons
import { X, Bank, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import {
  WalletMetamask,
  WalletCoinbase,
  WalletPhantom,
} from "@web3icons/react";

interface AddNewWalletCardProps {
  handleShowNewWalletCard: () => void;
}

interface FormData {
  acct_num: string;
  bank: string;
}

const AddNewWalletCard = ({
  handleShowNewWalletCard,
}: AddNewWalletCardProps) => {
  const [showBankDetailsForm, setShowBankDetailsForm] =
    useState<boolean>(false);
  const handleBankDetailsForm = () => {
    setShowBankDetailsForm(!showBankDetailsForm);
  };

  const [formData, setFormData] = useState<FormData>({
    acct_num: "",
    bank: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
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
        handleBankDetailsForm();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      //   setIsLoading(false)
    }
  };
  return (
    <div className="bg-white rounded-2xl p-5 space-y-7">
      <p>{error}</p>
      {/* Header */}
      <div className="flex justify-between items-center">
        {showBankDetailsForm ? (
          <>
            <div className="flex gap-2 items-center">
              <div
                className="w-8 h-8 rounded-full bg-white shadow-xl shadow-shadow-color flex items-center 
                        justify-center border border-[#8080801A] cursor-pointer"
                onClick={handleBankDetailsForm}
              >
                <ArrowLeft size={16} className="text-input-gray" />
              </div>

              <h3 className="font-semibold">Fiat</h3>
            </div>

            {/* Save and cancel button */}
            <div className="flex gap-2 items-center">
              <button
                className="px-3 py-2 bg-[#000] text-white font-semibold rounded-3xl
              shadow-md shadow-shadow-color text-sm gradient-border"
                onClick={handleSubmit}
              >
                {isLoading ? "Saving..." : "Save"}
              </button>

              <div
                className="w-8 h-8 rounded-full bg-white shadow-xl shadow-shadow-color flex items-center 
                        justify-center border border-[#8080801A] cursor-pointer"
                onClick={handleShowNewWalletCard}
              >
                <X size={16} className="text-input-gray" />
              </div>
            </div>
          </>
        ) : (
          <>
            <h3 className="font-semibold">New Wallet</h3>

            {/* Save and cancel button */}
            <div className="flex gap-2 items-center">
              <button
                className="px-3 py-2 bg-[#000] text-white font-semibold rounded-3xl
              shadow-md shadow-shadow-color text-sm gradient-border"
                onClick={handleShowNewWalletCard}
              >
                Save
              </button>

              <div
                className="w-8 h-8 rounded-full bg-white shadow-xl shadow-shadow-color flex items-center 
                        justify-center border border-[#8080801A] cursor-pointer"
                onClick={handleShowNewWalletCard}
              >
                <X size={16} className="text-input-gray" />
              </div>
            </div>
          </>
        )}
      </div>

      {showBankDetailsForm ? (
        <form className="space-y-5">
          <FormInput
            label="Account Number"
            type="number"
            name="acct_num"
            placeholder="Your Account Number"
            onChange={handleChange}
            value={formData.acct_num}
          />

          <FormInput
            label="Bank"
            type="text"
            name="bank"
            placeholder="Seleck Bank"
            onChange={handleChange}
            value={formData.bank}
          />
          {/* The paragraph hold the user's name */}
          <p>Eni Williams</p>
        </form>
      ) : (
        <div className="space-y-3">
          {/* Web 3 */}
          <div className="space-y-2">
            <h4 className="font-medium">Web3</h4>
            <button
              type="button"
              className="bg-white rounded-lg flex gap-1 items-center w-full p-3 shadow-md shadow-shadow-color border-[0.5px]
                     border-shadow-color border-opacity-10"
            >
              <WalletMetamask variant="branded" size="24" />
              <span>Metamask</span>
            </button>

            <button
              type="button"
              className="bg-white rounded-lg flex gap-1 items-center w-full p-3 shadow-md shadow-shadow-color border-[0.5px]
                     border-shadow-color border-opacity-10 
            opacity-50 cursor-not-allowed"
              disabled
            >
              <WalletCoinbase variant="branded" size="24" />
              <span>Coming soon</span>
            </button>

            <button
              type="button"
              className="bg-white rounded-lg flex gap-1 items-center w-full p-3 shadow-md shadow-shadow-color border-[0.5px]
                     border-shadow-color border-opacity-10 
            opacity-50 cursor-not-allowed"
              disabled
            >
              <WalletPhantom variant="branded" size="24" />
              <span>Coming soon</span>
            </button>
          </div>

          {/* Fiat */}
          <div className="space-y-2">
            <h4 className="font-medium">Fiat</h4>

            <button
              type="button"
              className="bg-white rounded-lg flex gap-1 items-center w-full p-3 shadow-md shadow-shadow-color border-[0.5px]
            border-shadow-color border-opacity-10 cursor-pointer"
              onClick={handleBankDetailsForm}
            >
              <Bank size={24} />
              <span>Add Bank Account Details</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewWalletCard;
