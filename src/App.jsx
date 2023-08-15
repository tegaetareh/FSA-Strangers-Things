import { Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import Posts from "./pages/Posts"
import Navbar from "./components/NavBar"
function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
