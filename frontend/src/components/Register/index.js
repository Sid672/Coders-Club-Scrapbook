import React, { Fragment, useEffect, useState } from 'react';
import Header from '../Header';
import { StyledLogin } from './StyledLogin';
import login from '../../images/login.png';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { register } from '../../actions/userActions';
import TagsInput from '../TagsInput';
import Loader from '../Loader/Loader';
import axios from 'axios';
import backupImage from '../../images/profile.png';
const Register = ({ register, location, history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [page, setPage] = useState(1);
    const [tags, setTags] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState('');
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

        if (image === '') {
            register(email, name, password, username, bio, tags);
        }else{
            register(email, name, password, username, bio, tags, image);

        }
    };

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            const { data } = await axios.post(
                '/api/v1/upload',
                formData,
                config
            );

            setImage(data);
            const tempimg = document.getElementById('output');
            tempimg.src = URL.createObjectURL(e.target.files[0]);
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    const pageToggler = () => {
        if (page === 1) {
            setPage(2);
        } else if (page === 2) {
            setPage(1);
        }
    };

    return (
        <Fragment>
            <Header />
            <StyledLogin>
                <div className='image-container'>
                    <div className='blur'></div>
                    <img src={login} alt='login-description' />
                </div>

                {page === 1 && (
                    <div className='form-container'>
                        <div className='text-container'>
                            <div className='form-header'>
                                <h1 className='heading-main'>Get Started</h1>
                                <p className='sub-heading'>
                                    Already have an account?{' '}
                                    <Link to='login'>
                                        <span>Sign in!</span>
                                    </Link>
                                </p>
                            </div>

                            <div className='form-fields'>
                                <div className='name-field'>
                                    <label for='name'>Name</label>
                                    <input
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        type='name'
                                        id='name'
                                        name='name'
                                    ></input>
                                </div>
                                <div className='email-field'>
                                    <label for='email'>Email address</label>
                                    <input
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
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

                                <button
                                    className='submit'
                                    onClick={pageToggler}
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {page === 2 && (
                    <div className='form-container'>
                        <div className='text-container'>
                            <div className='form-header'>
                                <h1 className='heading-main'>Finish Sign up</h1>
                                <p className='sub-heading'>
                                    Feeling Lazy?{' '}
                                    <Link to='login'>
                                        <span>Skip for now </span>
                                    </Link>
                                </p>
                            </div>
                            <div className='form-fields'>
                                <h4
                                    style={{
                                        color: 'black',
                                        fontWeight: '500',
                                    }}
                                >
                                    Profile Photo
                                </h4>
                                <div className='username-image-wrapper'>
                                    <div className='username-field'>
                                        <label for='username'>Username</label>
                                        <input
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                            type='text'
                                            id='username'
                                            name='username'
                                        ></input>
                                    </div>

                                    <div className='image-field'>
                                        <label for='image'>
                                            <span className='glyphicon glyphicon-camera'></span>
                                            <span>Change Image</span>
                                        </label>
                                        <input
                                            onChange={uploadFileHandler}
                                            type='file'
                                            id='image'
                                            name='image'
                                        ></input>
                                        <img
                                            src={backupImage}
                                            id='output'
                                            width='200'
                                        />
                                        {uploading && <Loader />}
                                    </div>
                                </div>
                                <div className='bio-field'>
                                    <label for='bio'>Bio</label>
                                    <textarea
                                        onChange={(e) => setBio(e.target.value)}
                                        type='text'
                                        id='bio'
                                        name='bio'
                                    ></textarea>
                                </div>

                                <div className='interest-field'>
                                    <label for='bio'>Interest</label>
                                    <TagsInput
                                        tags={tags}
                                        setTags={setTags}
                                        label='Add'
                                    />
                                </div>

                                <button
                                    className='submit two'
                                    onClick={submitHandler}
                                >
                                    Create Profile
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </StyledLogin>
        </Fragment>
    );
};

const mapDispatchToProps = (dispatch) => ({
    register: (email, name, password, username, bio, tags, image) =>
        dispatch(register(email, name, password, username, bio, tags, image)),
});

export default React.memo(connect(null, mapDispatchToProps)(Register));
