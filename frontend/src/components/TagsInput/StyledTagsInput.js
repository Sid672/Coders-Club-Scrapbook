import styled from 'styled-components';

export const StyledTagsInput = styled.div`
    color: black;
    width: 100%;

    .tags-container {
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

    /* input[type='text'] {
        margin-top: 20px;
        font-size: 18px;
        padding: 5px;
    } */

    .form-group {
        display: flex;
        max-width: 270px;
        margin-top: 18px;
        --input-color: #99a3ba;
        --input-border: #cdd9ed;
        --input-background: #fff;
        --input-placeholder: #cbd1dc;

        --input-border-focus: #cbbcf6;

        --group-color: var(--input-color);
        --group-border: var(--input-border);
        --group-background: #eef4ff;

        --group-color-focus: #000;
        --group-border-focus: var(--input-border-focus);
        --group-background-focus: #cbbcf6;
        .form-field {
            display: block;
            padding: 8px 16px;
            line-height: 25px;
            font-size: 14px;
            font-weight: 500;
            font-family: inherit;
            border-radius: 6px;
            -webkit-appearance: none;
            color: var(--input-color);
            border: 1px solid var(--input-border);
            background: var(--input-background);
            transition: border 0.3s ease;
            &::placeholder {
                color: var(--input-placeholder);
            }
            &:focus {
                outline: none;
                border-color: var(--input-border-focus);
            }
        }
      
        & > span,
        .form-field {
            white-space: nowrap;
            display: block;
            &:not(:first-child):not(:last-child) {
                border-radius: 0;
            }
            &:first-child {
                border-radius: 6px 0 0 6px;
            }
            &:last-child {
                border-radius: 0 6px 6px 0;
            }
            &:not(:first-child) {
                margin-left: -1px;
            }
        }
        .form-field {
            position: relative;
            z-index: 1;
            flex: 1 1 auto;
            width: 1%;
            margin-top: 0;
            margin-bottom: 0;
        }
        & > span {
            text-align: center;
            padding: 8px 12px;
            font-size: 14px;
            line-height: 25px;
            color: var(--group-color);
            background: var(--group-background);
            border: 1px solid var(--group-border);
            transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
        }
        &:focus-within {
            & > span {
                color: var(--group-color-focus);
                background: var(--group-background-focus);
                border-color: var(--group-border-focus);
            }
        }
    }
`;
