import React, { useEffect, useState } from 'react'
import { getCategories } from '../../api/products'

import classes from './CategoryProduct.module.css'
import ProductList from './ProductList'

const CategoryProduct = () => {
    const [categories, setCategories] = useState()
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories()
                setCategories(data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchCategories()
    }, [])

    return (
        <ul>
            {categories &&
                categories.map((category) => (
                    <li key={category.id}>
                        <div className={classes.collections}>
                            <div className={classes.collection}>
                                <h1>{category.category_name}</h1>
                                <p className="caption gray">
                                    {category.category_description}
                                </p>
                                <button className={classes.slide}>
                                    SHOP NOW
                                </button>
                            </div>
                            <ProductList category_id={category.id} />
                        </div>
                    </li>
                ))}
        </ul>
    )
}

export default CategoryProduct
