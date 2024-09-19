import Slider from "react-slick";
import TestimonialCard from './TestimonialCard'
import Img1 from "../assets/p1.jpg"
import Img2 from "../assets/p2.jpg"
import Img3 from "../assets/p3.jpg"
import Img4 from "../assets/p4.jpg"
import Img5 from "../assets/p5.jpg"
import Img6 from "../assets/p6.jpg"
import Img7 from "../assets/p7.jpg"
import Img8 from "../assets/p8.jpg"
import Img9 from "../assets/p9.jpg"
import Img10 from "../assets/p10.jpg"
const TestimonialSlider = () => {
    const testimonials = [
        {
          id: 1,
          name: "John Doe",
          image: Img7,
          rating: 5,
          review: "This service was amazing! Highly recommend."
        },
        {
          id: 2,
          name: "Jane Smith",
          image: Img8,
          rating: 4,
          review: "Very satisfied with the experience."
        },
        {
          id: 1,
          name: "John Doe",
          image: Img3,
          rating: 5,
          review: "This service was amazing! Highly recommend."
        },
        {
          id: 2,
          name: "Jane Smith",
          image: Img4,
          rating: 4,
          review: "Very satisfied with the experience."
        },
        {
          id: 1,
          name: "John Doe",
          image: Img5,
          rating: 5,
          review: "This service was amazing! Highly recommend."
        },
        {
          id: 2,
          name: "Jane Smith",
          image: Img6,
          rating: 4,
          review: "Very satisfied with the experience."
        },
        // Add more testimonials as needed
      ];
      

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  
  };

  return (<>
<div className="text-center text-2xl font-bold m-8">Testimonials</div>
<Slider {...settings}>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </Slider>
    </>
  );
};
export default TestimonialSlider;