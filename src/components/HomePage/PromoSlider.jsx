import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

import "./PromoSlider.css";
import { Box, Typography } from "@mui/material";

const PromoSlider = ({ promoArray }) => {
	// BACKEND
	// promoArray={[
	// 	{
	// 		link: "/some_discount",
	// 		imageSRC: "https://s3-alpha-sig.figma.com/img/cc94/bd16/5df35d982ee5a6228569a106a1b93bdf?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A08PUaFoVah-6ga7cTNcmTwtgoXqeDjP6-U7FgruS3cAi6S-V-WOcwHr3uQmwuwYOUCrfxyZJZY6eY0nXUIgWx54d9q~~J48IRY2FpRfUJRk-8EVvcPexGyhP92I-Ln2NNqfQvWihlnxElPAMMXofY-c3ZvUCg-alKEzbutXSqkfVFEze199CB4WJx0ZNzsCEN7hmFTzBwxjdgmu2CWeGUyYkPdZISwjZw4sysu7oPywsTizmr03joVqZKHANY6IHiVtPFpkuD0m7j0FfpGTaee19gu6a7Vljkl7cdL47M-w4ICx3VBqlpveatJE82~lZEBee0kB3U~IchD8R~T2uQ__",
	// 		text: {
	// 			topSideText: "Заканчиваем неделю с большими скидками успей купить!",
	// 			centerText: "Чёрная пятница",
	// 			bottomSideText : "-50%",
	// 		}
	// 	},
	// 	{
	// 		link: false,
	// 		imageSRC: "https://s3-alpha-sig.figma.com/img/cc94/bd16/5df35d982ee5a6228569a106a1b93bdf?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A08PUaFoVah-6ga7cTNcmTwtgoXqeDjP6-U7FgruS3cAi6S-V-WOcwHr3uQmwuwYOUCrfxyZJZY6eY0nXUIgWx54d9q~~J48IRY2FpRfUJRk-8EVvcPexGyhP92I-Ln2NNqfQvWihlnxElPAMMXofY-c3ZvUCg-alKEzbutXSqkfVFEze199CB4WJx0ZNzsCEN7hmFTzBwxjdgmu2CWeGUyYkPdZISwjZw4sysu7oPywsTizmr03joVqZKHANY6IHiVtPFpkuD0m7j0FfpGTaee19gu6a7Vljkl7cdL47M-w4ICx3VBqlpveatJE82~lZEBee0kB3U~IchD8R~T2uQ__",
	// 		text: false,
	// 	},
	// 	{
	// 		link: "/some_discount",
	// 		imageSRC: "https://s3-alpha-sig.figma.com/img/cc94/bd16/5df35d982ee5a6228569a106a1b93bdf?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A08PUaFoVah-6ga7cTNcmTwtgoXqeDjP6-U7FgruS3cAi6S-V-WOcwHr3uQmwuwYOUCrfxyZJZY6eY0nXUIgWx54d9q~~J48IRY2FpRfUJRk-8EVvcPexGyhP92I-Ln2NNqfQvWihlnxElPAMMXofY-c3ZvUCg-alKEzbutXSqkfVFEze199CB4WJx0ZNzsCEN7hmFTzBwxjdgmu2CWeGUyYkPdZISwjZw4sysu7oPywsTizmr03joVqZKHANY6IHiVtPFpkuD0m7j0FfpGTaee19gu6a7Vljkl7cdL47M-w4ICx3VBqlpveatJE82~lZEBee0kB3U~IchD8R~T2uQ__",
	// 		text: {
	// 			topSideText: "Осенние скидки на парфюмерию",
	// 			centerText: "",
	// 			bottomSideText : "-25%",
	// 		},
	// 	}
	// ]}

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
											padding: "10px",
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
													{promo.text.topSideText}
												</Typography>
												<Box>
													<Typography
														color="white"
														variant="h2"
														fontSize={"1rem"}
													>
														{promo.text.centerText}
													</Typography>
													<Typography
														color="white"
														variant="h1"
														fontSize={"4rem"}
													>
														{
															promo.text
																.bottomSideText
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
											padding: "10px",
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
												{promo.text.topSideText}
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
													{promo.text.centerText}
												</Typography>
												<Typography
													color="white"
													variant="h1"
													fontSize={"4rem"}
												>
													{
														promo.text
															.bottomSideText
													}
												</Typography>
											</Box>
										</>) : <></>
									}
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
