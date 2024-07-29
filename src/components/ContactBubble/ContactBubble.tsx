import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import { ContactForm } from "@/components/ContactForm/ContactForm";

export const ContactBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal
        title={"Contact Me"}
        open={isOpen}
        onClose={handleClose}
        mobileFullscreen={true}
      >
        <ContactForm onClose={handleClose} />
      </Modal>
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="bg-slate-900 rounded-full h-16 w-16 fixed z-50 text-gray-200 border border-slate-700 bottom-24 right-8 md:right-16 grid place-items-center drop-shadow-glow cursor-pointer "
        >
          <ChatBubbleLeftEllipsisIcon className="h-8 w-8 mx-auto transition-transform hover:scale-110 duration-300" />
        </button>
      )}
    </>
  );
};
