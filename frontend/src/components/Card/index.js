import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCard } from './card.styles';
import moment from 'moment';
const Card = ({
    username,
    text,
    image,
    tags,
    profilePhoto,
    createdAt,
    postImage,
}) => {
    const urlify = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, (url) => {
            return `<a href="${url}" target="_blank">${url}</a>`;
        });
    };

    const html = urlify(text);

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
    return (
        <StyledCard>
            <div className='post-header'>
                <img className='user-image' src={profilePhoto} alt='' />
                <div className='header-text-wrapper'>
                    <Link to={`/user/profile/${username}`}>
                        <h3 className='username'>{username}</h3>
                    </Link>
                    <p className='time'>{postDate}</p>
                </div>
            </div>

            <article
                className='post-text'
                dangerouslySetInnerHTML={{ __html: html }}
            ></article>
            {postImage !== '' && <Link  target="_blank" to={`/view/${postImage.split("/")[4]}`}><img className='post-image' src={postImage} /></Link>}
            <div className='post-footer'>
                {tags.map((tag, idx) => (
                    <div key={idx} className='tag-container'>
                        <p className='tag'>{tag}</p>
                    </div>
                ))}
            </div>
        </StyledCard>
    );
};

export default Card;
