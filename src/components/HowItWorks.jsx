import React from 'react'
import { FaSearch, FaSignInAlt, FaThumbsUp } from 'react-icons/fa';

function HowItWorks() {
    const steps = [
        {
            title: "1: Choose Service and Zip Code",
            description: "Browse our services, select the one you need, and enter your zip code.",
            icon: <FaSearch />, // Replace with an icon or image if needed
        },
        {
            title: "2: Sign In or Create an Account",
            description: "Quickly sign in or sign up to connect with top-rated pros and manage your requests.",
            icon: <FaSignInAlt/>, // Replace with an icon or image if needed
        },
        {
            title: "3: Enjoy Your Service",
            description: "Sit back while our professional completes the job to your satisfaction!",
            icon: <FaThumbsUp/>, // Replace with an icon or image if needed
        }
    ];


  return (
    <div>
       <section className="py-12 bg-primaryColor mb-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                           <div className="text-4xl mb-4 text-secondaryColor flex justify-center items-center">{step.icon}</div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default HowItWorks
