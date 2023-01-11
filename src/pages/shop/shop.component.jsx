//import { useContext } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCategoriesAsync, setCategories } from "../../store/categories/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
//import CategoryPreview from "../../components/category-preview/category-preview.component";
//import { CategoriesContext } from "../../contexts/CategoriesContext";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";

const Shop = () => {

    const dispatch = useDispatch();
    //const {categoriesMap } = useContext(CategoriesContext);

    useEffect(() => {
        //don't make useEffect callback async. instead create inside and invoke
/*       const getCategoriesMap = async () => {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        console.log(categoriesArray);
        dispatch(setCategories(categoriesArray));
      }

      getCategoriesMap(); */
      

      dispatch(fetchCategoriesAsync());
    }, []);
   
    return(
        <Routes>
            <Route index  element={<CategoriesPreview />}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}

export default Shop;