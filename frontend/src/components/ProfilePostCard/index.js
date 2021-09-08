import React from 'react';
import { StyledProfilePost } from './StyledProfilePost';

const ProfilePostCard = ({ username, text, image, tags }) => {
    return (
        <StyledProfilePost>
            <div className='post-header'>
                <div className='header-text-wrapper'>
                    <p className='time'>Today 11:00 am</p>
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
