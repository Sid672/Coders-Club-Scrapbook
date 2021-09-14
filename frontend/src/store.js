import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createNewPostReducer, deletePostReducer, postListReducer } from './reducers/postsReducer';
import { getAllUsersReducer, updateProfileReducer, userDetailsReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducers';

const reducer = combineReducers({
    postList: postListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    createNewPost : createNewPostReducer,
    deletePost: deletePostReducer,
    updatedProfile: updateProfileReducer,
    allUsers: getAllUsersReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
