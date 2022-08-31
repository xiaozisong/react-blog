import React from 'react'
import styles from './index.less'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
export default function HomeMain() {
  return (
    <div className={styles.HomeMain}>
      <div className={styles.pic}>
      </div>
      <div style={{textAlign: 'center'}}>
        <h1 className={styles.title}>
          XIAOZISONG`S BLOG
        </h1>
        <p className={styles.subTitle}>
          肖子凇的个人博客
        </p>
        <Button type='primary' size='large' style={{marginTop: 20}}> 
          <Link to={'/home'}>
            进入主页
          </Link>
        </Button>
      </div>
    </div>
  )
}
