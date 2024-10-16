import { useContext, useState } from 'react';
import { AvailabilityContext } from '../context/AvailabilityContext';
import axios from 'axios';

const AvailabilityModal = () => {
  const {
    subcategoriesList,
    isModalOpen,
    closeModal,
  } = useContext(AvailabilityContext);

  const [loading, setLoading] = useState(false);

  // Set initial state for quantities and total prices for each subcategory
  const [selectedServices, setSelectedServices] = useState(
    subcategoriesList.map(sub => ({
      ...sub,
      quantity: 0,
      total: 0
    }))
  );

  // Handle increasing quantity
  const handleIncrease = (index) => {
    const updatedServices = [...selectedServices];
    updatedServices[index].quantity += 1;
    updatedServices[index].total = updatedServices[index].quantity * updatedServices[index].additional_price;
    setSelectedServices(updatedServices);
  };

  // Handle decreasing quantity
  const handleDecrease = (index) => {
    const updatedServices = [...selectedServices];
    if (updatedServices[index].quantity > 0) {
      updatedServices[index].quantity -= 1;
      updatedServices[index].total = updatedServices[index].quantity * updatedServices[index].additional_price;
      setSelectedServices(updatedServices);
    }
  };

  // Handle form submission
  // const handleSubmit = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
  //       success: true,
  //       data: {
  //         message: "Service request created successfully!",
  //         service_request: {
  //           id: 3,
  //           service_provider_id: 4,
  //           category_id: 2,
  //           base_price: 500.0,
  //           subcategories: selectedServices.filter(service => service.quantity > 0).map(service => ({
  //             subcategory_name: service.name,
  //             quantity: service.quantity,
  //             individual_price: service.additional_price,
  //             individual_total: service.total
  //           }))
  //         }
  //       }
  //     });

  //     console.log(response.data);
      
  //   } catch (error) {
  //     console.error('Error submitting service request:', error);
      
  //   } finally {
  //     setLoading(false);
  //   }
  // };

// Handle form submission
const handleSubmit = async () => {
  setLoading(true);
  try {
    // Construct the payload with only id and quantity
    const payload = {
      service_provider_id: 4,  // Assuming this is a static value, you can adjust it if needed
      category_id: 2,  // Assuming this is a static value
      subcategories: selectedServices
        .filter(service => service.quantity > 0) // Only include subcategories with quantity > 0
        .map(service => ({
          id: service.id,  // Send the subcategory ID
          quantity: service.quantity // Send the quantity
        }))
    };

    // Fake API call with the new payload structure
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', payload);
   console.log("baly",payload)
    console.log(response.data);
    
  } catch (error) {
    console.error('Error submitting service request:', error);
   
  } finally {
    setLoading(false);
  }
};


  return isModalOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full mt-[120px]">
        <h2 className="text-xl font-semibold mb-4">Manage Availability</h2>

        {/* Display subcategories with quantity controls and total price */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Available Subcategories</h3>
          <div className="space-y-4">
            {selectedServices.map((sub, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="text-gray-700">
                  {sub.name} - <strong>Price per unit:</strong> ${sub.additional_price}
                </div>
                <div className="flex items-center space-x-2">
                  {/* Minus Button */}
                  <button
                    onClick={() => handleDecrease(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                  >
                    -
                  </button>

                  {/* Display Quantity */}
                  <span className="text-gray-700">{sub.quantity}</span>

                  {/* Plus Button */}
                  <button
                    onClick={() => handleIncrease(index)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                  >
                    +
                  </button>

                  {/* Display Total Price */}
                  <input
                    type="text"
                    value={`$${sub.total.toFixed(2)}`}
                    readOnly
                    className="w-20 text-center bg-gray-100 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Close and Submit Buttons */}
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="ml-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`ml-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default AvailabilityModal;
