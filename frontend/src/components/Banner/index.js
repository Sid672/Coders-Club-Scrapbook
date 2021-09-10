import React, { useState } from 'react';
import { StyledBanner } from './banner.header';
import {BsPlusCircleFill } from 'react-icons/bs';
import PopupCreatePost from '../PopupCreatePost';
import { useSelector } from 'react-redux';

const Banner = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const popupToggler = () => {
        setIsPopupOpen(!isPopupOpen)
    }

    const {userInfo} = useSelector(state => state.userLogin)
    
    return (
        <StyledBanner>
            <div className='banner__text-container'>
                <h1>Welcome to Coder's Club ScrapBook</h1>
                <h2>
                    A daily diary of what Code Clubbers are learning & making
                    every day.
                </h2>
            </div>
            <div className='banner__links-container'>
               {( userInfo !== null) ? <div className='icon-wrapper' onClick={popupToggler}>
                <button className="new-post">New Post <BsPlusCircleFill size={20} /> </button>
                </div> : ''}
            </div>
            {isPopupOpen && <PopupCreatePost isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>}
        </StyledBanner>
    );
};

export default Banner;
