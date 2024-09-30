
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-lightColor2 border-4 border-primaryColor p-4 rounded-lg shadow-lg m-2 h-[400px] ">
      <div className="bg-cover bg-center h-64 w-full"
        style={{ backgroundImage: `url(${testimonial.image})` }}>

      </div>
      <h3 className="mt-2 font-bold">{testimonial.name}</h3>
      <div className="flex items-center mt-1">
        {Array.from({ length: testimonial.rating }, (_, index) => (
          <span key={index} className="text-yellow-500">★</span>
        ))}
        {Array.from({ length: 5 - testimonial.rating }, (_, index) => (
          <span key={index} className="text-gray-300">★</span>
        ))}
      </div>
      <p className="mt-2 text-gray-700">{testimonial.review}</p>
    </div>
  );
};
export default TestimonialCard;