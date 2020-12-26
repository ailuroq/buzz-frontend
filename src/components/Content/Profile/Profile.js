import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {connect} from "react-redux";

const Profile = props => {
    return (
        <div>
            <div>
                <Container>
                    <Row>
                        <Col sm={4}>
                            Photo
                        </Col>
                        <Col sm={8}>
                            <p>props.name</p>
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