import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: [
		'Login',
		'Logout',
		'Cart',
		'Favorite',
		'Order',
		'Review',
		'Product',
	],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://localhost:7106/api',
		credentials: 'include',
		prepareHeaders: headers => {
			const accessToken = localStorage.getItem('token')
			if (accessToken) {
				headers.set('authorization', `Bearer ${accessToken}`)
				headers.set('Content-Type', 'application/json')
			}

			return headers
		},
	}),

	endpoints: () => ({}),
})

export const {} = api
