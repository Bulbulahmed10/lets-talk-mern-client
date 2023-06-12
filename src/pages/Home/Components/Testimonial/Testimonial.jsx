import React from "react";
import Rating from "react-rating";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import SectionHeading from "../../../../shared/SectionHeading/SectionHeading";
import { Fade } from "react-awesome-reveal";
import useDarkTheme from "../../../../hooks/useDarkTheme";

const testimonialData = [
  {
    id: "454554546df4sd5",
    name: "kadrokaze Farlim",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1555168945-6c11dbe1bb67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=375&q=80",
    message:
      "Let's Talk has been an incredible language school that has helped me tremendously in improving my English speaking skills. The teachers are highly knowledgeable and patient, and the curriculum is well-structured. I have seen a significant improvement in my fluency and confidence since joining Let's Talk, and I highly recommend it to anyone looking to enhance their language skills.",
  },
  {
    id: "45fddfgh5sd5",
    name: "Tasrika Alworal",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1496203695688-3b8985780d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=695&q=80",
    message:
      "I enrolled in Let's Talk to learn French, and it has been an amazing experience. The instructors are native speakers and bring a wealth of cultural knowledge to the classroom. The interactive lessons and focus on practical conversation have helped me become more proficient in the language. I'm grateful for the personalized attention and support I have received at Let's Talk",
  },
  {
    id: "4s24254dfd5",
    name: "Jasika Salsarik",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    message:
      "Let's Talk has been instrumental in my journey to learn Spanish. The teachers are not only passionate about teaching, but they also create a warm and engaging learning environment. The small class sizes allow for individualized attention, and the use of multimedia resources makes the lessons dynamic and enjoyable. Let's Talk is definitely the place to go for language learning",
  },
  {
    id: "454sfsdf4sd5",
    name: "Nathan Dumlao",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1579042877185-396212310117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    message:
      "Let's Talk has exceeded my expectations in terms of Chinese language education. The curriculum is well-structured and covers all aspects of the language, including speaking, listening, reading, and writing. The teachers at Let's Talk are highly skilled and dedicated, making the learning process enjoyable and effective. I am grateful for the progress I have made thanks to this excellent language school.",
  },
];

const Testimonial = () => {
  const {darkTheme} = useDarkTheme()
  return (
    <div className="my-16">
      <SectionHeading heading="Our Student Saying" />
      <Marquee pauseOnHover>
        {testimonialData.map((singleTestimonial) => (
          <div
            key={singleTestimonial.id}
            className={`w-[600px] bg-[#F8F8F8] ${darkTheme && "bg-black text-white border"} p-6 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md ml-8`}>
            <div className="flex justify-between">
              <div className="flex items-center gap-3 mb-3">
                <img
                  className="w-16 h-16 object-cover rounded-full"
                  src={singleTestimonial.image}
                  alt={singleTestimonial.name}
                />
                <div>
                  <h2 className="font-semibold tracking-wide">
                    {singleTestimonial.name}
                  </h2>
                  <Rating
                    placeholderRating={singleTestimonial.rating}
                    emptySymbol={<AiFillStar className="text-xl" />}
                    placeholderSymbol={
                      <AiFillStar className="text-xl text-yellow-500" />
                    }
                    fullSymbol={
                      <AiFillStar className="text-xl text-violet-500" />
                    }
                  />
                </div>
              </div>
              <FaQuoteRight />
            </div>
            <p> {singleTestimonial.message.slice(0, 220)}...</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonial;
