import React from 'react';
import styles from 'styled-components'

import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const LogoLink = styles.img`
    max-width: 80px;

    @media (max-width: 800px) {
        .Logo {
          max-width: 105px;
        }
`
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
    padding-left: 5%;
    padding-right: 5%;

    background: var(--primary);
    border-bottom: 2px solid var(--gray);
`
const P = styles.p`
    font-weight: bold;
    font-size: 30px;
    font-family: 'Knewave', cursive;
`

export default function Header (){
    return(
        <Menu>
            <Link to='/'>
                <LogoLink className="Logo" src={Logo} alt="Logo"/>
            </Link>
            <P>Unhas Feitas</P>
        </Menu>
    )
}
