import React from 'react'
import styles from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonLink = styles.button`
    border-bottom: 1px solid var(--black);
    border-radius: 5px;
    box-shadow: 5px 4px 5px var(--gray);
    box-sizing: border-box;
    background: ${props => props.color};
    color: ${props => props.textcolor};
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
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

const Div = styles.div`
      margin-bottom:15%;
`

export default function Button(props){
    return(
    <Div>
        <ButtonLink as={Link} to={props.to} textcolor={props.textcolor} color={props.color}>
            {props.children}
        </ButtonLink>
    </Div>    
    )
}