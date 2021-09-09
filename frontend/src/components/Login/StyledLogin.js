import styled from 'styled-components';

export const StyledLogin = styled.main`
    .image-container {
        position: relative;
        width: 50%;
        @media only screen and (max-width: 750px) {
            width: 100%;
        }
        .blur {
            width: 100%;
            height: 100%;
            position: absolute;
        }
        img {
            width: 100%;
        }
    }

    .form-container {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: 750px) {
            width: 100%;
            position: relative;
            padding-top: 50px;
        }
        .text-container {
            width: 70%;
            max-width: 600px;

            .form-header {
                .heading-main {
                    font-family: 'Raleway';
                    font-size: 40px;
                    font-weight: 700;
                }

                .sub-heading {
                    margin-top: 8px;

                    font-family: 'Raleway';
                    span {
                        color: #0d0735;
                        font-weight: 600;
                    }
                }
            }

            .social-buttons {
            }

            .form-fields {
                margin-top: 50px;
                .email-field {
                    label {
                        display: block;
                    }
                    input {
                        width: 100%;
                        border-radius: 6px;
                        border: 2px solid black;
                        box-sizing: border-box;
                        outline: none;
                        padding: 12px 20px;
                        margin: 8px 0;
                        font-size: 20px;

                        :focus {
                            outline: none;
                            border: 2px solid #0d0735;
                        }
                    }
                }
                .password-field {
                    margin-top: 15px;
                    label {
                        display: block;
                    }

                    input {
                        width: 100%;
                        border-radius: 6px;
                        border: 2px solid black;
                        box-sizing: border-box;
                        outline: none;
                        padding: 12px 20px;
                        margin: 8px 0;
                        font-size: 20px;

                        :focus {
                            outline: none;
                            border: 2px solid #0d0735;
                        }
                    }
                }

                p {
                    margin-bottom: 50px;
                    text-align: right;
                }

                .submit {
                    background-color: #0d0735;
                    height: 50%;
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    font-family: 'Noto Sans', sans-serif;
                    border-radius: 10px;
                    width: 100%;

                    @media only screen and (max-width: 600px) {
                        margin-bottom: 100px;
                    }
                }
            }
        }
    }
`;
