import { Box, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SearchInput.css";
import SearchSVG from "@/assets/SearchInput/search.svg?react";

const SearchInput = ({ prevValue }) => {
	const [value, setValue] = useState(prevValue || "");
	const NavigateFunc = useNavigate();

	return (
		<>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "start",
				}}
			>
				<SearchSVG></SearchSVG>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						value
						? NavigateFunc("/search/" + value)
						: NavigateFunc("/categories");
					}}
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
						onBlur={() => {
							const inputValue = event.target.value;
							{
								inputValue
									? NavigateFunc("/search/" + inputValue)
									: NavigateFunc("/categories");
							}
						}}
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

					<input style={{display:"none"}} type="submit" value="" />
				</form>
			</Box>
		</>
	);
};

export { SearchInput };
