// Modal.js
import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const Modal = () => {
  const { isServiceModalOpen, closeServiceModal } = useGlobalContext();

  if (!isServiceModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-primaryColor p-8 rounded-lg shadow-lg relative w-[60vw] h-[40vw] text-white">
        <button
          className="absolute top-2 right-2 text-lg font-bold"
          onClick={closeServiceModal}
        >
          &times;
        </button>
        <h2 className="text-2xl">Services</h2>
        <p>here is the list of our services.</p>
      </div>
    </div>
  );
};

export default Modal;
