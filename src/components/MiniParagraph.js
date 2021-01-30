import React from 'react'
import styles from 'styled-components'

const P = styles.p`
    font-weight: bold;
    font-size: 20px;
    font-family: 'Text Me One', sans-serif;
    color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function MiniParagraph(props){
    return(
        <P>
            {props.children}
        </P>
    )
}