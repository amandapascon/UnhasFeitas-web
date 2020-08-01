import React from 'react'
import styles from 'styled-components'

const Div = styles.div`
    background: var(--primary);
    border-radius: 5px;
    box-shadow: 5px 4px 5px var(--gray);
    margin 0 8%;
`

export default function Form(props) {
    return(
        <Div>            
            <form>
                {props.children}
            </form>
        </Div>
    )
}