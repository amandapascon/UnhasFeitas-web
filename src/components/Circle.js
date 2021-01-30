import React from 'react'
import styles from 'styled-components'
import TextField from '@material-ui/core/TextField';

const Circulo = styles.div`
    border-radius: 50%;
    height: 100px;
    width: 100px;
    border: 2px solid #000000;

    background-color: --var(primary);

    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Circle(props) {
    return(   
        <Circulo>
            {props.children}
        </Circulo>
    )
}
