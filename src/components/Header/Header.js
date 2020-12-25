import React from 'react'
import styles from './Header.module.css'
import {Container, Row, Col} from 'bootstrap-4-react'
import logo from '../../static/straw.png'
import {ErrorMessage, Field, Form, Formik} from 'formik'
const Header = (props) => {
    return (
        <div className={styles.header}>
            <Container>
                <Row justifyContent="between">
                    <Col col="sm">
                        <img className={styles.logotype} src={logo} alt=""/>
                    </Col>
                    <Col col="sm">
                        <a href="/profile">My profile</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header