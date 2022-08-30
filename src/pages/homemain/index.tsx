import React from 'react'
import styles from './index.less'
import { Button } from 'antd'
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
          进入主页
        </Button>
      </div>
    </div>
  )
}
