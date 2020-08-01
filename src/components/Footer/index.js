import React from 'react';
import styles from 'styled-components'

const FooterWrapper = styles.nav`
    width: 100%;
    height: 34px;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;
  
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;

    background: var(--black);
    border-top: 2px solid var(--primary);
    font-family: 'ABeeZee', sans-serif;
`
const P = styles.p`
    font-weight: bold;
    font-size: 10px;
    color: var(--primary);
`

export default function Footer (){
    return(
        <FooterWrapper>
            <P>by Amanda Pascon</P>
        </FooterWrapper>
    )
}
