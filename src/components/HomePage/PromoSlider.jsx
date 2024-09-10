import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./PromoSlider.css";

const PromoSlider = () => {
	// BACKEND 
	// {
	// 	[
	// 		{
	// 			imgPath:"" [str:src],
	// 			location:"" [str],
	// 		},
	// 		{
	// 			imgPath:"" [str:src],
	// 			location:"" [str:url],
	// 		},
	// 		{
	// 			imgPath:"" [str:src],
	// 			location:"" [str:url],
	// 		},
	// 		{
	// 			imgPath:"" [str:src],
	// 			location:"" [str:url],
	// 		},
	// 	],
	// }

	// const imageArray = props.imageArray
	const imageArray = ["1", "2", "3"];

	return (
		<>
			<Swiper
				speed={1500}
				autoplay={{ delay: 10000 }}
				modules={[Pagination, Autoplay]}
				spaceBetween={30}
				pagination={{ type: "bullets", clickable: true }}
				className="PromoSwiper"
			>
				{imageArray.map((item, index) => (
					// <SwiperSlide key={index}><img src={item.src}/></SwiperSlide>
					<SwiperSlide className="promo-swiper-slide" key={index}>{item}</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export { PromoSlider };
