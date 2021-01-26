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
                    <div className='tweet-box flex'>
                        <div className='tweet-picture'></div>
                        <div className='information-container'>
                            <div>
                                <div className='tweet-account-info'>
                                    <a href='https://twitter.com/mayank2coolz' className='name' target='_blank' >Mayank Kathuria</a>
                                    <span className='u-name'>@mayank2coolz</span>
                                    <span className='date'>Oct 2, 20</span>
                                </div>
                                <div className='tweet-content'>
                                    <span>About me section which will get the whole information and achievement 
                                        for my journey

                                    </span>
                                    {/* <span>{"I <3 "}</span> */}
                                </div>
                                <div className='interactive-icons' >
                                    <div className='icons'>
                                        <span className='icon' >1</span>
                                        <span className='icon' >2</span>
                                        <span className='icon' >3</span>
                                    </div>
                                </div>
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