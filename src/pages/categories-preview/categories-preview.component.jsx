import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/CategoriesContext";

const CategoriesPreview = () => {

    const {categoriesMap } = useContext(CategoriesContext);
    
    return(
        <>
            {
                Object.keys(categoriesMap).map(category => {
                    const products = categoriesMap[category];
                    return <CategoryPreview key={category} title={category} products={products}/>
                })
            }
        </>
    )
}

export default CategoriesPreview;