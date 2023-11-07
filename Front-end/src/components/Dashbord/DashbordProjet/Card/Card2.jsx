import React, { useState } from "react";
import Listinginvest from "./Listing2";
import Overlay from "./Overlay";
import Modal from "./Modal";
import { AnimatePresence } from 'framer-motion';

const Cardinvest = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
      setModalIsOpen(true);
  }

  function closeModal() {
      setModalIsOpen(false);
  }

  return (
    <>
      <Listinginvest data={data} open={openModal} />
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

export default Cardinvest;
