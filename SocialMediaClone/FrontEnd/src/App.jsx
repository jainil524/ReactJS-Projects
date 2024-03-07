import React from "react";
import Login from "./pages/Login/Login";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Index Page</h1>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<h1>dashboard</h1>}/>
      </Routes>
    </>
  )
}

export default App
