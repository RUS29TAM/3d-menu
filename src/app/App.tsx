import React from 'react';
import styles from './App.module.css';
import Menu from "../components/Menu";

const App = () => {
  return (
    <div className={styles.app}>
      <Menu />
    </div>
  );
}

export default App;

