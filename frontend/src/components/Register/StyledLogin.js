import styled from 'styled-components';

export const StyledLogin = styled.main`
    @media only screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
    }
    .image-container {
        position: relative;
        width: 50%;
        @media only screen and (max-width: 750px) {
            width: 100vw;
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
            
            @media only screen and (max-width: 750px) {
                width: 90%;

        }
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
                        margin-bottom: 50px;

                        :focus {
                            outline: none;
                            border: 2px solid #0d0735;
                        }
                    }
                }
                .name-field {
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
                        margin-bottom: 20px;

                        :focus {
                            outline: none;
                            border: 2px solid #0d0735;
                        }
                    }
                }

                .username-image-wrapper {
                    display: flex;
                    flex-direction: row-reverse;
                    justify-content: space-between;
                    align-items: center;
                    .username-field {
                        margin-top: 15px;
                        width: 70%;

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
                            margin-bottom: 20px;

                            :focus {
                                outline: none;
                                border: 2px solid #0d0735;
                            }
                        }
                    }

                    .image-field {
                        color: transparent;
                        transition: all 0.3s ease;
                        position: relative;
                        justify-content: center;
                        align-items: center;
                        display: flex;

                        label {
                            width: 100px;
                            height: 100px;
                            z-index: 1;
                            border-radius: 1000px;

                            &:hover {
                                background-color: rgba(0, 0, 0, 0.8);
                                transition: background-color 0.2s ease-in-out;

                                span {
                                    display: inline-flex;
                                    padding: 0.2em;
                                    height: 2em;
                                    color: #fff;
                                    display: flex;
                                    text-align: center;
                                    font-size: 14px;
                                }
                            }
                        }
                        input {
                            display: none;
                        }

                        img {
                            position: absolute;
                            object-fit: cover;
                            width: 100px;
                            height: 100px;
                            box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
                            border-radius: 1000px;
                            z-index: 0;
                        }
                    }
                }

                p {
                    text-align: right;
                }

                .bio-field {
                    label {
                        display: block;
                    }

                    textarea {
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

                .interest-field {
                    label {
                        margin-bottom: 8px;
                    }
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

                .two {
                    margin-top: 50px;
                    
                    @media only screen and (max-width: 600px) {
                        margin-bottom: 100px;
                    }
                }
            }
        }
    }
`;
