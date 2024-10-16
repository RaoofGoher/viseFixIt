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
  return isReceiptModalOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Receipt</h2>

        <div className="mb-4">
          <p className="text-lg font-medium">Receipt Number: {receipt.receiptNumber}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Items</h3>
          <ul className="space-y-2">
            {receipt.items.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-semibold">${receipt.totalAmount}</span>
        </div>

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
