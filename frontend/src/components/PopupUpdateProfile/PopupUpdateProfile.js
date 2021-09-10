import React, { useState } from 'react';
import { StyledPopupProfile } from './StyledPopupProfile';
import backupImage from '../../images/profile.png';
import TagsInput from '../TagsInput';
import axios from 'axios';
import { updateProfile } from '../../actions/userActions';
import { useDispatch } from 'react-redux';
import { RiCloseCircleFill } from 'react-icons/ri';

const PopupUpdateProfile = ({
    defaultName,
    defaultBio,
    defaultInterests,
    defaultProfileImage,
    setIsPopupOpen,
    popupToggler,
}) => {
    const dispatch = useDispatch();
    const [tags, setTags] = useState(defaultInterests);
    const [name, setName] = useState(defaultName);
    const [bio, setBio] = useState(defaultBio);
    const [image, setImage] = useState(defaultProfileImage);
    const [uploading, setUploading] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        if (image === defaultProfileImage) {
            dispatch(updateProfile(name, bio, tags));
        } else {
            dispatch(updateProfile(name, bio, tags, image));
        }
        popupToggler();

        setTimeout(() => {
            setIsPopupOpen(false);

            window.location.reload(false);
        }, 2000);
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
            console.log(image)
            console.log(data)
            const tempimg = document.getElementById('output');
            tempimg.src = URL.createObjectURL(e.target.files[0]);
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };
    return (
        <StyledPopupProfile>
            <div className='overlay' onClick={popupToggler}></div>
            <div className='form-container'>
                <div className='icon-container' onClick={popupToggler}>
                    <RiCloseCircleFill size={30} />
                </div>
                <div className='text-container'>
                    <div className='form-header'>
                        <h1 className='heading-main'>Edit Profile</h1>
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
                                <label for='name'>Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></input>
                            </div>

                            <div className='image-field'>
                                <label for='image'>
                                    <span className='glyphicon glyphicon-camera'></span>
                                    <span>Change Image</span>
                                </label>
                                <input
                                    type='file'
                                    onChange={uploadFileHandler}
                                    id='image'
                                    name='image'
                                ></input>
                                <img
                                    src={defaultProfileImage}
                                    id='output'
                                    width='200'
                                />
                            </div>
                        </div>
                        <div className='bio-field'>
                            <label for='bio'>Bio</label>
                            <textarea
                                type='text'
                                id='bio'
                                name='bio'
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
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
                            onClick={(e) => submitHandler(e)}
                            className='submit two'
                        >
                            Save Profile
                        </button>
                    </div>
                </div>
            </div>
        </StyledPopupProfile>
    );
};

export default PopupUpdateProfile;
