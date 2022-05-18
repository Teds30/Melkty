export const getProducts = async () => {
    const response = await fetch('http://localhost:4000/api/products')

    const data = await response.json()

    if (!response.ok) {
        throw new Error('There was an error fetching data!')
    }

    return data
}

export const getCategories = async () => {
    const response = await fetch('http://localhost:4000/api/categories')

    const data = await response.json()

    if (!response.ok) {
        throw new Error('There was an error fetching data!')
    }

    return data
}

export const getProductsByCategory = async (id) => {
    const response = await fetch(`http://localhost:4000/api/category-products/${id}`)

    const data = await response.json()

    if (!response.ok) {
        throw new Error('There was an error fetching data!')
    }

    return data
}
