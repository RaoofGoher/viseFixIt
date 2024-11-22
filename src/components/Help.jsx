import React from 'react';

const Help = () => {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto text-gray-800">
      <h2 className="text-2xl font-semibold mb-4 text-primaryColor">Help</h2>
      <p className="mb-4">
        If you're in need of assistance or have any questions about our services, we're here to help! Below are some common FAQs and ways to contact us for further support:
      </p>
      <ul className="list-disc list-inside pl-6">
        <li><strong>How do I book a service?</strong> You can easily book a service by visiting our website or contacting us directly via phone or email.</li>
        <li><strong>What services do you offer?</strong> We offer a wide range of handyman services including home repairs, furniture assembly, plumbing, electrical work, and more.</li>
        <li><strong>Can I reschedule my appointment?</strong> Yes, you can reschedule your appointment by giving us at least 24 hours' notice.</li>
        <li><strong>What payment methods do you accept?</strong> We accept all major credit cards and online payment options.</li>
      </ul>
      <p className="mt-4">
        For more detailed questions, feel free to contact our support team at <strong>support@fixit4u.com</strong> or call us at +1-800-FIX-IT4U.
      </p>
    </div>
  );
};

export default Help;
