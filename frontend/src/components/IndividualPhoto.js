import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const IndividualPhoto = ({ match }) => {
    return (
        <Div>
            <img src={`/api/v1/upload/${match.params.id}`} alt='' />
        </Div>
    );
};

export default IndividualPhoto;

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    img {
        width: 50%;
        height: auto;
        max-height: 100vh;
        object-fit: contain;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;
