import React from 'react';
import GlobalHeader from  '../Components/Header';
import { Wrapper, MainSection } from  './style';

const LandingPage = (props) => {
    return ( 
    <Wrapper className='container'>
        <GlobalHeader />
        <MainSection className={'intro-div'}>
            <span>Hi I'm Mayank</span>
            <span>{"I <3 "}</span>
        </MainSection>
    </Wrapper> );
}
 
export default LandingPage;