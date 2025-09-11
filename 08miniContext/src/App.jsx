import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContexProvider'
function App() {

  return (
   <UserContextProvider>
    <h1>Home page</h1>
    <Login/>
    <Profile/>
   </UserContextProvider>
  )
}

export default App
