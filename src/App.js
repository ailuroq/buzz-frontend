import React from 'react'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Messenger from "./components/content/Messenger/Messenger";
import styles from './App.module.css'

const App = (props) => {
    return (
        <div className={styles.mainWrapper}>
            <Header />
            <Nav/>
            <Messenger/>
        </div>
    )
}

export default App