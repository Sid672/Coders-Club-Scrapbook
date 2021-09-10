import {
    CREATE_NEW_POST_FAIL,
    CREATE_NEW_POST_REQUEST,
    CREATE_NEW_POST_SUCCESS,
    DELETE_POST_FAIL,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    POST_LIST_FAIL,
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
} from '../constants/postConstants';

export const postListReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case POST_LIST_REQUEST:
            return {
                loading: true,
                posts: [],
            };

        case POST_LIST_SUCCESS:
            return { loading: false, posts: action.payload };

        case POST_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
export const createNewPostReducer = (state = { postCreated: {} }, action) => {
    switch (action.type) {
        case CREATE_NEW_POST_REQUEST:
            return {
                loading: true,
                postCreated: {},
            };

        case CREATE_NEW_POST_SUCCESS:
            return { loading: false, postCreated: action.payload };

        case CREATE_NEW_POST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const deletePostReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_POST_REQUEST:
            return {
                loading: true,
                success: false,
            };

        case DELETE_POST_SUCCESS:
            return { loading: false, success: true };

        case DELETE_POST_FAIL:
            return { loading: false, success: false, error: action.payload };

        default:
            return state;
    }
};
