import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-primaryColor">
        Privacy Policy
      </h1>
      <p className="mb-4">
        At FixIt 4U, your privacy is our top priority. This Privacy Policy
        outlines how we collect, use, disclose, and protect your personal
        information when you engage with our handyman services. By using our
        services, you agree to the collection and use of information in
        accordance with this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primaryColor">
        Information We Collect
      </h2>
      <p className="mb-4">
        We may collect various types of information from you, including but not
        limited to:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li>
          <strong>Contact Information:</strong>
          <ul className="list-inside pl-8">
            <li>
              <strong className="text-lightColor2">Name:</strong> To identify you during service requests.
            </li>
            <li>
              <strong className="text-lightColor2">Phone Number:</strong> For communication regarding your
              service appointments.
            </li>
            <li>
              <strong className="text-lightColor2">Email Address:</strong> To send confirmations, updates,
              and promotional materials (if you opt-in).
            </li>
          </ul>
        </li>
        <li>
          <strong>Service Location:</strong>
          <ul className="list-inside pl-8">
            <li>
              <strong className="text-lightColor2">Address Details:</strong> The physical address where
              services will be provided, necessary for scheduling and executing
              the requested services.
            </li>
          </ul>
        </li>
        <li>
          <strong>Payment Information:</strong>
          <ul className="list-inside pl-8">
            <li>
              <strong className="text-lightColor2">Billing Information:</strong> Credit card details or other
              payment methods, which are processed securely through third-party
              payment processors to ensure your financial data is protected.
            </li>
          </ul>
        </li>
        <li>
          <strong>Feedback and Reviews:</strong>
          <ul className="list-inside pl-8">
            <li>
              <strong className="text-lightColor2">Customer Feedback:</strong> Information you provide in
              reviews or surveys to help us enhance our services and customer
              experience.
            </li>
          </ul>
        </li>
        <li>
          <strong>Usage Data:</strong>
          <ul className="list-inside pl-8">
            <li>
              <strong className="text-lightColor2">Technical Information:</strong> Data about how you use our
              website or app, including IP addresses, browser types, and access
              times, which help us improve our online services.
            </li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primaryColor">
        How We Use Your Information
      </h2>
      <p className="mb-4">
        The information we collect serves several purposes, including:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li>
          <strong >Service Provision:</strong> To deliver and manage handyman
          services effectively and efficiently.
        </li>
        <li>
          <strong>Communication:</strong> To communicate with you regarding your
          service requests, including confirmations, reminders, and updates.
        </li>
        <li>
          <strong>Customer Experience Improvement:</strong> To analyze feedback
          and usage data to enhance our services and tailor them to meet
          customer needs better.
        </li>
        <li>
          <strong>Promotional Communications:</strong> To send you promotional
          offers, newsletters, and updates about our services, provided that you
          have opted in to receive such communications. You can unsubscribe from
          these communications at any time.
        </li>
        <li>
          <strong>Legal Compliance:</strong> To comply with applicable laws,
          regulations, or legal requests.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primaryColor">
        Data Security
      </h2>
      <p className="mb-4">
        We prioritize the security of your personal information. FixIt 4U
        employs a variety of security measures to protect your data, including:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li>
          <strong>Encryption:</strong> We use industry-standard encryption
          protocols to safeguard your sensitive information during transmission.
        </li>
        <li>
          <strong>Secure Servers:</strong> Our servers are protected by
          firewalls and other security technologies to prevent unauthorized
          access.
        </li>
        <li>
          <strong>Access Controls:</strong> Only authorized personnel have
          access to your personal information, and they are trained to handle
          your data securely.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primaryColor">
        Your Rights
      </h2>
      <p className="mb-4">
        As a user of our services, you have certain rights regarding your
        personal information:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li>
          <strong>Access:</strong> You have the right to request a copy of the
          personal information we hold about you.
        </li>
        <li>
          <strong>Correction:</strong> You can request that we correct any
          inaccuracies in your personal information.
        </li>
        <li>
          <strong>Deletion:</strong> You may request the deletion of your
          personal information, subject to our legal obligations to retain
          certain data.
        </li>
        <li>
          <strong>Opt-Out:</strong> You can opt out of receiving promotional
          communications at any time by following the unsubscribe instructions
          in the emails we send or by contacting us directly.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primaryColor">
        Contact Information
      </h2>
      <p className="mb-4">
        To exercise any of these rights or for any questions regarding your
        personal information, please contact us at:
        <br />
        <strong>Email:</strong>{" "}
        <a href="#" className="text-blue-600 ">
          [Insert Email Address]
        </a>
        <br />
        <strong >Phone:</strong > <span className="text-blue-600"> [Insert Phone Number]</span>
        <br />
        <strong >Address:</strong> <span  className="text-blue-600"> [Insert Physical
        Address]</span>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primaryColor">
        Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page and
        updating the effective date at the top. We encourage you to review this
        Privacy Policy periodically for any changes. Your continued use of our
        services after any modifications to the Privacy Policy will constitute
        your acknowledgment of the modifications and your consent to abide by
        and be bound by the modified policy.
      </p>

      <p className="mb-4">
        At FixIt 4U, we are committed to protecting your privacy and ensuring
        the security of your personal information. Thank you for trusting us
        with your handyman service needs. If you have any questions or concerns
        regarding this Privacy Policy, please do not hesitate to reach out to
        us.
      </p>

      <p className="text-sm text-lightColor2 mt-6">
        Last updated on November 21, 2024.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
