
export const newOrder = async (enteredOrder) => {
    const { customer_id, shipping_fee, total_amount } = enteredOrder

    const response = await fetch('http://localhost:4000/api/orders', {
        method: 'POST',
        body: JSON.stringify({
            customer_id,
            shipping_fee,
            total_amount,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error('There was an error inserting new data!')
    }

    return data
}

export const newOrderItem = async (order_id, orderitem) => {
    const { product_id, name, price, quantity, amount } = orderitem

    const response = await fetch('http://localhost:4000/api/orderitems', {
        method: 'POST',
        body: JSON.stringify({
            order_id,
            product_id,
            name,
            price,
            quantity,
            amount,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error('There was an error inserting new order item data!')
    }

    return data
}