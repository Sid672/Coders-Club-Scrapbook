import React, { Fragment, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import ProfilePostCard from '../ProfilePostCard';
import { getUserDetailsById } from '../../actions/userActions';
import { StyledProfile } from '../Profile/StyledProfile';
import Loader from '../Loader/Loader';
const AllUsersProfile = ({ location, match }) => {
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails);

    const { loading, user, error } = userDetails;
    useEffect(() => {
        dispatch(getUserDetailsById(match.params.username));
    }, [match, dispatch]);

 
    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <StyledProfile>
                    <div className='user-info-container'>
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
                            <div className='icon-container'>
                                <p>Facebook</p>
                                <p>Instagram</p>
                                <p>LinkedIn</p>
                            </div>
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
                            />
                        ))}
                    </div>
                    <div className='bg-gradient'></div>
                </StyledProfile>
            )}
        </Fragment>
    );
};

export default React.memo(AllUsersProfile);
