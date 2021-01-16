import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    
`;

export const HeaderSection = styled.div`
    height: 54px;
    position: sticky;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #000;
    // background-color: #fdf5e69e;
    background-color: #0e0e0e;
`;

export const Tab = styled.div`
    color: #fff;
    width: 12.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 16px 60px;
    text-align: center;
    border: 1px solid #0e0e0e;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;


    &:hover{
        background-color: #474950;
        border-radius: 28px;
        font-size: 16px;
        font-weight: 600;
        
    }
    

`;

