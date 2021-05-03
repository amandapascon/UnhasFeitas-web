import React from 'react';
import styles from 'styled-components'

const FooterWrapper = styles.nav`
    width: 100%;
    height: 50px;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;
  
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    background: var(--pink);
    box-shadow: 0px 5px 15px var(--black);
    font-family: 'Text Me One', sans-serif;

    @media (max-width: 400px) {
        height: 40px;
    }
`
const P = styles.p`
    font-weight: bold;
    font-size: 20px;
    color: var(--black);

    @media (max-width: 400px) {
        font-size: 13px;
    }
`

export default function Footer (){
    return(
        <FooterWrapper>
            <P>BY AMANDA PASCON</P>
        </FooterWrapper>
    )
}
