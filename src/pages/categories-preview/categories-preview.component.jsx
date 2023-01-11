import { useContext } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { selectCategoriesMap, selectIsLoading } from "../../store/categories/category.selector";

const CategoriesPreview = () => {

    //const {categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);
    
    return (
        <>

            {
                isLoading ? <Spinner/>
                : 
                Object.keys(categoriesMap).map(category => {
                    const products = categoriesMap[category];
                    return <CategoryPreview key={category} title={category} products={products}/>
                })
            }
        </>
    )
}

export default CategoriesPreview;