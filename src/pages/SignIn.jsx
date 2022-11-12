import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../context/index'


const SignIn = () => {
  const {users, setIsAuth} = useContext(AuthContext)
  const [isCorrect, setIsCorrect] = useState(false)
  const [authUser, setAuthUser] = useState({email: '', password: ''})

  const logUser = (e) => {
    e.preventDefault()
    users.map((user) => {
      if (user.email === authUser.email && user.password === authUser.password) {
        setIsAuth(true)
        console.log('da')
        setIsCorrect(false)
        localStorage.setItem('auth', 'true')
      } else {
        setIsCorrect(true)
        console.log('ne')
      }
    })
    
  }
  // ivan@gmail.com 
  // pass
  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-in-form" autoComplete="off">
        <h2 className="sign-in-form__title">Sign In</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input 
            name="email" 
            type="email" 
            value={authUser.email}
            onChange={e => setAuthUser({...authUser, email: e.target.value})}
            required 
          />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input 
            name="password" 
            type="password" 
            value={authUser.password}
            onChange={e => setAuthUser({...authUser, password: e.target.value})}
            autoComplete="new-password" 
            required />
        </label>
        <button 
          className="button" 
          type="submit"
          onClick={logUser}
        >Sign In</button>
      </form>
        <span>
          Already have an account?
          <Link to="/sign-up" className="sign-in-form__link">Sign Up</Link>
        </span>
    </main>
        
  )
}

export default SignIn