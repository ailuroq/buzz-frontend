import React from 'react'
import Message from "./Message/Message";
import styles from './Messenger.module.css'

const Messenger = (props) => {
    return (
        <div className={styles.content}>
            <div>
                <Message/>

            </div>
        </div>
    )
}

export default Messenger