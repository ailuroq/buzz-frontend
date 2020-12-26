import React from 'react'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Messenger from "./components/Content/Messenger/Messenger";
import styles from './App.module.css'
import {Route} from "react-router-dom";
import Profile from "./components/Content/Profile/Profile";
import Login from "./components/Content/Authorization/Login"
import Registration from "./components/Content/Authorization/Registration";

const App = (props) => {
    return (
        <div className={styles.mainWrapper}>
            <Header/>
            <Nav/>
            <Route exact path='/messenger' component={Messenger}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/registration' component={Registration}/>
        </div>
    )
}

export default App