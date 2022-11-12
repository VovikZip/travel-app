import AppRouter from './components/AppRouter';
import {BrowserRouter} from 'react-router-dom'
import './assets/css/style.css'
import {useEffect, useState} from 'react'
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import {TripsContext, AuthContext} from './context/index'

function App() {
  const [trips, setTrips] = useState([])
  const [bookedTrips, setBookedTrips] = useState([])
  const [isAuth, setIsAuth] = useState(false)
  const [users, setUsers] = useState([{name: 'ivan', email: 'ivan@gmail.com', password: 'pass'}])

  useEffect(() => {
    if (localStorage.getItem('auth')){
      setIsAuth(true)
      console.log(111111)
    } else {
      setIsAuth(false)
      console.log(2222)
    }
    

  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      users,
      setUsers
    }}> 
      <BrowserRouter className='wrapper' >
        <Header/>
        <TripsContext.Provider value={{
          trips,
          setTrips,
          bookedTrips,
          setBookedTrips
        }} >
          <AppRouter/>
        </TripsContext.Provider>
      
        <Footer/>
    
      </BrowserRouter>

    </AuthContext.Provider>
    
  );
}

export default App;
