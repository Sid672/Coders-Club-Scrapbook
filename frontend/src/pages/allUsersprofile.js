import React from 'react';
import AllUsersProfile from '../components/AllUsersProfile';

import Header from '../components/Header';
const AllUsersProfilePage = ({match}) => {
    return (
        <>
            <Header />
            <AllUsersProfile  match={match}/>
        </>
    );
};

export default AllUsersProfilePage;
