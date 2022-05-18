import React, { useRef } from 'react'

import { useDispatch } from 'react-redux'
import { accountActions } from '../../store/slices/account'

import { loginCustomer } from '../../api/accounts'

const Login = () => {
    const dispatch = useDispatch()
    const enteredPhoneNumber = useRef()
    const enteredPassword = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        const login = async () => {
            const data = await loginCustomer(
                enteredPhoneNumber.current.value,
                enteredPassword.current.value
            )

            if (data.status === 'ACC_FOUND') {
                console.log(data)
                dispatch(accountActions.login(data.data.phone_number))
            } else {
                console.log('No account found')
            }
        }
        login()
    }

    const logoutHandler = (e) => {
        e.preventDefault()
        dispatch(accountActions.logout())
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="phone_number"></label>
                <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    ref={enteredPhoneNumber}
                />
                <label htmlFor="password"></label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    ref={enteredPassword}
                />
                <button type="submit">Login</button>
            </form>

            <form onSubmit={logoutHandler}>
                <button type="submit">Logout</button>
            </form>
        </div>
    )
}

export default Login
