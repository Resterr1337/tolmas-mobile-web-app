import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./PromoSlider.css";

const PromoSlider = () => {
	// const imageArray = props.imageArray
	const imageArray = ["1", "2", "3"];

	return (
		<>
			<Swiper
				modules={[Pagination]}
				pagination={{type:"bullets", clickable:true}}
				className="PromoSwiper"
			>
				{imageArray.map((item, index) => (
					<SwiperSlide key={index}>{item}</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export { PromoSlider };
