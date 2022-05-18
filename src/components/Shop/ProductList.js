import React, { useEffect, useState } from 'react'

import { getProductsByCategory } from '../../api/products'
import Product from './Product'

import classes from './ProductList.module.css'

const ProductList = (props) => {
    const [products, setProducts] = useState()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProductsByCategory(props.category_id)
                setProducts(data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchProducts()
    }, [props.category_id])

    return (
        <div className={classes['products-container']}>
            <ul>
                {products &&
                    products.map((item) => (
                        <li key={item.ID}>
                            <Product item={item} />
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default ProductList
