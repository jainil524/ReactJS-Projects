import React from 'react'
import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import UserContextProvider from "./context/UserContextProvider"
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
        <UserContextProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </UserContextProvider>

      </BrowserRouter>
    </>
  )
}

export default App
