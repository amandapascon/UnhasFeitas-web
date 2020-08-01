import React from 'react'
import styles from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonLink = styles.button`
    border-bottom: 1px solid var(--black);
    border-radius: 5px;
    box-shadow: 5px 4px 5px var(--gray);
    box-sizing: border-box;
    background: var(--primary);
    color: var(--black);
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin: 5% 0;
    outline: none;
    padding: 16px 24px;
    text-decoration: none;

    margin-left: 20%;
    margin-right: 20%;

    font-family: 'ABeeZee', sans-serif;

    transition: opacity .3s;
    &:hover,
    &:focus {
        opacity: .8;
      }
`

export default function Button(props){
    return(
        <ButtonLink as={Link} to={props.to}>
            {props.children}
        </ButtonLink>
    )
}