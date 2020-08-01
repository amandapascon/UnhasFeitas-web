import React from 'react'
import styles from 'styled-components'

const DivWrapper = styles.div`
    margin-top: 10%;
`

export default function Div(props){
    return(
        <DivWrapper>
            {props.children}
        </DivWrapper>
    )
}