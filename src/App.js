import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Cart from './components/Cart/Cart'
import Shop from './components/Shop/Shop'
import Login from './components/Auth/Login'
import Checkout from './components/Checkout/Checkout'
import Layout from './components/Layout/Layout'

const App = () => {
    const account = useSelector((state) => state.account)

    const acc_id = account.account_id

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/shop" />} />
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                <Route
                    path="/shop"
                    element={
                        <Layout>
                            <Shop />
                        </Layout>
                    }
                />
                {!acc_id && <Route path="/login" element={<Login />} />}
                {acc_id && (
                    <Route path="/login" element={<Navigate to="/shop" />} />
                )}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
