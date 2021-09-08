import axios from 'axios';
import { toast } from 'react-toastify';
import {
    CREATE_NEW_POST_FAIL,
    CREATE_NEW_POST_REQUEST,
    CREATE_NEW_POST_SUCCESS,
    POST_LIST_FAIL,
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
} from '../constants/postConstants';

export const listPosts = () => async (dispatch) => {
    try {
        dispatch({ type: POST_LIST_REQUEST });

        const { data } = await axios.get('/api/v1/posts');
        dispatch({ type: POST_LIST_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({ type: POST_LIST_FAIL, payload: error });
    }
};

export const sendNewPost = (text, tags) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_NEW_POST_REQUEST,
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

        // const response = await axios.post(
        //     '/api/v1/posts',
        //     {
        //         text,
        //         tags,
        //     },
        //     config
        // );

        const postingPromise = new Promise((resolve, reject) => {
            axios
                .post(
                    '/api/v1/posts',
                    {
                        text,
                        tags,
                    },
                    config
                )
                .then(function ({ data }) {
                    resolve(data);

                    dispatch({
                        type: CREATE_NEW_POST_SUCCESS,
                        payload: data,
                    });

                })
                .catch(function (error) {
                    reject();
                });
        });

        toast.promise(postingPromise, {
            pending: 'Uploading Post',
            success: 'Post Uplaoded Successfully',
            error: 'Error while posting',
        });

    } catch (error) {
        dispatch({
            type: CREATE_NEW_POST_FAIL,
            payload:
                error.response && error.response.data.error
                    ? error.response.data.error
                    : error,
        });
    }
};
