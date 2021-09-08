import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 100px;
    .header__logo-container {
        img {
        }
    }

    .header__button-container {
        button {
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
            ::after {
                content: '';
                display: block;
                width: 0;
                height: 1.8px;
                background: #ffff;
                transition: width 0.3s;
                border-radius: 10px;
            }

            :hover::after {
                width: 100%;
                cursor: pointer;

            }
        }

        .sign-in {
            background-color: transparent;

            /* ::after {
                content: '';
                display: block;
                width: 0;
                height: 2px;
                background: #ffff;
                transition: width 0.3s;
            }

            :hover::after {
                width: 100%;
                cursor: pointer;

            } */
        }

        .sign-up{
            :hover{
                cursor: pointer;
            }
        }
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
