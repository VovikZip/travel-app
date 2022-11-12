import MainPage from '../pages/MainPage'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import TripIdPage from '../pages/TripIdPage'
import Bookings from '../pages/Bookings'

export const privateRoutes = [
    {path: '/', element: <MainPage/>},
    {path: '/trip/:id', element: <TripIdPage/>},
    {path: '/bookings', element: <Bookings/>},
]

export const publicRoutes = [
    {path: '/sign-in', element: <SignIn/>},
    {path: '/sign-up', element: <SignUp/>},
]