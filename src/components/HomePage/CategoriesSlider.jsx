import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "swiper/css";

import "./CategoriesSlider.css";

export const CategoriesSlider = ({ categoriesArray }) => {

	return (
		<>
			<Swiper
				className="categories_swiper_slider"
				slidesPerView={4}
				spaceBetween={18}
			>
				{categoriesArray.map((category, index) => {
					return (
						<SwiperSlide
							key={index}
							className="categories-swiper-slide"
						>
							<Link to={category.link}>
								<img src={category.src} />
								<Typography variant="subtitle1">
									{category.title}
								</Typography>
							</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};
