import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import HomeMain from '../pages/homemain'
import NavBar from '../pages/navbar'
import TopBar from '../pages/topbar'
import styles from '../App.less'
import { Outlet } from 'react-router-dom'
export default function AppLayout() {
  return (
    <div className={styles.App}>
        <Header>
          <TopBar/>
          <NavBar />
        </Header>
        <Outlet />
    </div>
  )
}
