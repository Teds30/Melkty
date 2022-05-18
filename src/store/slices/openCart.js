import {createSlice} from '@reduxjs/toolkit'

export const openCart = createSlice({
    name: 'open_cart',
    initialState: {
        isOpen: false
    },
    reducers: {
        showCart(state){
            state.isOpen = true
        },
        hideCart(state) {
            state.isOpen = false
        }
    }
})

export const openCartActions = openCart.actions
export default openCart.reducer