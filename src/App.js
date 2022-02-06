import Counter from './components/Counter'
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import { login, logout } from './features/authSlice'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const auth = useSelector((state) => state.auth.value)
  console.log(auth)

  return (
    <div>
      <Header />
      {auth ? <UserProfile /> : <Auth />}
      <Counter />
    </div>
  )
}

export default App
