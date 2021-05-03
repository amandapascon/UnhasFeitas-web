import React from 'react'
import styles from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonLink = styles.button`
    background: ${props => props.color};
    color: ${props => props.textcolor};

    cursor: pointer;
    font-size: 20px;
    font-family: 'Text Me One', sans-serif;
    outline: none;
    padding: 16px 24px;
    text-decoration: none;

    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0px 2px 5px var(--darkgrey);

    display: flex;
    justify-content: center;
    align-items: center;
    
    transition: opacity .3s;
    &:hover,
    &:focus {
        opacity: .8;
      }
`

const Div = styles.div`
      margin-bottom: 5%;
`

export default function Button(props){
    return(
    <Div >
        <ButtonLink as={Link} to={props.to} onClick={props.onClick} textcolor={props.textcolor} color={props.color}>
            {props.children}
        </ButtonLink>
    </Div>    
    )
}