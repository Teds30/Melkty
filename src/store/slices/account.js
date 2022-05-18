import { createSlice } from '@reduxjs/toolkit'

const initial_id = localStorage.getItem('account_id')

const initialAccountState = {
    account_id: initial_id,
}
const accountSlice = createSlice({
    name: 'account',
    initialState: initialAccountState,
    reducers: {
        login(state, action) {
            const acc_id = action.payload

            state.account_id = acc_id
            localStorage.setItem('account_id', acc_id)
        },
        logout(state) {
            state.account_id = ''
            localStorage.removeItem('account_id')
        },
    },
})

export const accountActions = accountSlice.actions
export default accountSlice.reducer
