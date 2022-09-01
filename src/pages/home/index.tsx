import React from 'react'
import styles from './index.less'
import SideBar from '../sidebar';
export default function Home() {
  return (
    <div className={styles.Home}>
     <SideBar></SideBar>
    </div>
  )
}
