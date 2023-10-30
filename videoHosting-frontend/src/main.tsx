import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/auth/login/Login'
import Registration from './components/auth/registration/Registration'
import Layout from './components/layout/Layout'
import MainPage from './components/mainPage/mainPage'
import './index.css'
import { store } from './services/store'
const router = createBrowserRouter([
	{
		element: <Layout />,
		//errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/registration',
		element: <Registration />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		{/* <ChakraProvider> */}
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
		{/* </ChakraProvider> */}
	</React.StrictMode>
)
