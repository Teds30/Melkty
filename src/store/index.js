import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './slices/cart'
import accountReducer from './slices/account'
import openCartReducer from './slices/openCart'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        account: accountReducer,
        openCart: openCartReducer
    }
})

export default store