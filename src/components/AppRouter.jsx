import React, {useContext} from 'react'
import {privateRoutes, publicRoutes} from '../router/index'
import {Routes, Route} from 'react-router-dom'
import {AuthContext} from '../context/index'
import SignIn from '../pages/SignIn'
import MainPage from '../pages/MainPage'

const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  return (
    <main>
      {isAuth
        ?
          <Routes>
            {privateRoutes.map(route => 
              <Route path={route.path} element={route.element} key={route.path} className={route.className} />
            )}
            <Route path='*' element={<MainPage/>} />
          </Routes>
        :
          <Routes>
            {publicRoutes.map(route => 
              <Route path={route.path} element={route.element} key={route.path} className={route.className} />
            )}
            <Route path='/' element={<SignIn/>} />
            <Route path='*' element={<SignIn/>} />
          </Routes>
      }
      
    </main>
    
        
    
  )
}

export default AppRouter