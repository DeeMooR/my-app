import styled from 'styled-components';

export const BackgroundImage = styled.div<{ image: string }>`
    position: absolute;
    inset: 0px;
    background: url(${props => props.image}) center center / cover no-repeat;
    opacity: 0.7;

    &:before {
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 0.1;
        background: rgb(39, 39, 42);
    }
    &:after {
        content: '';
        position: absolute;
        inset: 0px;
        background: linear-gradient(180deg, rgba(0, 0, 0) 0%, rgba(0, 0, 0, 0.00) 23.56%);
    }
`;