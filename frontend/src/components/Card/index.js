import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCard } from './card.styles';
import moment from 'moment';
const Card = ({ username, text, image, tags, profilePhoto, createdAt }) => {
   
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

            <article className='post-text'>{text}</article>

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
