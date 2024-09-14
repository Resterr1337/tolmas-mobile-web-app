import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { nanoid } from "nanoid";

import { useLanguage, useCategories } from "../store";
import { SearchInput } from "../components/SearchInput/SearchInput.jsx";
import { Product } from "../components/Product/Product.jsx";
import { some_products } from "../data";

const SearchQueryPage = () => {
	const currentLanguage = useLanguage((state) => state.language);
	const { search_query } = useParams();
	const { filter } = useParams();

	return (
		<>
			<SearchInput
				prevValue={search_query == "null" ? "" : search_query}
			></SearchInput>
			<Box
				key={nanoid()}
				sx={{
					display: "flex",
					justifyContent: "start",
					gap: "2.5%",
					alignItems: "start",
					flexWrap: "wrap",
				}}
			>
				{some_products.map((product) => {
					if (
						product.name[currentLanguage]
							.toLowerCase()
							.includes(search_query.toLowerCase())
					) {
						return (
							<Product
								key={nanoid()}
								productInfo={product}
							></Product>
						);
					}
				})}
			</Box>
		</>
	);
};

export { SearchQueryPage };
