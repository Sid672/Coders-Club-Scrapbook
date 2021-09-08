import styled from 'styled-components';

export const StyledProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .user-info-container {
        width: 90%;
        margin: 0 auto;
        color: #000;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 10px 100px;
        background-color: white;
        padding: 30px 0 50px 0;
        border-radius: 15px;

        @media only screen and (max-width: 750px) {
            width: 90%;
            margin: 10px auto;
        }
        .text-section {
            /* max-width: 1000px; */
            width: 70%;
            @media only screen and (max-width: 750px) {
                width: 60%;
                margin-left: 30px;
            }
            .name-container {
                color: black;

                h1 {
                }

                h3 {
                    color: #01002aa0;
                }
            }

            .icon-container {
                display: flex;

                p {
                    margin-right: 20px;
                }
            }

            .bio-container {
                margin-top: 20px;
                p {
                    color: #949494;
                }
            }

            .intrest-container {
                margin-top: 15px;

                h3 {
                    margin-bottom: 15px;
                    color: black;
                }

                h4 {
                    background-image: linear-gradient(135deg, #432b58, #734b6f);
                    display: inline;
                    margin-right: 20px;
                    padding: 8px 16px;
                    border-radius: 30px;
                    color: white;
                }
            }
        }
    }

    .img-section {
        .img-container {
            img {
                border-radius: 10000px;
                width: 200px;
                @media only screen and (max-width: 750px) {
                    width: 150px;
                }
            }
        }
    }

    .user-posts {
        column-width: 300px;
        column-gap: 15px;
        width: 90%;
        max-width: 1100px;
        margin: 50px auto;
    }
    .bg-gradient {
        position: fixed;
        z-index: -10;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vw;
        background-image: linear-gradient(135deg, #432b58, #734b6f);
    }
`;
