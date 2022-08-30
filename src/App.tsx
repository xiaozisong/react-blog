import { Layout } from 'antd';
import styles from './App.less'
import React from 'react';
import TopBar from './pages/topbar';
import NavBar from './pages/navbar';
import HomeMain from './pages/homemain';
function App() {
  const { Header, Footer, Content } = Layout;
  return (
    <div className={styles.App}>
        <Header>
          <TopBar/>
          <NavBar />
        </Header>
        <HomeMain />
    </div>

  );
}

export default App;
