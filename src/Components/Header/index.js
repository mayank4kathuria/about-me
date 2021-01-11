import React from 'react';
import { Wrapper, HeaderSection, Tab } from './style';

const GlobalHeader = (props) => {
    return (
        <Wrapper>
            <HeaderSection >
                <Tab>Home</Tab>
                <Tab>Resume</Tab>
                <Tab>Projects</Tab>
                <Tab>Contact Me</Tab>
            </HeaderSection>
        </Wrapper>);
}

export default GlobalHeader;