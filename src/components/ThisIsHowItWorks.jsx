import React from "react";
import search from "../assets/search.png";
import Hire from "../assets/Hire.png";
import Chat from "../assets/Chat.png";

const ThisIsHowItWorks = () => {
  return (
    <div className="flex justify-center flex-col items-center p-8">
       
      <h1 className=" text-4xl font-bold mt-8 text-center">
          This<span className="text-primaryColor"> is</span> how it{" "}
          <span className="text-secondaryColor">Works</span>
        </h1>
    
      <div className="mt-8">
        <div className="flex flex-col justify-center space-x-0 lg:space-x-8 py-4 mx-8 lg:mx-20">
          {/* Parent 1 */}
          <div className="group flex flex-col items-center lg:flex-row mb-8 lg:mb-0">
            <img
              src={search}
              alt="search"
              className="max-w-xs md:max-w-sm lg:w-72 mb-4 lg:mb-0 opacity-50 -translate-x-20 group-hover:translate-x-0 duration-300 group-hover:opacity-100"
            />
            <div className="text-center lg:text-start pl-0 lg:pl-8 flex flex-col gap-2 opacity-50 translate-y-20 duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <h1 className="font-bold text-2xl">
                Sear<span className="text-secondaryColor">c</span>h.
              </h1>
              <span>
                Browse profiles and read verified reviews from people in your
                area.
              </span>
            </div>
          </div>

          {/* Parent 2 */}
          <div className="group flex flex-col items-center lg:flex-row-reverse mb-8 lg:mb-0">
            <img
              src={Chat}
              alt="chat"
              className="max-w-xs md:max-w-sm lg:w-72 mb-4 lg:mb-0 group-hover:opacity-100 opacity-50 translate-x-20 group-hover:translate-x-0 duration-1000"
            />
            <div className="text-center lg:text-start pl-0 lg:pl-8 flex flex-col gap-2 opacity-50 group-hover:opacity-100 -translate-x-20 group-hover:translate-x-0 duration-700">
              <h1 className="font-bold text-2xl">
                Ch<span className="text-secondaryColor">a</span>t.
              </h1>
              <span>
                Check out prices and chat through your project with pros.
              </span>
            </div>
          </div>

          {/* Parent 3 */}
          <div className="group flex flex-col items-center lg:flex-row mb-8 lg:mb-0">
            <img
              src={Hire}
              alt="hire"
              className="max-w-xs md:max-w-sm lg:w-72 mb-4 lg:mb-0 group-hover:opacity-100 opacity-50 -translate-x-20 group-hover:translate-x-0 duration-1000"
            />
            <div className="text-center lg:text-start pl-0 lg:pl-8 flex flex-col gap-2 opacity-50 group-hover:opacity-100 -translate-y-20 group-hover:translate-y-0 duration-1000">
              <h1 className="font-bold text-2xl">
                H<span className="text-secondaryColor">i</span>re.
              </h1>
              <span>
                Choose your pro and book the project right in the app.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisIsHowItWorks;
