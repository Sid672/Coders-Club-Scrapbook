import React, { Fragment, useEffect, useState } from 'react';
import Card from '../Card';
import { StyledCardGrid } from './cardgrid.styles';
import { useSelector, connect } from 'react-redux';
import { listPosts } from '../../actions/postActions';
import Loader from '../Loader/Loader';

const CardGrid = (props) => {
    const { listPosts } = props;

    const postList = useSelector((state) => state.postList);

    const { loading, posts, error } = postList;
    useEffect(() => {
        listPosts();
    }, []);

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : posts && posts.length !== 0 ? (
                <StyledCardGrid>
                    {posts.map((post, idx) => (
                        <Card
                            key={idx}
                            username={post.userInfo.username}
                            text={post.text}
                            tags={post.tags}
                            profilePhoto={post.userInfo.profileImage}
                            createdAt={post.createdAt}
                        />
                    ))}
                </StyledCardGrid>
            ) : (
                <h1>Error Loading Posts</h1>
            )}
        </Fragment>
    );
};

const mapDispatchToProps = (dispatch) => ({
    listPosts: () => dispatch(listPosts()),
});

export default React.memo(connect(null, mapDispatchToProps)(CardGrid));
