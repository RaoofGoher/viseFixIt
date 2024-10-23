import Slider from "react-slick";
import TestimonialCard from './TestimonialCard'
import { useMediaQuery } from 'react-responsive'
import Img3 from "../assets/p3.jpg"
import Img4 from "../assets/p4.jpg"
import Img5 from "../assets/p5.jpg"
import Img6 from "../assets/p6.jpg"
import Img7 from "../assets/p7.jpg"
import Img8 from "../assets/p8.jpg"

const TestimonialSlider = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 780px)'
  })

  const isMobile2 = useMediaQuery({
    query: '(max-width: 630px)'
  })


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
    slidesToShow: isMobile2 ? 1 : isMobile ? 2 : 3,
    slidesToScroll: 1,

  };

  return (<div className="w-[98vw] px-4">
    <div className="text-center text-6xl font-bold m-8" style={{ fontSize: 'clamp(1rem, 2vw + 1rem, 2rem)' }} >Testimonials</div>
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </Slider>
  </div>
  );
};
export default TestimonialSlider;