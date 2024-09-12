import { useParams } from "react-router-dom";

const ProductPage = () => {
	const { id: productId } = useParams();

	return <div className="productPage">{productId}</div>;
};

export { ProductPage };
