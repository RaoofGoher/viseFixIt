import React from "react";
import image1 from "../assets/p2.jpg";
import image2 from "../assets/p4.jpg";
const PartnersUp = () => {
  // Data for the cards
  const cardsData = [
    {
      id: 1,
      image: image1,
      title: (
        <>
          Elevate Your <span className="text-secondaryColor">Customer</span>{" "}
          Experience.
        </>
      ),
      description:
        "Monetize your web traffic and stand out with Fixit Demand API. Generate revenue from referrals, provide access to thousands of top-rated pros and enjoy seamless, customized integration that fits your brand.",
    },
    {
      id: 2,
      image: image2,
      title: (
        <>
          Empower Your <span className="text-secondaryColor">Business</span>.
        </>
      ),
      description:
        "Partner with us to streamline your processes, access innovative tools, and provide outstanding service to your clients while maximizing your growth potential.",
    },
  ];

  return (
    <section className="px-12 sm:px-20 my-8">
      {/* Section Header */}
      <div className="flex justify-center items-center p-8 text-2xl sm:text-4xl font-bold">
        <h1 className="text-primaryColor">
          Let's <span className="text-secondaryColor">Partner</span> Up.
        </h1>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col  shadow-md shadow-lightColor3 rounded-2xl overflow-hidden "
          >
            {/* Card Image */}
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              className="w-full  rounded-2xl object-cover"
            />
            {/* Card Content */}
            <div className=" p-6">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-700 leading-tight mb-6">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersUp;
