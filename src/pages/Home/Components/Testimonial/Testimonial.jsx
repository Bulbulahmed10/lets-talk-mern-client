import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const testimonialData = [
  {
    id: "465465461454",
    desc: "Let's Talk has been an incredible language school that has helped me tremendously in improving my English speaking skills. The teachers are highly knowledgeable and patient, and the curriculum is well-structured. I have seen a significant improvement in my fluency and confidence since joining Let's Talk, and I highly recommend it to anyone looking to enhance their language skills.",

    name: "Jara Khan",
  },
  {
    id: "6414654564564",
    desc: "I enrolled in Let's Talk to learn French, and it has been an amazing experience. The instructors are native speakers and bring a wealth of cultural knowledge to the classroom. The interactive lessons and focus on practical conversation have helped me become more proficient in the language. I'm grateful for the personalized attention and support I have received at Let's Talk",

    name: "Tonmoy Haji",
  },
  {
    id: "54164456456465",
    desc: "Let's Talk has been instrumental in my journey to learn Spanish. The teachers are not only passionate about teaching, but they also create a warm and engaging learning environment. The small class sizes allow for individualized attention, and the use of multimedia resources makes the lessons dynamic and enjoyable. Let's Talk is definitely the place to go for language learning",

    name: "Donalt Karchi",
  },
  {
    id: "54164146456",
    desc: "Let's Talk has exceeded my expectations in terms of Chinese language education. The curriculum is well-structured and covers all aspects of the language, including speaking, listening, reading, and writing. The teachers at Let's Talk are highly skilled and dedicated, making the learning process enjoyable and effective. I am grateful for the progress I have made thanks to this excellent language school.",

    name: "Sakib Salina",
  },
  {
    id: "54654646546",
    desc: "I have been attending Let's Talk for German lessons, and I am amazed at the progress I have made in such a short time. The teachers are not only knowledgeable but also make the classes interactive and fun. The immersive environment and emphasis on practical application have made a significant difference in my ability to communicate effectively in German. I highly recommend Let's Talk to anyone looking to learn a new language.",

    name: "Sabita Khan",
  },
  {
    id: "654465465456",
    desc: "Let's Talk has been a game-changer for me in learning Japanese. The instructors are native speakers and have a deep understanding of the language and culture. The classes are structured to provide a balance between grammar, vocabulary, and conversation practice. The supportive environment at Let's Talk has boosted my confidence and allowed me to make rapid progress in my language skills.",

    name: "Plor Rio",
  },
  {
    id: "4464642545645",
    desc: "Let's Talk has made learning Italian an enjoyable and enriching experience. The teachers are highly knowledgeable and create a welcoming atmosphere that encourages active participation. The course materials are comprehensive and cater to different learning styles. Let's Talk has helped me develop a strong foundation in Italian and has instilled in me a passion for the language.",

    name: "Tisha Rahman",
  },
  {
    id: "45465426456465",
    desc: "As a working professional, Let's Talk has been a perfect fit for my language learning needs. The school offers flexible schedules and various course options, allowing me to balance my studies with my work commitments. The instructors at Let's Talk are accommodating and supportive, and their expertise has helped me make significant progress in learning Portuguese. I couldn't be happier with my choice to study at Let's Talk.",

    name: "Maria Ahmed",
  },
  {
    id: "56465465464",
    desc: "I have had an incredible experience learning Arabic at Let's Talk. The teachers are not only highly qualified but also patient and encouraging. The school offers a variety of resources, including multimedia materials and cultural activities, which have enriched my learning journey. Thanks to Let's Talk, I have gained confidence in my Arabic speaking skills and have developed a deeper appreciation for the language and culture.",

    name: "Rakib Hasan",
  },
];

const Testimonial = () => {
  return (
    <div className="mt-24 w-full relative">
      <img
        className="w-full h-[800px]"
        src="https://images.unsplash.com/photo-1623599008581-79de6f90594e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80"
        alt=""
      />
      <div className="absolute top-0 flex flex-col items-center justify-center mt-12 m-auto w-full">
        <div>
          <h2 className="text-center font-bold text-5xl lg:text-6xl font-Poppins text-neutral-200 capitalize">
            Our Happy Students
          </h2>
          <p className="text-center text-lg mt-6 mx-auto text-neutral-200">
            Discover what people are saying about our recipes, products, and
            cooking tips in our section. <br /> Read reviews and testimonials
            from satisfied customers and home cooks who have <br /> tried our
            recipes and products. See how our recipes have transformed.
          </p>
        </div>
        <div className="w-full mt-20">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwipe">
            {testimonialData &&
              testimonialData.map((singleData) => {
                const { id, desc, name, author_image, designation } =
                  singleData;
                return (
                  <SwiperSlide key={id} className="px-4">
                    <div className="bg-white h-[300px] p-4 rounded-sm">
                      <p className="text-justify font-OpenSans">
                        {desc.length > 300 ? desc.slice(0, 260) + "..." : desc}
                      </p>
                      <div className="flex items-center gap-2 mt-10">
                        <div>
                          <h3 className="text-lg font-semibold tracking-wider font-Raleway font-Poppins">
                            {name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
