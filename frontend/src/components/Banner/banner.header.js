import styled from 'styled-components';

export const StyledBanner = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 100px;
    color: white;
    padding-top: 100px;

    .banner__text-container {
        h1 {
            font-size: 50px;
            font-family: 'Raleway';
        }
        h2 {
            font-family: 'Raleway';
            font-weight: 100;
        }
    }

    .banner__links-container {
        .icon-wrapper {
            color: black;
        }
        .new-post {
            cursor: pointer;
            box-shadow: -1px 3px 3px 0 rgba(80, 80, 80, 0.2);
            width: 155px;
            height: 50px;
            padding: 17px;
            border: none;
            border-radius: 10px;
            margin: 0 10px 40px;
            color: #000;
            font-weight: bold;
            flex: 0 0 auto;
            background: #cbbcf6;
            transition: all 0.16s ease-in;
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            :hover {
                background: #0d0735;
                color: #fff;

                box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
            }
        }
    }
`;
