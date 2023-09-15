import React, { useState } from "react";
import Listing from "./Listing";
import Overlay from "./Overlay";
import Modal from "./Modal";
import { AnimatePresence } from 'framer-motion';

const Card = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
      setModalIsOpen(true);
  }

  function closeModal() {
      setModalIsOpen(false);
  }

  return (
    <>
      <Listing data={data} open={openModal} />
      <AnimatePresence>
        {modalIsOpen && (
            <Overlay close={closeModal}>
                <Modal data={data} close={closeModal} />
            </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
