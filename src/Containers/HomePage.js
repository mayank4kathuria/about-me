import React from 'react';
import GlobalHeader from '../Components/Header';
import { Wrapper, MainSection, AboutMeSection, MyExperienceSection, ContactMeSection, } from './style';

const LandingPage = (props) => {
    return (
        <Wrapper className='container'>
            <GlobalHeader />
            <MainSection className={'intro-div'}>
                <span>Hi I'm Mayank</span>
                <span>{"I <3 "}</span>
            </MainSection>
            <AboutMeSection className={'intro-div'}>
                <span>About me section</span>
                <span>{"I <3 "}</span>
            </AboutMeSection>
            <MyExperienceSection className={'intro-div'}>
                <span>Coming soon</span>
            </MyExperienceSection>
            <ContactMeSection className={'intro-div'}>
                <span>Coming soon</span>
            </ContactMeSection>
        </Wrapper>);
}

export default LandingPage;