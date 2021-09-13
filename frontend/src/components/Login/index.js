import React, { Fragment, useEffect, useState } from 'react';
import Header from '../Header';
import { StyledLogin } from './StyledLogin';
import loginImg from '../../images/login.png';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { login } from "../../actions/userActions";
// import { motion } from 'framer-motion';
// import styled from 'styled-components';

const Login = ({login, location, history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const redirect = location.search ? location.search.split('=')[1] : '/';
    const { loading, error, userInfo } = useSelector(
        (state) => state.userLogin
    );

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);
    const submitHandler = (e) => {
        e.preventDefault();
        login(email, password);
    };
    return (
        <Fragment>

            <Header />
            <StyledLogin>
                <div className='image-container'>
                    <div className='blur'></div>
                    <img src={loginImg} alt='login-description' />
                </div>

                <div className='form-container'>
                    <div className='text-container'>
                        <div className='form-header'>
                            <h1 className='heading-main'>Welcome Back</h1>
                            <p className='sub-heading'>
                                Don't have an account?{' '}
                                <Link to='register'>
                                    <span>Sign up!</span>
                                </Link>
                            </p>
                        </div>

                        <div className='social-buttons'></div>

                        <div className='form-fields'>
                            <div className='email-field'>
                                <label for='email'>Email address</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    id='email'
                                    name='email'
                                ></input>
                            </div>
                            <div className='password-field'>
                                <label for='password'>Password</label>
                                <input
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    type='password'
                                    id='password'
                                    name='password'
                                ></input>
                            </div>
                            <p>Forgot Password ?</p>

                            <button className='submit' onClick={submitHandler}>Log In</button>
                        </div>
                    </div>
                </div>
            </StyledLogin>
        </Fragment>
    );
};

const mapDispatchToProps = (dispatch) => ({
    login: (email,password) => dispatch(login(email,password)),
});

export default React.memo(connect(null, mapDispatchToProps)(Login));
