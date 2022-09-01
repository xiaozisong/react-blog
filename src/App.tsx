import { Layout } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout';
import Comment from './pages/comment';
import Home from './pages/home';
import HomeMain from './pages/homemain';
function App() {
  const { Header } = Layout;
  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout />} >
          <Route index element={<HomeMain />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='comment' element={<Comment />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
