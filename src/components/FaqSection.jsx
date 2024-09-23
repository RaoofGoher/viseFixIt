import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a variety of services including web development, mobile app development, and more.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact support via email at support@example.com or call us at (123) 456-7890.',
    },
    {
      question: 'What is your refund policy?',
      answer: 'Our refund policy allows for refunds within 30 days of purchase under certain conditions.',
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes, we offer custom solutions tailored to your specific needs. Contact us for more details.',
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center m-6">Frequently <span className='text-primaryColor'> Asked </span> Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-md">
            <button
              className="flex justify-between w-full p-4 text-left bg-lightColor1 hover:bg-primaryColor focus:outline-none"
              onClick={() => toggleOpen(index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4M8 15l4 4 4-4" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t">
                <p className="text-gray-600 bg-lightColor2">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
