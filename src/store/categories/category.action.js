import {createAction} from '../../utils/reducer.utils';
import { CATEGORIES_ACTION_TYPE } from './category.types';
import { getCategoriesAndDocuments } from '../../utils/firebase.utils';

export const setCategories = (categoriesArray) => {
   return createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
}


export const fetchCategoriesStart = () => 
   createAction(
      CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START
   );

export const fetchCategoriesSuccess = (categoriesArray) => 
   createAction(
      CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
   );


export const fetchCategoriesFailed = (error) => 
   createAction(
      CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
      error
   );



//should always call thunks Async
//thunk function
export const fetchCategoriesAsync = () => {
   return async (dispatch) => {

         dispatch(fetchCategoriesStart());
      
         try {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(fetchCategoriesSuccess(categoriesArray));
         }
         catch(error){
            dispatch(fetchCategoriesFailed(error));
         }
      }
   
}


