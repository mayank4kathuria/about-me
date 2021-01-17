import React from 'react';
import GlobalHeader from 'src/Components/Header';
import { Wrapper, MainSection, AboutMeSection, MyExperienceSection, ContactMeSection, } from './style';
import profilePicture from 'src/assets/Images/profile-picture.jpg';

const LandingPage = (props) => {
    return (
        <Wrapper className='container'>
            <GlobalHeader />
            {/* <MainSection className={'intro-div'} >
                <div className='flex centered dp-section'>
                    <div className='display-picture' style={{ backgroundImage: `url(${profilePicture})` }} ></div>
                </div>
                <div className='centered flex text-section'>
                    <div className='intro-text'>
                        <p className='font-32'>Hi I'm Mayank Kathuria</p>
                        <p className='font-24 description-line' >{"I <3 Creating Stuff"}</p>
                    </div>
                </div>
            </MainSection> */}
            <AboutMeSection className={'intro-div'}>
                <div className='feed-container'>
                    <div className='tweet-box'>
                        <div className='tweet-picture'></div>
                        <div className='information-container'>
                            <div>
                                <span>About me section</span>
                                <span>{"I <3 "}</span>
                            </div>
                            <div className='tweet-analytics'></div>
                        </div>
                    </div>
                </div>
            </AboutMeSection>
            {/*<MyExperienceSection className={'intro-div'}>
                <span>Coming soon</span>
            </MyExperienceSection>
            <ContactMeSection className={'intro-div'}>
                <span>Coming soon</span>
            </ContactMeSection> */}
        </Wrapper >);
}

export default LandingPage;