import classes from './Auth.module.css'
import { login } from '../features/authSlice'
import { useDispatch } from 'react-redux'

const Auth = () => {
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(login())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login())
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          {/* <button onClick={handleLogin}>Login</button> */}
          <button>Login</button>
        </form>
      </section>
    </main>
  )
}

export default Auth
