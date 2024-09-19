import { Box, Typography } from "@mui/material";
import { nanoid } from "nanoid";

import { Product } from "@/components/Product/Product.jsx";
import { useLanguage, useWishList } from "../store";
import { some_products } from "../data";

const MyWishesPage = () => {
	const { wishList } = useWishList();
	const currentLanguage = useLanguage((state) => {
		state.language;
	});

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "start",
				gap: "2.5%",
				alignItems: "start",
				flexWrap: "wrap",
			}}
		>
			{wishList.length == 0 ? (
				<Typography variant="h4">
					{currentLanguage == "rus"
						? "У вас нету ничего в списке желаний"
						: "Istaklar ro'yxatida sizda hech narsa yo'q"}
				</Typography>
			) : (
				some_products.map((product) => {
					if (wishList.includes(product.id))
						return (
							<Product
								key={nanoid()}
								productInfo={product}
							></Product>
						);
				})
			)}
		</Box>
	);
};

export { MyWishesPage };
