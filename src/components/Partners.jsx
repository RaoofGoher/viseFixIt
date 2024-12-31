import React from "react";
import partner1 from "../assets/p2.jpg";
import partner2 from "../assets/p3.jpg";
import partner3 from "../assets/p4.jpg";

const Partners = () => {
  // Dummy partner data
  const partners = [
    {
      id: 1,
      name: "Aleena Gongelus",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      image: partner1,
    },
    {
      id: 2,
      name: "Ahmed Builders",
      description:
        "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.",
      image: partner2,
    },
    {
      id: 3,
      name: "Lisa Smith",
      description:
        "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
      image: partner3,
    },
  ];

  return (
    <section className=" mx-10 sm:mx-20 my-8">
      {/* Section Header */}
      <div className="text-start mb-6">
        <h1 className="text-3xl font-bold text-primaryColor">
          Partner with <span className="text-secondaryColor">FixIt 4U</span>
        </h1>
      </div>

      {/* Description Section */}
      <div className="mb-8 flex">
        <p className="text-justify text-base sm:text-lg leading-none text-dark">
          We partner with all kinds of businesses that serve homeowners and
          professionals. Whether you want to boost your customer’s experience,
          earn more from your existing audience, or explore fresh ways to
          collaborate, there are plenty of opportunities to team up with us.
        </p>
        <p className="w-full hidden md:block"></p>
      </div>

      {/* Partners Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-white  rounded-2xl overflow-hidden"
          >
            <img
              src={partner.image}
              alt={partner.name}
              className="w-full h-50 object-cover rounded-2xl"
            />
            <div className="p-4">
              <h2 className="text-secondaryColor text-lg font-bold mb-2">
                {partner.name}
              </h2>
              <p className=" text-sm leading-relaxed">
                {partner.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
