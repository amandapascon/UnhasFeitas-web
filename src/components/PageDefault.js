import React from  'react'

import styles from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Main = styles.main` 
    background-color: var(--primary);
    flex-direction: column;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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