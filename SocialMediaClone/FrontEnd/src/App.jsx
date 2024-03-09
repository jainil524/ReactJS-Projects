import React from "react";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom"
import UserContextProvider from "./contexts/UserContext";
import Feeds from "./pages/Feeds/Feeds";
import IndexLayout from "./layouts/IndexLayout";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<IndexLayout />}/>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
