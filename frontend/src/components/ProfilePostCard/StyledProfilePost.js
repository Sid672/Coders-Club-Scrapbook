// import styled from 'styled-components';

// export const StyledProfilePost = styled.section`
//     /* padding: 20px 15px;
//     background: #fff;
//     border-radius: 2px;
//     display: inline-block;
//     height: max-content;
//     position: relative;
//     width: 300px;
//     box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); */

//     background: #fefefe;
//     border: 2px solid #fcfcfc;
//     box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
//     margin: 0 2px 15px;
//     padding: 15px;
//     padding-bottom: 10px;
//     display: inline-block;
//     border-radius: 14px;
//   column-break-inside: avoid;

//     h3 {
//         color: black;
//     }

//     .post-header {
//         display: flex;
//         align-items: center;
//         margin-bottom: 15px;
//         .user-image {
//             margin-right: 14px;
//         }

//         .header-text-wrapper {
//             .username {
//                 ::before {
//                     content: '@';
//                 }
//             }
//             .time {
//                 color: #838383;

//             }
//         }
//     }

//     .post-text {
//         word-wrap: break-word	;

//     }

//     .post-footer {
//         margin-top: 10px;
//         .tag {
//             display: inline-flex;
//             margin-right: 10px;
//             color: #5858e4;
//             font-weight: 500;
//         }
//     }
// `;

import styled from 'styled-components';

export const StyledProfilePost = styled.section`
    /* padding: 20px 15px;
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    height: max-content;
    position: relative;
    width: 300px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); */

    background: #fefefe;
    border: 2px solid #fcfcfc;
    box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
    margin: 0 2px 15px;
    padding: 15px;
    padding-bottom: 10px;
    display: inline-block;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.875em;
    -webkit-column-break-inside: avoid;
    -moz-column-break-inside: avoid;

    :hover {
        .post-header {
            .header-text-wrapper {
                .delete-icon {
                    width: 50px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: transparent;
                    position: absolute;
                    top: -10px;
                    border-radius: 100px;
                    right: -10px;
                    transition: all 0.3s;

                    :hover {
                        background-color: #0000007d;
                        color: red;
                    }
                }
            }
        }
    }
    h3 {
        color: black;
    }

    .post-header {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        position: relative;

        .user-image {
            margin-right: 14px;
        }

        .header-text-wrapper {
            .delete-icon {
                display: none;
                @media only screen and (max-width: 600px) {
                    width: 50px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: transparent;
                    position: absolute;
                    top: -10px;
                    border-radius: 100px;
                    right: -10px;
                    transition: all 0.3s;
                }
            }

            .username {
                ::before {
                    content: '@';
                }
            }
            .time {
                color: #838383;
            }
        }
    }

    .post-text {
        word-wrap: break-word;
    }

    .post-footer {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        .tag-container {
            margin-right: 10px;
            margin-top: 10px;
            display: flex;
            align-items: center;
            background-color: #cbbcf6;
            padding: 5px 10px;
            border-radius: 10px;
            p {
                margin-right: 5px;
            }
        }
    }
`;
