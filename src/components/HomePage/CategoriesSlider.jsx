import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "swiper/css";

import "./CategoriesSlider.css";

export const CategoriesSlider = ({ categoriesArray }) => {
	console.log(categoriesArray);

	return (
		<>
			<Swiper slidesPerView={3} spaceBetween={15}>
				{categoriesArray.map((category, index) => {
					return (
						<>
							<SwiperSlide className="categories-swiper-slide">
								<Link to={category.link}>
									<img src={category.src} />
									<Typography variant="subtitle1">
										{category.title}
									</Typography>
								</Link>
							</SwiperSlide>
							;
						</>
					);
				})}
				<SwiperSlide className="categories-swiper-slide"></SwiperSlide>
			</Swiper>
		</>
	);
};
