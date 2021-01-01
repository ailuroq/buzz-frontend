import React from 'react'
import styles from './Header.module.css'
import {Container, Row, Col, Button, Dropdown, ButtonGroup, DropdownButton, NavLink} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../static/straw.png'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import {SplitButton} from "react-bootstrap";

const Header = (props) => {
    return (
        <div className={styles.header}>
            <Container>
                <Row>
                    <Col sm={10}>
                        <NavLink className={styles.logotype}>
                            <img src={logo}/>
                        </NavLink>
                    </Col>
                    <Col sm={2}>
                        <div className={styles.profile}>
                            <div>
                                {[SplitButton].map((DropdownType, idx) => (
                                    <DropdownType
                                        as={ButtonGroup}
                                        key={idx}
                                        id={`dropdown-button-drop-${idx}`}
                                        size="sm"
                                        variant="Info"
                                        title="Username"  /*here should be props.username*/

                                    >
                                        <Dropdown.Item eventKey="1">Settings</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Help</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Logout</Dropdown.Item>

                                        </DropdownType>
                                ))}
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header