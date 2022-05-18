import { createSlice } from '@reduxjs/toolkit'

const initialCartState = {
    items: [],
    totalAmount: 0,
}
// const initialCartState = {
//     items: [
//         {
//             product_id: '1',
//             name: 'Product 1',
//             price: 30,
//             quantity: 2,
//             amount: 60,
//         },
//         {
//             product_id: '2',
//             name: 'Product 2',
//             price: 60,
//             quantity: 1,
//             amount: 60,
//         },
//     ],
//     totalAmount: 120,
// }

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        clearCart(state) {
            state.items = []
            state.totalAmount = 0
            console.log('cart resetted')
        },
        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(
                (item) => item.product_id === newItem.product_id
            )

            state.totalAmount = state.totalAmount + newItem.price

            if (!existingItem) {
                state.items.push({
                    product_id: newItem.product_id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    amount: newItem.amount,
                    image: newItem.image,
                })
            } else {
                existingItem.quantity++
                existingItem.amount = existingItem.amount + newItem.price
            }
        },
        removeItem(state, action) {
            const id = action.payload
            const existingItem = state.items.find(
                (item) => item.product_id === id
            )

            state.totalAmount = state.totalAmount - existingItem.price
            state.changed = true

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(
                    (item) => item.product_id !== id
                )
            } else {
                existingItem.quantity--
                existingItem.totalPrice =
                    existingItem.totalPrice - existingItem.price
            }
        },
    },
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
