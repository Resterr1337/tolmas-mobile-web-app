import { Box, Input, Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";

import "./SearchInput.css";
import SearchSVG from "@/assets/SearchInput/search.svg?react";
import { useCategories, useLanguage } from "../../store";

const SearchInput = ({ prevValue }) => {
	const currentLanguage = useLanguage((state) => state.language);
	const [value, setValue] = useState(prevValue || "");
	const NavigateFunc = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();

	let subCategorisArr_query = searchParams.getAll("s");
	const categoryName = searchParams.get("c");
	const { categories } = useCategories();
	const categoryArray = categories.find((item) =>
		item.link.includes(categoryName)
	);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (value) {
			NavigateFunc("/search/");
			setSearchParams({ query: value });
		} else {
			NavigateFunc("/categories");
		}
	};

	const handleSubCategoryClick = (item, event) => {
		event.stopPropagation();
		if (
			event.currentTarget.classList.value.includes("subcategory-active")
		) {
			setSearchParams({
				query: value,
				c: categoryName,
				s: subCategorisArr_query.filter((s)=> !(s.includes(item.value)))
			});
		} else {
			setSearchParams({
				query: value,
				c: categoryName,
				s: [...searchParams.getAll("s"), item.value],
			});
		}
	};

	return (
		<>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "start",
					border: "solid black #",
				}}
			>
				<SearchSVG></SearchSVG>
				<form
					autoComplete="false"
					onSubmit={handleSubmit}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "start",
					}}
				>
					<Input
						onInput={() => {
							setValue(event.target.value);
						}}
						onBlur={handleSubmit}
						sx={{
							ml: "1rem",
							py: "0.75rem",
							fontFamily: "Onest , sans-serif",
							fontSize: "1rem",
							fontWeight: "400",
							color: "#1F2024",
							"&::placeholder": {
								color: "black",
							},
							"&&&:before": {
								borderBottom: "none",
							},
							"&&:after": {
								borderBottom: "none",
							},
						}}
						fullWidth={true}
						placeholder="Поиск товаров"
						value={value}
					></Input>

					<input style={{ display: "none" }} type="submit" value="" />
				</form>
			</Box>

			{categoryArray ? (
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={5}
					className="subcategory-swiper"
				>
					{categoryArray.subCategories.map((item) => {
						return (
							// "subcategory subcategory-active"
							<SwiperSlide
								key={nanoid()}
								onClick={(event) =>
									handleSubCategoryClick(item, event)
								}
								className={
									searchParams
										.getAll("s")
										.includes(item.value)
										? "subcategory subcategory-active"
										: "subcategory"
								}
							>
								<Typography variant="h4">
									{item.title[currentLanguage]}
								</Typography>
							</SwiperSlide>
						);
					})}
				</Swiper>
			) : null}
		</>
	);
};

export { SearchInput };
