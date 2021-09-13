import styled from 'styled-components';

export const StyledCreatePost = styled.div`
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .overlay {
        background-color: #00000075;
        width: 100vw;
        height: 100vh;
        position: fixed;

        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
    }
    .card {
        background-color: white;
        width: 500px;
        height: min-content;
        padding: 50px;
        position: relative;
        min-height: 200px;
        box-sizing: border-box;
        textarea {
            /* box-sizing: padding-box; */
            overflow: hidden;
            /* demo only: */
            width: 100%;
            font-size: 20px;
            display: block;
            margin-bottom: 30px;

            border: white 0px;
            outline-offset: 0px;
            outline: none;

            :focus {
                border: white 0px;
                outline-offset: 0px;
                outline: none;
            }
        }

        .input-container {
            color: black;
            width: 100%;
            height: 30px;
            border: 1px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            h4 {
                margin-left: 30px;
                color: black;
                text-align: center;
            }
            .upload-input {
                width: 100%;
                height: 100%;
                border-radius: 6px;
                border: 2px solid black;
                box-sizing: border-box;
                outline: none;
                padding: 12px 20px;
                margin: 8px 0;
                position: absolute;
                opacity: 0; /* make transparent */
                font-size: 20px;
            }
        }

        .wrapper-tag-btn {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            .btn-container {
                button {
                    cursor: pointer;
                    box-shadow: -1px 3px 3px 0 rgba(80, 80, 80, 0.2);
                    padding: 17px;
                    border: none;
                    border-radius: 10px;
                    color: #000;
                    font-weight: bold;
                    flex: 0 0 auto;
                    background: #cbbcf6;
                    transition: all 0.16s ease-in;
                    display: flex;
                    width: 100px;
                    justify-content: center;

                    :hover {
                        background: #0d0735;
                        color: #fff;

                        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
                    }
                }
            }
        }
    }
`;
