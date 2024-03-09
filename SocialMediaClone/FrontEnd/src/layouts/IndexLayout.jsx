import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Feeds from '../pages/Feeds/Feeds'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import SearchPost from '../pages/Search/SearchPost';
import AddPost from '../pages/addPost/AddPost';
import Profile from '../pages/Profile/Profile';

function IndexLayout() {
  const navigate = useNavigate();

  if (localStorage.getItem('user') === null || localStorage.getItem('user') === '') {
    navigate('/login');
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Feeds />} />
        <Route path="/search" element={<SearchPost/>} />
        <Route path="/addPost" element={<AddPost/> } />
        <Route path="/notification" element={<Notification/> } />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  )
}

export default IndexLayout
