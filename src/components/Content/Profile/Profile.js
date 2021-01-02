import React, {useEffect} from 'react'
import {Col, Container, NavLink, Row} from "react-bootstrap";
import {connect} from "react-redux";
import avatar from './../../../static/avatar.png'
import styles from './Profile.module.css'
import {getUser} from "../../../redux/actions/getUser";
import store from "../../../redux/store/store";

const Profile = props => {
    useEffect(()=>{
        store.dispatch(getUser(props.id))
        console.log('render')
    })

    return (
        <div>
            <div>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className={styles.avatar}>
                                <img src={avatar} alt=""/>
                                <NavLink to="/settings">Change photo</NavLink>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div>
                                <p>Username</p>  {/*here should be props.username*/}
                                <p>status</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        status: state.status
    }
}

export default connect(mapStateToProps)(Profile)