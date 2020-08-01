import React from 'react'
import styles from 'styled-components'

const LabelLink = styles.label`
    align-items: center;   
    display: flex;
    flex-direction: column;

    margin: 5%;
    `
    
const Input = styles.input`
    background-color: var(--primary);
    border-radius: 5px;
    box-shadow: 5px 4px 5px var(--gray);
    outline: none;
    padding: 10px 24px;
    

`

export default function Label(props) {
    return(      
        <LabelLink>
            <Input type='text' id={props.id} name={props.name} label={props.label}/>
        </LabelLink>
    )
}