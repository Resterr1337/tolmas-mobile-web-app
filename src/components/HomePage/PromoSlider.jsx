import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

import "./PromoSlider.css";
import { Box, Typography } from "@mui/material";
import { useLanguage } from "@/store.js";

const PromoSlider = ({ promoArray }) => {
	const currentLanguage = useLanguage((state) => state.language);

	return (
		<>
			<Swiper
				speed={1500}
				autoplay={{ delay: 10000 }}
				modules={[Pagination, Autoplay]}
				spaceBetween={10}
				pagination={{ type: "bullets", clickable: true }}
				className="PromoSwiper"
			>
				{promoArray.map((promo, index) => {
					return (
						<SwiperSlide className="promo-swiper-slide" key={index}>
							{promo.link ? (
								<Link to={promo.link}>
									<Box
										sx={{
											width: "100%",
											height: "100%",
											background: `${
												promo.text
													? "linear-gradient(to right, #00000090 , transparent), "
													: ""
											} url("${promo.imageSRC}")`,
											backgroundPosition: "50% 50%",
											backgroundRepeat: "no-repeat",
											backgroundSize: "cover",
											borderRadius: "0.85rem",
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between",
											alignItems: "start",
											padding: "2px 8px",
										}}
									>
										{promo.text ? (
											<>
												<Typography
													sx={{
														width: "70%",
													}}
													color="white"
													variant="h2"
												>
													{
														promo.text[
															currentLanguage
														].topSideText
													}
												</Typography>
												<Box>
													<Typography
														color="white"
														variant="h2"
														fontSize={"1rem"}
													>
														{
															promo.text[
																currentLanguage
															].centerText
														}
													</Typography>
													<Typography
														color="white"
														variant="h1"
														fontSize={"4rem"}
													>
														{
															promo.text[
																currentLanguage
															].bottomSideText
														}
													</Typography>
												</Box>
											</>
										) : (
											<></>
										)}
									</Box>
								</Link>
							) : (
								<>
									<Box
										sx={{
											width: "100%",
											height: "100%",
											background: `${
												promo.text
													? "linear-gradient(to right, #00000090 , transparent), "
													: ""
											} url("${promo.imageSRC}")`,
											backgroundPosition: "50% 50%",
											backgroundRepeat: "no-repeat",
											backgroundSize: "cover",
											borderRadius: "0.85rem",
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between",
											alignItems: "start",
											padding: "2px 8px",
										}}
									>
										{promo.text ? (
											<>
												<Typography
													sx={{
														width: "100%",
													}}
													color="white"
													variant="h2"
												>
													{
														promo.text[
															currentLanguage
														].topSideText
													}
												</Typography>
												<Box
													sx={{
														display: "flex",
														flexDirection: "column",
														justifyContent: "end",
													}}
												>
													<Typography
														color="white"
														variant="h2"
													>
														{
															promo.text[
																currentLanguage
															].centerText
														}
													</Typography>
													<Typography
														color="white"
														variant="h1"
														fontSize={"4rem"}
													>
														{
															promo.text[
																currentLanguage
															].bottomSideText
														}
													</Typography>
												</Box>
											</>
										) : (
											<></>
										)}
									</Box>
								</>
							)}
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export { PromoSlider };
