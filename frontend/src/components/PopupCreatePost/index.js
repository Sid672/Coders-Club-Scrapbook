import React, { useRef, useState, useEffect } from 'react';
import TagsInput from '../TagsInput';
import { StyledCreatePost } from './StyledCreatePost';
import { useDispatch } from 'react-redux';
import { sendNewPost } from '../../actions/postActions';
import axios from 'axios';
import { FiUploadCloud } from 'react-icons/fi';

const PopupCreatePost = ({ setIsPopupOpen, history }) => {
    const textareaRef = useRef('');
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [tags, setTags] = useState([]);
    const [postImage, setPostImage] = useState('');
    const [uploading, setUploading] = useState(false);

    const onSubmitHandler = () => {
        dispatch(
            sendNewPost(text.replace(/(<([^>]+)>)/gi, ''), tags, postImage)
        );
        setTimeout(() => {
            setIsPopupOpen(false);

            window.location.reload(false);
        }, 2000);
    };

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        console.log(file);
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

            setPostImage(data.imagePath);
            const tempimg = document.getElementById('output');
            tempimg.src = URL.createObjectURL(e.target.files[0]);
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    // toast.promise(dispatch(sendNewPost(text, tags)), {
    //     pending: 'Posting...',
    //     success: 'Posted Successfully',
    //     error: 'Error while posting',
    // });
    //  //     setIsPopupOpen(false)

    // //     window.location.reload(false)
    // // dispatch(sendNewPost(text, tags));
    // // toast.success("Posted Successfully")
    // setTimeout(() => {
    //     setIsPopupOpen(false)
    //     window.location.reload(false)

    // }, 3000);
    const autoresize = () => {
        setTimeout(function () {
            textareaRef.current.style.cssText = 'height:auto; padding:0';
            // for box-sizing other than "content-box" use:
            // el.style.cssText = '-moz-box-sizing:content-box';
            textareaRef.current.style.cssText =
                'height:' + textareaRef.current.scrollHeight + 'px';
        }, 0);
    };

    return (
        <StyledCreatePost>
            <div
                className='overlay'
                onClick={() => setIsPopupOpen(false)}
            ></div>
            <div className='card'>
                <textarea
                    onKeyDown={autoresize}
                    ref={textareaRef}
                    row='2'
                    placeholder="what's going on ?"
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                ></textarea>
                {postImage !== '' && <img id='output' width='100%' />}
                <div className='input-container'>
                    <FiUploadCloud size={20} />
                    <h4>Upload Image</h4>
                    <input
                        type='file'
                        className='upload-input'
                        onChange={(e) => uploadFileHandler(e)}
                    />
                </div>

                <div className='wrapper-tag-btn'>
                    <TagsInput tags={tags} setTags={setTags} label='tags' />
                    <div className='btn-container' onClick={onSubmitHandler}>
                        <button className='new-post'>Post</button>
                    </div>
                </div>
            </div>
        </StyledCreatePost>
    );
};

export default PopupCreatePost;
