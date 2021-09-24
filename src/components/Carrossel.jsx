import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";
import modaMasc from "../img/moda-masculina.jpg"
import modaFemi from "../img/moda-feminina.jpg"


const DivCarrosel = styled.div`
	width: 90vw;
	margin: 90px auto 0;
	padding: 30px 0px;
		.item{
			position: unset;
			img{
				margin: 0 auto;
				width: 1100px;
			}
		}
	`


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
		<DivCarrosel>
			<Slider {...settings}>
				<div className="item">
					<Link to="/masculino"><img src={modaMasc} alt="masculino" /></Link>
				</div>
				<div className="item">
					<Link to="/feminino"><img src={modaFemi} alt="feminino" /></Link>
				</div>

			</Slider>
		</DivCarrosel>
	);
}
export default SimpleSlider