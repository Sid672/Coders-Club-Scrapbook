import React from 'react';
import styled from 'styled-components';

const NotFound = ({ error }) => {
    return (
        <Div>
            <h1>{error || 'Not Found Anything'}</h1>
            <h1 className='title'>404</h1>
        </Div>
    );
};

export default NotFound;
const Div = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: 100px;
    .title {
        font-size: 300px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        @media only screen and (max-width: 750px) {
            font-size: 150px;
    }
    }
`;
