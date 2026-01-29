
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'
function App() {

  return (
    <UserContextProvider>
      <h1 className='font-bold text-black my-5 text-center'>Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>

  )
}

export default App
