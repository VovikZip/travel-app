import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import Briefcase from '../../assets/images/briefcase.svg'
import Profile from '../../assets/images/user.svg'
import {AuthContext} from '../../context/index'

const Header = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const signOut = () => {
    console.log(isAuth)
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
 
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">Travel App</Link>
        <nav className="header__nav">
          <ul className={isAuth ? 'nav-header__list' : 'nav-header__list__hide' }>
            <li className="nav-header__item" title="Bookings">
              <Link to="/bookings" className="nav-header__inner">
                <span className="visually-hidden">Bookings</span>
                <img src={Briefcase} alt=" icon" />
              </Link>      
            </li>
            <li className="nav-header__item" title="Profile">
              <div className="nav-header__inner profile-nav" tabIndex="0">
                <span className="visually-hidden">Profile</span>
                <img src={Profile} alt="profile icon" />
                
                <ul className="profile-nav__list">
                  <li className="profile-nav__item profile-nav__username">John Doe</li>
                  <li className="profile-nav__item">
                    <button className="profile-nav__sign-out button" onClick={signOut} >Sign Out</button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header