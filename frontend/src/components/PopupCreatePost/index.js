import React, { useRef, useState, useEffect } from 'react';
import TagsInput from '../TagsInput';
import { StyledCreatePost } from './StyledCreatePost';
import { useDispatch } from 'react-redux';
import { sendNewPost } from '../../actions/postActions';

const PopupCreatePost = ({ setIsPopupOpen, history }) => {
    const textareaRef = useRef('');
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [tags, setTags] = useState([]);

    const onSubmitHandler = () => {
        dispatch(sendNewPost(text.replace(/(<([^>]+)>)/gi, ''), tags));
        setTimeout(() => {
            setIsPopupOpen(false);

            window.location.reload(false);
        }, 2000);
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
