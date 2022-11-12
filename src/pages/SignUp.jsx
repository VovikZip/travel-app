import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../context/index'

const SignUp = () => {
  const {users, setUsers, setIsAuth} = useContext(AuthContext)
  const [user, setUser] = useState({name: '', email: '', password: ''})
  const [isCorrect, setIsCorrect] = useState(false)

  const registr = (e) => {
    e.preventDefault()
    if (user.email && user.password && user.name ) {
      setUsers([...users, user])
      setUser({name: '', email: '', password: ''})
      setIsAuth(true)
      setIsCorrect(false)
      localStorage.setItem('auth', 'true')
    } else {
      setIsCorrect(true)
    } 
  }

  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" autoComplete="off">
        <h2 className="sign-up-form__title">Sign Up</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Full name</span>
          <input 
            name="full-name" 
            type="text" 
            value={user.name}
            onChange={e => setUser({...user, name: e.target.value})}
            required />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input 
            name="email" 
            type="email" 
            value={user.email}
            onChange={e => setUser({...user, email: e.target.value})}
            required />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input 
            name="password" 
            type="password" 
            value={user.password}
            onChange={e => setUser({...user, password: e.target.value})}
            autoComplete="new-password" 
            required />
        </label>
        <button 
          className="button" 
          type="submit"
          onClick={registr}
        >Sign Up</button>
      </form>
      <span>
        Already have an account?
        <Link to="/sign-in" className="sign-up-form__link">Sign In</Link>
      </span>
    </main>   
  )
}

export default SignUp