import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from '../constants/userConstants';
import axios from 'axios';
import { toast } from 'react-toastify';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const options = {
            hideProgressBar: true,
        };

        const { data } = await toast.promise(
            axios.post('/api/v1/users/login', { email, password }, config),
            {
                pending: 'Logging In....',
                success: 'Login Successfull',
                error: {
                    render({ data }) {
                        return `${data.response.data.error}`;
                    },
                },
            },
            options
        );
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.error
                    ? error.response.data.error
                    : error,
        });
    }
};

export const register =
    (email, name, password, username,  bio, tags, image) => async (dispatch) => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST,
            });

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const options = {
                hideProgressBar: true,
            };

            const { data } = await toast.promise(
                axios.post(
                    '/api/v1/users/',
                    { name, username, email, password,  bio, tags, image },
                    config
                ),
                {
                    pending: 'Signing Up....',
                    success: 'Register Successfully',
                    error: {
                        render({ data }) {
                            return `${data.response.data.error}`;
                        },
                    },
                },
                options
            );

            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data,
            });

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data,
            });

            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload:
                    error.response && error.response.data.error
                        ? error.response.data.error
                        : error,
            });
        }
    };

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
    toast.info('Logout Successfull');
};

export const getUserDetails = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();
        console.log(userInfo);
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get('/api/v1/users/profile', config);

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.error
                    ? error.response.data.error
                    : error,
        });
    }
};
export const getUserDetailsById = (username) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        });

        const { data } = await axios.get(`/api/v1/users/profile/${username}`);

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.error
                    ? error.response.data.error
                    : error,
        });
    }
};
