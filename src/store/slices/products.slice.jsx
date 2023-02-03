import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            const product = action.payload;
            return product;
        }

    }
})

export const getProductsThunk = () => dispatch => {
    dispatch(setIsLoading(true))
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
        .then(res => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterProductsCategoryThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${id}`)
        .then(res => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterProductNameThunk = (productSearch) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=`+productSearch)
        .then(res => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;