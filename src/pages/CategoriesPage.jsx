import { useParams } from "react-router-dom";

const CategoriesPage = () => {
    const {category} = useParams()

	return <div>{category}</div>;
};

export { CategoriesPage };
