import React from 'react';
import styles from 'styled-components'

const Menu = styles.nav`
    width: 100%;
    height: 94px;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;
  
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background: var(--pink);
    box-shadow: 0px -5px 15px var(--black);
`
const P = styles.p`
    font-weight: bold;
    font-size: 40px;
    font-family: 'Playlist', sans-serif;
    color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Header (){
    return(
        <Menu>
            <P>Unhas Feitas</P>
        </Menu>
    )
}
