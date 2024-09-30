import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }) => {
    const totalStars = 5; // Total number of stars

    // Calculate the whole number of stars and check for a half star
    const wholeStars = Math.floor(rating); // Get the whole number of stars
    const hasHalfStar = rating % 1 >= 0.5; // Check if there's a half star

    return (
        <div className="flex items-center">
            {[...Array(totalStars)].map((_, index) => {
                if (index < wholeStars) {
                    return <FaStar key={index} className="text-yellow-500" />;
                } else if (index === wholeStars && hasHalfStar) {
                    return <FaStarHalfAlt key={index} className="text-yellow-500" />;
                } else {
                    return <FaRegStar key={index} className="text-yellow-500" />;
                }
            })}
            <span className="ml-2 text-gray-700">{rating.toFixed(1)} / {totalStars}</span>
        </div>
    );
};

export default StarRating;
