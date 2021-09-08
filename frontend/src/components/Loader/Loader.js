import React from 'react';
import styled from 'styled-components';
const Loader = () => {
    return (
        <Div className='loader-wrapper'>
            <div className='loader-container'>
                <h1 className='lt'>&lt;</h1>
                <h1 className='loader'>/</h1>
                <h1 className='lt' id='ltNd'>
                    &lt;
                </h1>
            </div>
        </Div>
    );
};

export default Loader;

const Div = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
    
    color: #000;
    .loader-container {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        h1 {
            font-size: 4em;
            font-weight: 700;
        }
    }
    .lt {
        width: 150px;
        position: absolute;
    }
    #ltNd {
        transform: rotateZ(180deg);
    }
    .loader {
        background: -webkit-linear-gradient(45deg, red, orange);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: absolute;
        transform: rotateX(0deg);
        transform-style: preserve-3d;
        animation: loading 1s ease-in-out infinite;
    }

    @keyframes loading {
        0% {
            transform: rotateX(0deg);
        }
        50% {
            transform: rotateX(180deg);
        }
        100% {
            transform: rotateX(360deg);
        }
    }
`;
