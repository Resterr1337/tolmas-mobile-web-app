import { useParams } from "react-router-dom";

const SubCategoriesPage = () => {
	const { subcategory } = useParams();
	return <div>{subcategory}</div>;
};

export { SubCategoriesPage };
