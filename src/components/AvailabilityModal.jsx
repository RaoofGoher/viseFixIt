import { useContext, useState, useEffect } from 'react';
import { AvailabilityContext } from '../context/AvailabilityContext';
import axios from 'axios';
import ReceiptModal from './ReceiptModal';
import { useGlobalContext } from '../context/GlobalContext';

const AvailabilityModal = () => {
  const {
    subcategoriesList,
    isModalOpen,
    closeModal,
    selectedProDetails,
    setAvailabilityResponse,
    openReceiptModal,
    selectedProId,
    selectedServices, 
    setSelectedServices,
    resetSelectedServices
    
  } = useContext(AvailabilityContext);

  const { user } = useGlobalContext();

  const [loading, setLoading] = useState(false);

  // Set initial state for quantities and total prices for each subcategory

  // Update the selectedServices when subcategoriesList is available
  useEffect(() => {
    if (subcategoriesList.length > 0) {
      setSelectedServices(
        subcategoriesList.map(sub => ({
          ...sub,
          quantity: 0,
          total: 0
        }))
      );
    }
  }, [subcategoriesList]);

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
  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Construct the payload with only id and quantity
      const payload = {
        customer_id: user.data.id,
        service_provider_id: selectedProId,  // Assuming this is a static value, you can adjust it if needed
        category_id: selectedProDetails.data.service_provider.category_id,  // Assuming this is a static value
        subcategories: selectedServices
          .filter(service => service.quantity > 0) // Only include subcategories with quantity > 0
          .map(service => ({
            id: service.id,  // Send the subcategory ID
            quantity: service.quantity // Send the quantity
          }))
      };

      const response = await axios.post('https://api.thefixit4u.com/service_provider/create/service/request/', payload);
      setAvailabilityResponse(response.data)
  
    } catch (error) {
      console.error('Error submitting service request:', error);
   
    } finally {
      setLoading(false);
    }
    openReceiptModal();
    resetSelectedServices();
  };

  let providerInfo;

  if (selectedProDetails) {
      const { company_name, sp_profile, average_rating } = selectedProDetails.data.service_provider;
        
      providerInfo = (
        <div className='border border-2 border-primaryColor px-2'>
          <h2 className='text-center'><strong>Basic Order</strong></h2>
          <ul className="list-disc list-inside custom-bullet">
            <li className="">Company Name: {company_name || 'N/A'}</li>
            <li className="">Base Price: ${sp_profile?.base_price}</li>
            <li className="">Average Rating: {average_rating} / 5</li>
          </ul>
      
          <h3>Services Included:</h3>
          <ul className="list-disc list-inside custom-bullet">
            {sp_profile?.services_included?.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      );
      
  } else {
      providerInfo = <p>Loading...</p>;
  }

  

  return isModalOpen ? (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75 mt-[120px]">

      <div className="bg-white p-6 rounded-lg shadow-lg border border-1  border-secondaryColor h-[700px] overflow-y-auto">

        <h2 className="text-xl font-semibold mb-4 flex justify-between align-center"><span>Manage Order</span>  <button
            onClick={closeModal}
            className="bg-primaryColor h-[40px] text-white py-2 px-2 rounded-md hover:bg-gray-600"
          >
            X
          </button></h2>
        <div>{providerInfo}</div>
        <hr/>
        {/* Display subcategories with quantity controls and total price */}
        <div className="mt-6 mb-2">
          <h3 className="text-md font-semibold mb-2 ">Extra Services</h3>
          <div className="space-y-4">
            {selectedServices.map((sub, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="text-gray-700">
                  {sub.name} - <strong>Price:</strong> ${sub.additional_price}
                </div>
                <div className="flex items-center space-x-2">
                  {/* Minus Button */}
                  <button
                    onClick={() => handleDecrease(index)}
                    className="bg-[#f79e5c] text-white px-2 py-1 rounded-md hover:bg-red-600"
                  >
                    -
                  </button>

                  {/* Display Quantity */}
                  <span className="text-gray-700">{sub.quantity}</span>

                  {/* Plus Button */}
                  <button
                    onClick={() => handleIncrease(index)}
                    className="bg-[#f69248] text-white px-2 py-1 rounded-md hover:bg-green-600"
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
            className={`ml-4 bg-primaryColor text-white py-2 px-4 rounded-md hover:bg-green-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
    <ReceiptModal/>
    </>
  ) : null;
};

export default AvailabilityModal;
