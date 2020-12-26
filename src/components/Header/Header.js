import React from 'react'
import styles from './Header.module.css'
import {Container, Row, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../static/straw.png'
import {ErrorMessage, Field, Form, Formik} from 'formik'

const Header = (props) => {
    return (
        <div className={styles.header}>
            <Container>
                <Row>
                    <Col sm={10}>
                        <img className={styles.logotype} src={logo}/>
                    </Col>
                    <Col sm={2}>
                        <div className={styles.profile}>
                            <a href="/profile">My profile</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header