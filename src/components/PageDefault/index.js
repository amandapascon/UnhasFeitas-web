import React from  'react'

import Header from '../Header'

import styled from 'styled-components'
import Footer from '../Footer';

const Main = styled.main` 
    background-color: var(--graylight);
    display: flex;
    flex-direction: column;
    height:100vh;
    padding:40vh;
    text-align: center;

    @media(max-width: 800px){
        padding:10vh;
    }
`;

export default function PageDefault ({children}){
    return(
        <>
        <Header/>
        <Main>
            {children}
        </Main>  
        <Footer/> 
        </>
    )
}