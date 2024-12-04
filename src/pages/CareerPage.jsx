import React, { useState } from "react";
import JobSection from "../components/JobSection";
import Benefits from "../components/Benefits";
import FAQs from "../components/FAQs";
import CompanyCulture from "../components/CompanyCulture";
import ScrollToTop from "../components/ScrollToTop";

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(1);
  const [jobs] = useState([
    {
      id: 1,
      title: "General Handyman",
      location: "Remote / Local",
      type: "Full-Time",
      description:
        "We are looking for a skilled General Handyman to join our team. In this role, you'll be responsible for performing a variety of repair, maintenance, and installation tasks for our clients. You should be able to handle plumbing, electrical work, carpentry, and minor home improvements. You’ll work directly with customers to understand their needs and ensure quality results. If you enjoy hands-on work and providing excellent customer service, this role is for you!",
    },
    {
      id: 2,
      title: "Plumber",
      location: "New York, USA",
      type: "Full-Time",
      description:
        "We are looking for an experienced Plumber to join our team. This role involves installing, repairing, and maintaining plumbing systems in residential and commercial properties. The ideal candidate should have experience with pipe systems, fixtures, and water systems. You will be responsible for troubleshooting plumbing issues, ensuring compliance with building codes, and providing high-quality customer service.",
    },
    {
      id: 3,
      title: "Electrician",
      location: "San Francisco, USA",
      type: "Part-Time",
      description:
        "We are seeking a reliable and skilled Electrician for part-time work. You’ll be responsible for installing, maintaining, and repairing electrical systems in homes and businesses. The ideal candidate will have knowledge of wiring, electrical panels, lighting systems, and safety protocols. Previous experience in residential electrical work is required. Excellent problem-solving skills and attention to detail are essential.",
    },
    {
      id: 4,
      title: "Carpenter",
      location: "Remote / Local",
      type: "Full-Time",
      description:
        "We are looking for a talented Carpenter to join our team. The role involves building and repairing structures such as walls, ceilings, floors, and cabinets. You'll work on residential and commercial projects and collaborate with other tradesmen to ensure projects are completed to the highest standards. Experience with various carpentry tools and techniques is required. A strong attention to detail and commitment to quality work is essential.",
    },
    {
      id: 5,
      title: "Home Improvement Specialist",
      location: "San Francisco, USA",
      type: "Part-Time",
      description:
        "We are looking for a Home Improvement Specialist to join our growing team. You’ll be responsible for performing renovations and repairs in residential properties. This includes painting, drywall work, flooring installation, and general remodeling tasks. The ideal candidate should have a range of skills and experience in home improvement projects. Strong organizational skills and the ability to work independently are a must.",
    },
    {
      id: 6,
      title: "Landscaper / Gardener",
      location: "Austin, USA",
      type: "Full-Time",
      description:
        "We are seeking a dedicated Landscaper to maintain and enhance outdoor spaces for our clients. In this role, you’ll perform tasks like lawn care, tree trimming, and gardening. You will also assist in designing and implementing outdoor landscaping features. The ideal candidate should have experience in landscaping and a passion for maintaining beautiful and functional outdoor environments. Excellent customer service and attention to detail are required.",
    },
  ]);

  return (
    <>
      <ScrollToTop />
      <div className=" text-secondaryColor-dark bg-lightColor3">
        {/* Hero Section */}
        <header className="py-16 px-4 text-center">
          <h1 className="text-5xl font-extrabold">Join Our <span className="text-primaryColor">Team</span></h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-primaryColor">
            Build a career that makes a difference. Explore our open roles below and become part of our skilled handyman team, offering exceptional services to customers.
          </p>
        </header>

        {/* Job Listings and Details Section */}
        <section className="py-16 px-6">
          <h2 className="text-4xl font-semibold mb-8 text-center">Open Positions</h2>
          <JobSection jobs={jobs} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
        </section>

        {/* Company Culture and Values Section */}
        <CompanyCulture />

        {/* Benefits and Perks Section */}
        <Benefits />

        {/* FAQs Section */}
        <FAQs />
      </div>
    </>
  );
};

export default CareerPage;
