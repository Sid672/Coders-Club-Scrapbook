import styled from 'styled-components';

export const StyledCard = styled.section`
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

    h3 {
        color: black;
    }

    .post-header {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        .user-image {
            margin-right: 14px;
            width: 60px;
            height: 60px;
            border-radius: 1000px;
            object-fit: cover;
        }

        .header-text-wrapper {
            a {
                text-decoration: none;
                .username {
                    ::before {
                        content: '@';
                    }
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
    .post-image {
        width: 100%;
        height: auto;
        margin: 14px 0;
        object-fit: contain;
        transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        :hover{
            transform: scale(1.03);
        }

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
