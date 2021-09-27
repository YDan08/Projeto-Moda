import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import modaMasc from "../../img/moda-masculina.jpg";
import modaFemi from "../../img/moda-feminina.jpg";
import { CarroselContent } from "./Carrossel.styled";

const SimpleSlider = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    centerPadding: "60px"
  };
  return (
    <CarroselContent>
      <Slider {...settings}>
        <div className="item">
          <Link to="/masculino">
            <img src={modaMasc} alt="masculino" />
          </Link>
        </div>
        <div className="item">
          <Link to="/feminino">
            <img src={modaFemi} alt="feminino" />
          </Link>
        </div>
      </Slider>
    </CarroselContent>
  );
};
export default SimpleSlider;
