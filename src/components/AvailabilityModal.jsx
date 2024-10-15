import { useContext, useState, useEffect } from 'react';
import { AvailabilityContext } from '../context/AvailabilityContext';

const AvailabilityModal = () => {
  const {
    availability,
    setAvailability,
    fetchSubcategories,
    addSubcategory,
    removeSubcategory,
    subcategoriesList,
    submitAvailability,
    isModalOpen, // Get modal open state from context
    closeModal,  // Get closeModal function from context
  } = useContext(AvailabilityContext);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [subcategoryValue, setSubcategoryValue] = useState('');

  useEffect(() => {
    if (selectedCategory) {
      fetchSubcategories(selectedCategory);
      setAvailability((prev) => ({ ...prev, categoryId: selectedCategory }));
    }
  }, [selectedCategory, fetchSubcategories, setAvailability]);

  const handleAddSubcategory = () => {
    if (subcategoryValue) {
      addSubcategory({ name: subcategoryValue, quantity: 1 });
      setSubcategoryValue('');
    }
  };

  const handleSubmit = () => {
    submitAvailability();
  };

  return isModalOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Manage Availability</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          >
            <option value="">Select a category</option>
            <option value="1">Cleaning</option>
            <option value="2">Maintenance</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Subcategory</label>
          <select
            value={subcategoryValue}
            onChange={(e) => setSubcategoryValue(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          >
            <option value="">Select a subcategory</option>
            {subcategoriesList.map((sub) => (
              <option key={sub.id} value={sub.name}>
                {sub.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddSubcategory}
            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Add Subcategory
          </button>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Subcategories</h3>
          <ul>
            {availability.subcategories.map((sub, index) => (
              <li key={index} className="flex items-center justify-between mt-2">
                <span>{sub.name}</span>
                <button
                  onClick={() => removeSubcategory(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Submit Availability
          </button>
          <button
            onClick={closeModal} // Close modal
            className="ml-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default AvailabilityModal;
