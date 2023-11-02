import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { About } from '../pages/About'
import { Login } from '../pages/Login'
import { CreateAccount } from '../pages/CreateAccount'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <CreateAccount />
    }
])