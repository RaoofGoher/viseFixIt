// Modal.js
import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-8 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-lg font-bold"
          onClick={closeModal}
        >
          &times;
        </button>
        <h2 className="text-2xl">Global Modal Content!</h2>
        <p>This modal is controlled by GlobalContext.</p>
      </div>
    </div>
  );
};

export default Modal;
