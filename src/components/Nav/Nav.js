import React from 'react'
import styles from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <div className={styles.nav}>
            <div>
                <ul className={styles.menu}>
                    <li><NavLink className={styles.menu_item}to="/profile">My profile</NavLink></li>
                    <li><NavLink className={styles.menu_item}to="/news">News</NavLink></li>
                    <li><NavLink className={styles.menu_item}to="/messages">Messenger</NavLink></li>
                    <li><NavLink className={styles.menu_item}to="/friends">Friends</NavLink></li>
                    <li><NavLink className={styles.menu_item}to="/photos">Photos</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav