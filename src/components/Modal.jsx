// Modal.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useGlobalContext } from '../context/GlobalContext';

const apiUrl = import.meta.env.VITE_API_URL;

const Modal = () => {
  const { isServiceModalOpen, closeServiceModal } = useGlobalContext();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isServiceModalOpen) {
      const fetchCategories = async () => {
        setLoading(true);
        setError(''); // Reset error state

        try {
          const response = await axios.get(`${apiUrl}/categories/all`);
          const data = response.data;

          if (data.success) {
            setCategories(data.data.categories);
          } else {
            setError('Failed to fetch categories');
          }
        } catch (error) {
          console.error('Error fetching categories:', error);
          setError('Error fetching categories');
        } finally {
          setLoading(false);
        }
      };

      fetchCategories();
    }
  }, [isServiceModalOpen]);

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
        <p>Here is the list of our services:</p>

        {loading ? (
          <p>Loading categories...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul className="mt-4">
            {categories.length > 0 ? (
              categories.map((category) => (
                <li key={category.id} className="my-2">
                  {category.name}
                </li>
              ))
            ) : (
              <li>No categories available.</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Modal;
