import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice'
import productSlice from './slices/products.slice'
import purchasesSlice  from './slices/purchases.slice'

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    product: productSlice,
	purchases: purchasesSlice,
  }
})