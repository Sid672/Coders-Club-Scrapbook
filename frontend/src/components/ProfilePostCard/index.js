import moment from 'moment';
import React from 'react';
import { StyledProfilePost } from './StyledProfilePost';

const ProfilePostCard = ({ text, tags, createdAt }) => {


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
        <StyledProfilePost>
            <div className='post-header'>
                <div className='header-text-wrapper'>
                    <p className='time'>{postDate}</p>
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
