import React, { useState } from 'react'
import SearchBar from '../searchbar'
import { Menu, MenuProps } from 'antd'
import styles from './index.less'
import { useNavigate } from 'react-router-dom'
export default function NavBar(props: any) {
  const [current, setCurrent] = useState('index')
  const navigate = useNavigate()
  const {
    history
  } = props
  const items: MenuProps['items']= [
    {
      label: '主页',
      key: 'index'
    },
    {
      label: '我的博客',
      key: 'myblog'
    },
    {
      label: '留言板',
      key: 'comment'
    },
  ]
  const handleClick = ({ key }: any) => {
    switch(key) {
      case 'index':
        navigate('/')
        break;
      case 'myblog':
        navigate('/home')
        break;
      case 'comment':
        navigate('/comment')
        break;
      default:
        break;
    }
  }
  return (
    <div className={styles.NavBar}>
      <SearchBar />
      <Menu defaultSelectedKeys={['index']} mode="horizontal" items={items} onClick={handleClick} />
    </div>
  )
}
