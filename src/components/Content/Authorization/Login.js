import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

const LoginPage = (props) => {
    const loginPageStyle = {
        maxWidth: "530px",
        background: "#fff",
        padding: "30px",
    };
    const {touched, errors} = props;
    return (
        <React.Fragment>
            <div className="container">
                <div className="login-wrapper" style={loginPageStyle}>
                    <h2>Login</h2>
                    <Form className="form-container">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field type="text" name="email" className={"form-control"} placeholder="Email"/>
                            {touched.email && errors.email &&
                            <span className="help-block text-danger">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" className={"form-control"} placeholder="Password"/>
                            {touched.password && errors.password &&
                            <span className="help-block text-danger">{errors.password}</span>}
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </Form>
                </div>
            </div>
        </React.Fragment>
    );
}

const LoginFormik = withFormik({
    mapPropsToValues: (props) => {
        return {
            email: props.email || '',
            password: props.password || ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().required('Password is required')
    }),
    handleSubmit: (values) => {
        axios.post('http://localhost:8080/api/login', values, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err.response);
        });

    }
})(LoginPage);

export default LoginFormik