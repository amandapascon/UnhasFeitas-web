import React from 'react'
import styles from 'styled-components'
import TextField from '@material-ui/core/TextField';

const LabelLink = styles.label`
    align-items: center;   
    display: flex;
    flex-direction: column;

    margin: 5%;
`

export default function Label(props) {
    return(   
        <LabelLink>
            <TextField id={props.id} label={props.label} variant="filled" />
        </LabelLink> 
    )
}