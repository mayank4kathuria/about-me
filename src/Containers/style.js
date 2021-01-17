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
        // flex: 1;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: -2px 0px 3px 0px #ffffff;

        // &:hover {
        //     width: 75%;
        //     height: 75%;
        // }
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
        font-weight: 400;
    }

    .description-line{

    }

    .dp-section{
        flex: 1;
    }
`;


export const AboutMeSection = styled.div`
    background-color: #15202b;
    color: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .feed-container{
        height: 100%;
        min-width: 450px;
        max-width: 70%;
    }
    
`;

export const MyExperienceSection = styled.div`

`;

export const ContactMeSection = styled.div`

`;