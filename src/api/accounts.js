export const loginCustomer = async (phone_number, password) => {
    const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            phone_number,
            password,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data = await response.json()
    

    if (!response.ok) {
        throw new Error('There was an error logging in!')
    }

    return data
}
