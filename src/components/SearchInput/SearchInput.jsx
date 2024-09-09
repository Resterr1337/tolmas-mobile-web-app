import "./SearchInput.css";
import { TextField, Box, Typography, Input } from "@mui/material";
import SearchSVG from "@/assets/SearchInput/search.svg?react";

const SearchInput = () => {
	// Реализовать Всплывание с поиском

	return (
		<>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<SearchSVG></SearchSVG>
				<Input
					sx={{
						ml:"1rem",
						py:"0.75rem",
						fontFamily: "Onest , sans-serif",
						fontSize:"1rem",
						fontWeight:"400",
						color:"#1F2024",
						"&::placeholder":{
							color:"black"	
						}
					}}
					fullWidth={true}
					placeholder="Поиск товаров"
				></Input>
			</Box>
		</>
	);
};

export { SearchInput };
