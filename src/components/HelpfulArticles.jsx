import React from "react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Title from "./Title";

const articles = [
  {
    title: "Real Estate Investment for Chicago Landlords: Building Your Rental Property Portfolio",
    content:
      "Investing in rental real estate can be an excellent way for landlords to generate income and build wealth over time...",
    link: "#",
  },
  {
    title: "What Are the 7 Steps to Buying a Home in Chicago?",
    content:
      "Are you hoping to add to Chicago's population of 2.66 million? If so, you must learn the 7 steps to buying a home!...",
    link: "#",
  },
  {
    title: "Real Estate Investment for Chicago Landlords: Building Your Rental Property Portfolio",
    content:
      "1. Read your lease. No, seriously read it. It won’t be the most exciting night table material but you’ll thank yourself when you do read it...",
    link: "#",
  },
  {
    title: "Real Estate Investment for Chicago Landlords: Building Your Rental Property Portfolio",
    content:
      "1. Read your lease. No, seriously read it. It won’t be the most exciting night table material but you’ll thank yourself when you do read it...",
    link: "#",
  },
];

const HelpfulArticles = () => {
  return (
    <div className="py-20 helpful_articles">
      <div className="container p-5 mx-auto">
        <Title
          title="Explore helpful articles and podcasts about property management"
          position="left"
          titleCss="font-normal lg:text-[48px]"
        />
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          autoplay
          loop
          pagination={{ clickable: true }}
          breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            }
        }}
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index} className="bg-[#F8F8F8] py-5 px-10">
              <h5 className="mb-5 text-xl font-semibold">{article.title}</h5>
              <p className="mb-5 text-[#1E1E1E]">{article.content}</p>
              <a className="flex gap-2 text-[#FFC629]" href={article.link}>
                Full article <FaLongArrowAltRight />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HelpfulArticles;
