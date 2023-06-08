import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import sliderImg1 from "../../../../assets/sliderImage/slider1.jpg";
import sliderImg2 from "../../../../assets/sliderImage/slider2.jpg";
import sliderImg3 from "../../../../assets/sliderImage/slider3.jpg";
import sliderImg4 from "../../../../assets/sliderImage/slider4.jpg";

const HomeBanner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="mt-32 -z-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper">
        <SwiperSlide className="-z-0">
          <div className="relative">
            <div className="absolute w-full flex flex-col h-full  justify-center ml-36 -z-0">
              <p className="font-Poppins text-3xl text-white w-[500px]">
                Putting Children First. Preparing Children For Success In Life
              </p>
              <div className="flex gap-2 mt-4">
                <p className="bg-[#FE5D59] border-transparent border-2 outline-white text-white px-4 py-2 uppercase text-sm font-semibold cursor-pointer rounded-2xl font-OpenSans">
                  Sign up now
                </p>
                <p className="bg-transparent border-2 outline-white text-white px-4 py-2 uppercase text-sm font-semibold cursor-pointer rounded-2xl font-OpenSans">
                  Learn More
                </p>
              </div>
            </div>
            <img src={sliderImg3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute w-full flex flex-col h-full  justify-center ml-40">
              <p className="font-Poppins text-3xl text-white w-[500px]">
                Teaching Turning Todays Learners Into Tomorrows Leaders
              </p>
              <div className="flex gap-2 mt-4">
                <p className="bg-[#FE5D59] border-transparent border-2 outline-white text-white px-4 py-2 uppercase text-sm font-semibold cursor-pointer rounded-2xl font-OpenSans">
                  Sign up now
                </p>
                <p className="bg-transparent border-2 outline-white text-white px-4 py-2 uppercase text-sm font-semibold cursor-pointer rounded-2xl font-OpenSans">
                  Learn More
                </p>
              </div>
            </div>
            <img src={sliderImg1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute w-full flex flex-col h-full  justify-center ml-40">
              <p className="font-Poppins text-3xl text-white w-[500px]">
                Every student matters, every moment counts.
              </p>
              <div className="flex gap-2 mt-4">
                <p className="bg-[#FE5D59] border-transparent border-2 outline-white text-white px-4 py-2 uppercase text-sm font-semibold cursor-pointer rounded-2xl font-OpenSans">
                  Sign up now
                </p>
                <p className="bg-transparent border-2 outline-white text-white px-4 py-2 uppercase text-sm font-semibold cursor-pointer rounded-2xl font-OpenSans">
                  Learn More
                </p>
              </div>
            </div>
            <img src={sliderImg2} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <div className="absolute w-full flex flex-col h-full  justify-center ml-40">
              <p className="font-Poppins text-3xl text-white w-[500px]">
                To have another language is to possess a second soul.
              </p>
              <div className="flex gap-2 mt-4">
                <p className="bg-[#FE5D59] border-transparent border-2 outline-white text-white px-4 py-2 uppercase text-sm font-semibold cursor-pointer rounded-2xl font-OpenSans">
                  Sign up now
                </p>
                <p className="bg-transparent border-2 outline-white text-white px-4 py-2 uppercase text-sm font-semibold cursor-pointer rounded-2xl font-OpenSans">
                  Learn More
                </p>
              </div>
            </div>
            <img src={sliderImg4} alt="" />
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
