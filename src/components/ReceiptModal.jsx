import { useContext } from 'react';
import { AvailabilityContext } from '../context/AvailabilityContext'; // Or create a new context for receipt if needed

const ReceiptModal = () => {
  const { isReceiptModalOpen, closeReceiptModal, selectedProDetails, availabilityResponse } = useContext(AvailabilityContext); // Use AvailabilityContext for modal state management or create a new context

  // Sample receipt data (replace this with actual data from your context or props)
  const receipt = {
    receiptNumber: 'R123456789',
    items: [
      { name: 'Cleaning Service - 2 Rooms', quantity: 1, price: 50 },
      { name: 'Laundry Service', quantity: 2, price: 15 },
    ],
    totalAmount: 80,
  };
        console.log("baly111",selectedProDetails,availabilityResponse)

      const baseDeatails = <div>
        <p>Company Name: {selectedProDetails.data.service_provider.company_name || 'N/A'}</p>
        <p>Email: {selectedProDetails.data.service_provider.email}</p>
        <p>Base Price: ${selectedProDetails.data.service_provider.sp_profile.base_price}</p>
        <p>Service : {selectedProDetails.data.service_provider.category}</p> 
        <p>Services Included:</p>
        <ul>
          {selectedProDetails.data.service_provider.sp_profile.services_included.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      const extraServices = availabilityResponse.data.service_request.subcategories.length > 0 ? (
        <div>
          <p>Extra Services:</p>
          <ul>
            {availabilityResponse.data.service_request.subcategories.map((subcategory, index) => (
              <li key={index}>
                Name: {subcategory.subcategory_name}, Price: ${subcategory.individual_price}, 
                Quantity: {subcategory.quantity}, Sub Total: ${subcategory.individual_total}
              </li>
            ))}
          </ul>
        </div>
      ) : null;

      const proName = <p>Pro Name: {availabilityResponse.data.service_request.pro_name}</p>;
      const grandTotal = (
        <p>Grand Total: ${availabilityResponse.data.service_request.grand_total}</p>
      );
      

  return isReceiptModalOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Receipt</h2>
         {proName}
         {baseDeatails}
         {extraServices}
         {grandTotal}

        <div className="flex justify-end mt-6">
          <button
            onClick={closeReceiptModal} // Close modal
            className="ml-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ReceiptModal;
