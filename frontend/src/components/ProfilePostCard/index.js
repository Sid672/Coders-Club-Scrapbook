import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import { StyledProfilePost } from './StyledProfilePost';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProfilePostCard = ({
    text,
    tags,
    createdAt,
    _id,
    isDelete,
    postImage,
}) => {
    const urlify = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, (url) => {
            return `<a href="${url}" target="_blank">${url}</a>`;
        });
    };

    const html = urlify(text);
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

            <article
                className='post-text'
                dangerouslySetInnerHTML={{ __html: html }}
            ></article>
            {postImage !== '' && <Link  target="_blank" to={`/view/${postImage.split("/")[4]}`}><img className='post-image' src={postImage} alt='profile-img'/></Link>}

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
