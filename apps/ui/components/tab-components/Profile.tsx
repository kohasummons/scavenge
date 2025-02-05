"use client";

import { useState } from "react";
import Image from "next/image";
import { saveCardOrder } from "@/actions/SaveCardOrder";

// Components
import PayMeCard from "../cards/PayMeCard";
import QRCodeCard from "../cards/QRCodeCard";
import MyWalletCard from "../cards/MyWalletCard";
import FiatCard from "../cards/FiatCard";
// import SharePaymentLink from "../Modals/SharePaymentLinkModal";

// Icons
import {
  Plus,
  PencilSimple,
  SquaresFour,
  ListDashes,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

export interface Card {
  id: string;
  type: "pay-me" | "qr-code" | "my-wallet" | "fiat";
  order: number;
}

interface ProfileProps {
  initialCards: Card[];
}

const ProfileTab = ({ initialCards }: ProfileProps) => {
  const savedUsername =
    typeof window !== "undefined" ? localStorage.getItem("link") : "itxbo";

  const [isGrid, setIsGrid] = useState(false);
  const handleIsGrid = () => {
    setIsGrid(!isGrid);
  };

  const [cards, setCards] = useState(initialCards);
  const [isReordering, setIsReordering] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add("border-orange-500");
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("border-orange-500");
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    e.currentTarget.classList.remove("border-orange-500");

    const dragIndex = Number.parseInt(e.dataTransfer.getData("text/plain"));
    if (dragIndex === dropIndex) return;

    const newCards = [...cards];
    const [draggedCard] = newCards.splice(dragIndex, 1);
    newCards.splice(dropIndex, 0, draggedCard);

    const updatedCards = newCards.map((card, index) => ({
      ...card,
      order: index,
    }));

    setCards(updatedCards);
  };

  const handleSave = async () => {
    setIsSaving(true);
    const result = await saveCardOrder(cards);
    if (result.success) {
      setIsReordering(false);
    }
    setIsSaving(false);
  };

  // const [ShowShareModal, setShowShareModal] = useState(false);
  // const handleModal = () => {
  //   setShowShareModal(!ShowShareModal);
  // };

  const renderCard = (card: Card, index: number) => {
    const props = {
      draggable: isReordering,
      onDragStart: (e: React.DragEvent) => handleDragStart(e, index),
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: (e: React.DragEvent) => handleDrop(e, index),
      className: `mb-4 ${isReordering ? "cursor-move" : ""}`,
    };

    // const paymeprops = {
    //   draggable: isReordering,
    //   onDragStart: (e: React.DragEvent) => handleDragStart(e, index),
    //   onDragOver: handleDragOver,
    //   onDragLeave: handleDragLeave,
    //   onDrop: (e: React.DragEvent) => handleDrop(e, index),
    //   className: `mb-4 ${isReordering ? "cursor-move" : ""}`,
    //   handleModal: handleModal,
    // };

    switch (card.type) {
      case "pay-me":
        return (
          <PayMeCard key={card.id} {...props} isReordering={isReordering} />
        );
      case "qr-code":
        return (
          <QRCodeCard key={card.id} {...props} isReordering={isReordering} />
        );
      case "my-wallet":
        return (
          <MyWalletCard key={card.id} {...props} isReordering={isReordering} />
        );
      case "fiat":
        return (
          <FiatCard key={card.id} {...props} isReordering={isReordering} />
        );
    }
  };

  return (
    <>
      <div
        className={`${
          isGrid ? "lg:w-3/4 md:w-4/5 mx-auto md:mr-[10%]" : "md:w-[480px]"
        }  w-[92%] mx-auto md:pt-10 space-y-10  `}
      >
        {/* Header */}
        {isGrid ? (
          <div className="space-y-5 flex flex-col justify-center -ml-[5%]">
            {/* User details */}
            <div className="w-24 h-24 rounded-full bg-orange mx-auto"></div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold capitalize">
                Williams eni
              </h3>
              <p className="text-sm">
                my eyes build the plot, my hands tell the story.
              </p>
            </div>

            <div className="lg:w-1/4 mx-auto space-y-2 w-3/4 md:w-1/2">
              <div className="drag-shadow p-1">
                <button
                  type="button"
                  className="bg-white rounded-3xl py-2 px-5 flex justify-between items-center w-full -mb-[3px]"
                >
                  <span>
                    billa.gg/<span className="text-gray">{savedUsername}</span>
                  </span>

                  <Image
                    src={`/Images/material-symbols_share.svg`}
                    width={20}
                    height={20}
                    alt="Share icon"
                  />
                </button>
              </div>

              <p className="text-center w-full text-gray text-xs">
                Tab to share
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-5 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-20 md:w-16 h-16 rounded-full bg-orange"></div>
              <div>
                <h3 className="text-2xl font-semibold capitalize">
                  Williams eni
                </h3>
                <p className="text-sm">
                  my eyes build the plot, my hands tell the story.
                </p>
              </div>
            </div>

            {/* Profile CTAs */}
            <div className="drag-shadow p-1">
              <button
                type="button"
                className="bg-white rounded-3xl py-2 px-5 drag-shadow flex justify-between items-center w-full"
              >
                <p>
                  billa.gg/<span className="text-gray">{savedUsername}</span>
                </p>

                <div className="flex gap-1 items-center">
                  <p className="text-xs text-[#C4C4C4]">Tap to share</p>
                  <Image
                    src={`/Images/material-symbols_share.svg`}
                    width={20}
                    height={20}
                    alt="Share icon"
                  />
                  <Image
                    src={`/Images/mage_qr-code-fill.svg`}
                    width={20}
                    height={20}
                    alt="QR icon"
                  />
                </div>
              </button>
            </div>
          </div>
        )}

        <div
          className={`grid md:grid-cols-3 grid-cols-2 ${
            isGrid ? "md:w-1/2 mx-auto" : ""
          } gap-4`}
        >
          <div className="bg-white rounded-2xl p-5 space-y-3">
            <XLogo size={16} />
            <p className="text-gray text-xs">@itxbo</p>
          </div>

          <div className="bg-white rounded-2xl p-5 space-y-3">
            <XLogo size={16} />
            <p className="text-gray text-xs">@itxbo</p>
          </div>

          <div className="bg-white rounded-2xl p-5 space-y-3">
            <XLogo size={16} />
            <p className="text-gray text-xs">@itxbo</p>
          </div>
        </div>

        {/* Profile details */}
        <div className="space-y-5">
          {/* Header */}
          {isReordering ? (
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Reorder</h3>
              <div className="flex gap-2 items-center">
                <button
                  className="py-2 px-3 bg-[#EEEEEE] font-semibold text-sm rounded-3xl shadow-md shadow-shadow-color"
                  onClick={() => setIsReordering(false)}
                  disabled={isSaving}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-3 py-2 bg-[#000] text-white font-semibold rounded-3xl 
                 shadow-md shadow-shadow-color text-xs gradient-border"
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  {isSaving ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              {/* Preview and add wallet */}
              <div className="flex gap-2 items-center">
                <button
                  type="button"
                  className="px-3 py-2 bg-[#000] text-white font-semibold rounded-3xl  shadow-md shadow-shadow-color text-sm gradient-border"
                >
                  Preview
                </button>
                <button
                  type="button"
                  className="px-3 py-2 bg-white font-semibold rounded-3xl shadow-md shadow-shadow-color text-sm flex gap-2 items-center"
                >
                  <Plus size={15} className="hidden md:block" />
                  New Wallet
                </button>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="w-10 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer"
                  onClick={() => setIsReordering(!isReordering)}
                >
                  <PencilSimple size={20} />
                </div>

                <div className="flex gap-2 bg-[#F1F1F1] p-1 rounded-3xl">
                  <div
                    className={`w-10 h-8 rounded-full ${
                      isGrid ? "bg-white" : ""
                    }  flex items-center justify-center cursor-pointer transition-all duration-500`}
                    onClick={handleIsGrid}
                  >
                    <SquaresFour size={20} />
                  </div>

                  <div
                    className={`w-10 h-8 rounded-full ${
                      isGrid ? "" : "bg-white"
                    }  flex items-center justify-center cursor-pointer transition-all duration-500`}
                    onClick={handleIsGrid}
                  >
                    <ListDashes size={20} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cards */}
          {isGrid ? (
            <div className="grid md:grid-cols-2 gap-4">
              {cards.map((card, index) => renderCard(card, index))}
            </div>
          ) : (
            <div
              className={`space-y-4 ${
                isReordering ? "bg-[#EEEEEE] rounded-2xl p-2" : ""
              }`}
            >
              {cards.map((card, index) => renderCard(card, index))}
            </div>
          )}
        </div>
      </div>

      {/* {ShowShareModal && <SharePaymentLink handleClose={handleModal} />} */}
    </>
  );
};

export default ProfileTab;
