import React from 'react'
import styles from 'styled-components'

const DivWrapper = styles.div`
    background: var(--lightgrey);
    opacity: 0.7;

    padding: 10px 50px;

    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0px 2px 5px var(--darkgrey);

    display: flex;
    flex-direction: column;
    
    margin: 10%;
`

export default function Div(props){
    return(
        <DivWrapper>
            {props.children}
        </DivWrapper>
    )
}