import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import Posts from "./pages/Posts"
import Navbar from "./components/NavBar"
import SinglePost from "./pages/SinglePost"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  

  return (
    <>
      <Navbar setToken = {setToken} token = {token}/>
      <Routes>
        <Route path="/login" element={<Login setToken = {setToken}/>} />
        <Route path="/register" element={<Register setToken = {setToken}/>} />
        <Route path="/posts/*" element={<Posts token = {token}/>} />
        <Route path="/profile" element={<Profile token = {token}/>} />
        {/* <Route path="/singlepost" element={<SinglePost token={token} />} /> */}
      </Routes>
    </>
  )
}

export default App
