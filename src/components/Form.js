import React from 'react'
import styles from 'styled-components'

const Div = styles.div`
    background: var(--primary);
    border-radius: 5px;
    box-shadow: 5px 4px 5px var(--gray);    
`

export default function Form(props) {
    return(
        <Div>       
            {props.children}    
        </Div>
    )
}