import React, { useState } from 'react'
import SearchBar from '../searchbar'
import { Menu, MenuProps } from 'antd'
import styles from './index.less'
export default function NavBar() {
  const [current, setCurrent] = useState('index')
  const items: MenuProps['items']= [
    {
      label: '主页',
      key: 'index'
    },
    {
      label: '主页2',
      key: 'index2'
    },
    {
      label: '主页3',
      key: 'index3'
    },
    {
      label: '主页4',
      key: 'index4'
    },
    {
      label: '主页5',
      key: 'index5'
    },
    {
      label: '主页6',
      key: 'index6'
    }
  ]
  return (
    <div className={styles.NavBar}>
      <SearchBar />
      <Menu defaultSelectedKeys={['index']} mode="horizontal" items={items} />
    </div>
  )
}
