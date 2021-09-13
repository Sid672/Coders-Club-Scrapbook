import React, { Fragment, useEffect, useState } from 'react';
import { StyledProfile } from './StyledProfile';
import profilePicBackup from '../../images/profile.png';
import { connect, useDispatch, useSelector } from 'react-redux';
import ProfilePostCard from '../ProfilePostCard';
import { getUserDetails } from '../../actions/userActions';
import Loader from '../Loader/Loader';
import { deletePost } from '../../actions/postActions';
import PopupUpdateProfile from '../PopupUpdateProfile/PopupUpdateProfile';
import { AiFillEdit } from 'react-icons/ai';
const Profile = (props) => {
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails);

    const { loading, user, error } = userDetails;
    useEffect(() => {
        dispatch(getUserDetails());
    }, [dispatch]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupToggler = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <StyledProfile>
                    {isPopupOpen && (
                        <PopupUpdateProfile
                            defaultName={user.name}
                            defaultBio={user.bio}
                            defaultInterests={user.interests}
                            defaultProfileImage={user.profileImage}
                            popupToggler={popupToggler}
                            setIsPopupOpen={setIsPopupOpen}
                        />
                    )}
                    <div className='user-info-container'>
                        <div className='icon-container' onClick={popupToggler}>
                            <AiFillEdit size={30} />
                        </div>
                        <div className='img-section'>
                            <div className='img-container'>
                                <img src={`${user.profileImage}`} alt='' />
                            </div>
                        </div>
                        <div className='text-section'>
                            <div className='name-container'>
                                <h1 className='name'>{user.name}</h1>
                                <h3 className='username'>@{user.username}</h3>
                            </div>
                            {
                                //     <div className='icon-container'>
                                //     <p>Facebook</p>
                                //     <p>Instagram</p>
                                //     <p>LinkedIn</p>
                                // </div>
                                // </div>
                                // </div>
                                // </div>
                            }
                            <div className='bio-container'>
                                <p className='bio'>{user.bio}</p>
                            </div>

                            <div className='intrest-container'>
                                <h3>Intrests</h3>
                                {user.interests.map((intr, idx) => (
                                    <h4 key={idx}>{intr}</h4>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='user-posts'>
                        {user.posts.map((post, idx) => (
                            <ProfilePostCard
                                text={post.text}
                                tags={post.tags}
                                createdAt={post.createdAt}
                                _id={post._id}
                                isDelete={true}
                                key={post._id}
                            />
                        ))}
                    </div>
                    <div className='bg-gradient'></div>
                </StyledProfile>
            )}
        </Fragment>
    );
};

const mapDispatchToProps = (dispatch) => ({
    getUserDetails: () => dispatch(getUserDetails()),
});

export default React.memo(connect(null, mapDispatchToProps)(Profile));
