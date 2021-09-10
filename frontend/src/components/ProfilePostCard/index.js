import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import { StyledProfilePost } from './StyledProfilePost';
import { MdDelete } from 'react-icons/md';

const ProfilePostCard = ({ text, tags, createdAt,  _id, isDelete }) => {
    const dispatch = useDispatch();

    const { success } = useSelector((state) => state.deletePost);
    let postDate = '';
    if (
        moment(Date.now()).format('MMM Do YY') ===
            moment(createdAt).format('MMM Do YY') ||
        moment(Date.now()).subtract(1, 'days').format('MMM Do YY') ===
            moment(createdAt).format('MMM Do YY')
    ) {
        postDate = moment(createdAt).calendar();
    } else {
        postDate = moment(createdAt).format('MMM Do YY');
    }

    const deleteHandler = (id) => {
        dispatch(deletePost(id));
    };

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                window.location.reload(false);
            }, 500);
        }
    }, [success]);
    return (
        <StyledProfilePost>
            <div className='post-header'>
                <div className='header-text-wrapper'>
                    <p className='time'>{postDate}</p>
                    {isDelete && (
                        <div
                            className='delete-icon'
                            onClick={() => deleteHandler(_id)}
                        >
                            <MdDelete size={25} />
                        </div>
                    )}
                </div>
            </div>

            <article class='post-text'>{text}</article>

            <div className='post-footer'>
                {tags.map((tag) => (
                    <div className='tag-container'>
                        <p className='tag'>{tag}</p>
                    </div>
                ))}
            </div>
        </StyledProfilePost>
    );
};

export default ProfilePostCard;
