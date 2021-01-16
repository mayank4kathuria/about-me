import React from 'react';
import GlobalHeader from 'src/Components/Header';
import { Wrapper, MainSection, AboutMeSection, MyExperienceSection, ContactMeSection, } from './style';
import profilePicture from 'src/assets/Images/profile-picture.jpg';

const LandingPage = (props) => {
    return (
        <Wrapper className='container'>
            <GlobalHeader />
            <MainSection className={'intro-div'} >
                <div className='display-picture' style={{ backgroundImage: `url(${profilePicture})` }} ></div>
                <div className='centered flex text-section'>
                    <div className='intro-text'>
                        <p className='font-32'>Hi I'm Mayank</p>
                        <p className='font-24' >{"I <3 "}</p>
                    </div>
                </div>
                {/* <img src={profilePicture} /> */}
            </MainSection>
            {/* <AboutMeSection className={'intro-div'}>
                <span>About me section</span>
                <span>{"I <3 "}</span>
            </AboutMeSection>
            <MyExperienceSection className={'intro-div'}>
                <span>Coming soon</span>
            </MyExperienceSection>
            <ContactMeSection className={'intro-div'}>
                <span>Coming soon</span>
            </ContactMeSection> */}
        </Wrapper >);
}

export default LandingPage;