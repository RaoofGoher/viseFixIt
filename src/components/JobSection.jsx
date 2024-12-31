import React, { useState } from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const JobSection = ({ jobs, selectedJob, setSelectedJob }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal on small screens
  const handleJobClick = (jobId) => {
    if (window.innerWidth < 768) {  // If on small screens
      setSelectedJob(jobId);
      setIsModalOpen(true);
    } else {
      setSelectedJob(jobId === selectedJob ? null : jobId);  // Toggle job details on click for large screens
    }
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="px-4 sm:px-12 md:px-20 flex flex-col md:flex-row">
      {/* Left Side with Job Titles */}
      <div className="flex flex-col space-y-4 w-full md:w-1/3 md:h-screen overflow-y-auto scrollbar-thumb-rounded scrollbar-thumb-secondaryColor scrollbar-track-transparent">
        {jobs.map((job) => (
          <div
            key={job.id}
            className={`cursor-pointer ${job.id === selectedJob ? "" : ""}`}
            onClick={() => handleJobClick(job.id)} // Handle click for small screens (modal) and large screens (toggle details)
          >
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <div className="flex items-center mt-2 text-primaryColor">
              <FaMapMarkerAlt className="mr-2" />
              <span>{job.location}</span>
              <span className="mx-4">•</span>
              <FaClock className="mr-2" />
              <span>{job.type}</span>
            </div>
            <hr className="my-4  " />
            <button className="w-full mt-4 py-2 text-lg font-semibold bg-primaryColor hover:bg-white rounded text-white hover:text-secondaryColor hover:border hover:border-secondaryColor  transition duration-300 ease-in-out">
              View Detail
            </button>
          </div>
        ))}
      </div>

      {/* Divider Line */}
      <div className="w-px bg-secondaryColor-dark mx-4 hidden md:block"></div>

      {/* Right Side with Job Details (for large screens) */}
      <div className="w-full md:w-2/3 md:h-screen overflow-y-auto scrollbar-thumb-rounded scrollbar-thumb-secondaryColor scrollbar-track-transparent">
        {selectedJob && !isModalOpen ? (
          jobs.filter((job) => job.id === selectedJob).map((job) => (
            <div key={job.id} className="mt-6">
              <h3 className="text-3xl font-semibold">{job.title}</h3>
              <div className="flex items-center mt-4 text-primaryColor">
                <FaMapMarkerAlt className="mr-2" />
                <span>{job.location}</span>
                <span className="mx-4">•</span>
                <FaClock className="mr-2" />
                <span>{job.type}</span>
              </div>
              <p className="mt-6 text-dark">{job.description}</p>
              <button className="w-full mt-6 py-2 text-lg font-semibold bg-primaryColor hover:bg-white text-white hover:text-secondaryColor hover:border hover:border-secondaryColor rounded">
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-dark">Click on a job to view details</div>
        )}
      </div>

      {/* Modal for Small Screens */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 sm:px-12">
          <div className="bg-white p-4 sm:p-6 md:p-8 w-full sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-lg shadow-lg overflow-y-auto relative">
            {/* Close Button (Cross Sign) */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-primaryColor focus:outline-none"
              aria-label="Close"
            >
              <span className="text-2xl font-bold">&times;</span>
            </button>
            
            {jobs.filter((job) => job.id === selectedJob).map((job) => (
              <div key={job.id}>
                <h3 className="text-2xl font-semibold">{job.title}</h3>
                <div className="flex items-center mt-2 text-primaryColor">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{job.location}</span>
                  <span className="mx-4">•</span>
                  <FaClock className="mr-2" />
                  <span>{job.type}</span>
                </div>
                <p className="mt-4 text-dark">{job.description}</p>
                <button className="w-full mt-4 py-2 text-lg font-semibold bg-primaryColor hover:bg-secondaryColor rounded text-white">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobSection;
