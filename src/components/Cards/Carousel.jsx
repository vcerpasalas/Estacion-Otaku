import React from "react";

import Slider from "react-slick/lib/slider";
import { NextBtn, PreviousBtn } from "./Arrows";

import MovieCard from "./MovieCard";
import "./carousel.css";

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 6,
  // centerMode: true,
  adaptiveHeight: true,
  centerPadding: "170px",
  responsive: [
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const Carousel = ({ title, data }) => {
  return (
    <section
      className="carousel__section
    "
    >
      <div className="carousel__title-container">
        <h4 className="carousel__title">{title}</h4>
      </div>
      <div style={{ position: "relative" }} className="carousel carousel__container ">
        <Slider {...carouselProperties}>
          {data?.map((data, index) => (
            <MovieCard key={index} data={data} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
