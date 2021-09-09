import React, { Fragment } from 'react';
import { StyledHeader } from './header.styles';
import logo from '../../images/logo.jpg';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';

const Header = ({ logout }) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        logout();
    };
    return (
        <StyledHeader>
            <div className='header__logo-container'>
                <Link to='/'>
                    <img src={logo} alt='' />
                </Link>
            </div>

            {window.location.pathname !== '/login' &&
                window.location.pathname !== '/register' && (
                    <div className='header__button-container'>
                        {!userInfo ? (
                            <Fragment>
                                <Link to='/register'>
                                    <button className='button sign-up'>
                                        Sign up
                                    </button>
                                </Link>
                                <Link to='/login'>
                                    <button className='button sign-in'>
                                        Sign In
                                    </button>
                                </Link>
                            </Fragment>
                        ) : (
                            <div>
                                {' '}
                                <button
                                    className='button sign-in'
                                    onClick={logoutHandler}
                                >
                                    Logout
                                </button>
                                <Link to='/profile'>
                                    <button className='button sign-in'>
                                        Profile
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                )}

            <div className='bg-gradient'></div>
        </StyledHeader>
    );
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default React.memo(connect(null, mapDispatchToProps)(Header));
