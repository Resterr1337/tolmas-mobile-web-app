import { useSearchParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { nanoid } from "nanoid";

import { useLanguage, useCategories } from "../store";
import { SearchInput } from "../components/SearchInput/SearchInput.jsx";
import { Product } from "../components/Product/Product.jsx";
import { some_products } from "../data";

const SearchQueryPage = () => {
	const currentLanguage = useLanguage((state) => state.language);
	const {categories} = useCategories()
	
	const [searchParams, setSearchParams] = useSearchParams();
	const search_query = searchParams.get("query");

	
	const filteredProducts = some_products.filter((item) =>
		item.name[currentLanguage].toLowerCase().includes(search_query.toLowerCase())
	);

	return (
		<>
			<SearchInput
				prevValue={search_query == "null" ? "" : search_query}
			></SearchInput>

			<Box sx={{ display: "flex", alignItems: "end", gap: "4px" }}>
				<Typography color={"#21D399"} variant="h2">
					{filteredProducts.length}
				</Typography>
				<Typography variant="h3">{currentLanguage == "rus"? "Результата показано" : "Natija ko'rsatilgan"}</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "start",
					gap: "2.5%",
					alignItems: "start",
					flexWrap: "wrap",
				}}
			>
				{filteredProducts.map((product) => {
					return (
						<Product key={nanoid()} productInfo={product}></Product>
					);
				})}
			</Box>
		</>
	);
};

export { SearchQueryPage };
