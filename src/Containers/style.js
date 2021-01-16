import styled from 'styled-components';

export const Wrapper = styled.div`

    &.container{
        height: 100%;
        width: 100%;
    }
`;

export const MainSection = styled.div`
    height: 100%;
    width: 100%;

    &.intro-div{
        display: flex;
        // background-color: ivory;
        background-color: #0e0e0e;
    }

    .display-picture{
        flex: 1;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .text-section{
        flex: 1;
    }

    .flex {
        display: flex;
    }

    .centered{
        justify-content: center;
        align-items: center;
    }

    .intro-text{
        background-color: #091e37;
        background-colour: #fff;
        color: #fff;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-weight: bold;
        text-size: 16px;
        line-height: 0.3;
    }

    .font-32{
        font-size: 32px;
        font-weight: 600;
    }

    .font-24{
        font-size: 24px;
    }
`;


export const AboutMeSection = styled.div`

`;

export const MyExperienceSection = styled.div`

`;

export const ContactMeSection = styled.div`

`;