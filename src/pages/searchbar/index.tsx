import React from 'react'
import { Input} from 'antd'
import styles from './index.less'
import Icon from '@ant-design/icons';

export default function SearchBar() {
  const searchIcon = () => {
    return <i className='iconfont icon-sousuo' style={{ fontSize: 20 }}></i>
  }
  return (
    <div className={styles.SearchBar}>
      <Input placeholder='请输入文章的标题或关键字' prefix={<Icon component={searchIcon} />} />
    </div>
  )
}
