import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import './style.css'

import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import Posts from "./pages/Posts"
import Navbar from "./components/NavBar"
import Home from "./pages/Home"
import SinglePost from "./pages/SinglePost"

function App() {
  const [token, setToken] = useState(localStorage.getItem('Token'))
  //const [token, setToken] = useState('');
  //localStorage.setItem('Token', token);
  console.log("App page", token)

  return (
    <>
      <Navbar setToken = {setToken} token = {token}/>
      <Routes>
        <Route path="/login" element={<Login setToken = {setToken} token={token} />} />
        <Route path="/register" element={<Register setToken = {setToken}/>} />
        <Route path="/posts/*" element={<Posts token = {token}/>} />
        <Route path="/profile" element={<Profile token = {token}/>} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/singlepost" element={<SinglePost token={token} />} /> */}
      </Routes>
     
    </>
  )
}

export default App
