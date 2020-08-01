import React from  'react'

import Header from '../Header'

import styles from 'styled-components'
import Footer from '../Footer';

const Main = styles.main` 
    background-color: var(--graylight);
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 5%;
    padding-top: 94px;
    padding-bottom: 34px;
`;

const Div = styles.div`
    display: flex;
    flex-direction: column;
    margin auto 0;
    text-align: center;
`

export default function PageDefault ({children}){
    return(
        <>
        <Header/>
            <Main>
                <Div>
                    {children}
                </Div>
            </Main>  
        <Footer/> 
        </>
    )
}