import React, { Fragment, useEffect } from 'react';
import { StyledProfile } from './StyledProfile';
import profilePicBackup from '../../images/profile.png';
import { connect, useDispatch, useSelector } from 'react-redux';
import ProfilePostCard from '../ProfilePostCard';
import { getUserDetails } from '../../actions/userActions';
import Loader from '../Loader/Loader';
const Profile = (props) => {
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails);

    const { loading, user, error } = userDetails;
    console.log(userDetails);
    useEffect(() => {
        dispatch(getUserDetails());
    }, []);



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
                                    <h4>{intr}</h4>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='user-posts'>
                        {user.posts.map((post, idx) => (
                            <ProfilePostCard
                                text={post.text}
                                image='http://placehold.it/32x32'
                                tags={post.tags}
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
