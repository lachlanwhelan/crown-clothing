import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.utils";



export const CategoriesContext = createContext({
    categoriesMap: {}
})


const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = {categoriesMap, setCategoriesMap};

    useEffect(() => {
        //don't make useEffect callback async. instead create inside and invoke
      const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments();
        setCategoriesMap(categoryMap);
      }

      getCategoriesMap();
    }, []);


    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}


export default CategoriesProvider;