import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "./ImageSlider.css";

const ImageSlider = ({ imageArray }) => {
	return (
		<Swiper
			className="product-image-slider"
			speed={1000}
			autoplay={{ delay: 10000 }}
			modules={[Pagination, Autoplay]}
			spaceBetween={10}
			pagination={{
				type: "bullets",
				clickable: true,
				bulletClass: "image-slider-pagination-bullet",
				bulletActiveClass: "image-slider-pagination-bullet-active",
			}}
		>
			{imageArray.map((item, index) => {
				return (
					<SwiperSlide
						key={index}
						style={{
							backgroundImage: `url("${item}")`,
							backgroundPosition: "50% 50%",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
					></SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export { ImageSlider };
