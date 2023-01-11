
//memoization - process of caching the previous value of something so if the input has not changed then return the same output.
//like a pure function

/* const add = (a, b) => a + b;

add(3, 6); // 9 */


//because this function is pure we know if we call add(3, 6) it's always 9 so you shouldn't need to re run the function
//if you recieve the same input you should always get back the same output.
//memoization is that extra step that does that for you.


/* export const selectCategoriesMap = (state) => {state.categories.categoriesMap};
 */


/* export const selectCategoriesMap = (state) => {
    //check if empty
    const categoryMap = state.categories.categoriesArray.reduce((acc, category) => {

        const {title, items} = category;

        acc[title.toLowerCase()] = items;

        return acc;

    }, {})

    return categoryMap;
}; */


import {createSelector} from 'reselect';




//this gets the state object and returns categories
const selectCategoryReducer = (state) => state.categories;

export const selectIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)

//this takes the above selector checks if catgeories has been updated 
export const selectCategories = createSelector(
    [selectCategoryReducer], //input selector
    (categoriesSlice) => categoriesSlice.categories //output selector
)


export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
        categories.reduce((acc, category) => {

            const {title, items} = category;

            acc[title.toLowerCase()] = items;

            return acc;

        }, {})
);
