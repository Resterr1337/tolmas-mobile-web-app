import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import "swiper/css";

import "./CategoriesSlider.css";
import { useLanguage } from "../../store";

export const CategoriesSlider = ({ categoriesArray }) => {
	const currentLanguage = useLanguage((store) => store.language)

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
								<Box
									sx={{
										width: "100%",
										height: "90%",
										backgroundImage: `url("${category.src}")`,
										backgroundPosition: "50% 50%",
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
										borderRadius: "10px",
									}}
								></Box>
								<Typography variant="subtitle1">
									{category.title[currentLanguage]}
								</Typography>
							</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};
