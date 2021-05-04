import React from 'react'
import styles from 'styled-components'

import PageDefault from '../components/PageDefault'
import MiniParagraph from '../components/MiniParagraph'

const P = styles.h1`
  text-align: center;
  margin: 10 auto;
  font-size: 2.5vh;
  text-transform: uppercase;
  color: var(--white);
  font-family: 'Text Me One', sans-serif;

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

`
const Subtitle = styles.span`
    background: var(--primary);
    color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding: 8px;
    font-size: 2vh;
    font-family: 'Text Me One', sans-serif;
`
const DivTalk = styles.div`
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px var(--darkgrey);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--pink);
  width: 80%;
`

export default function Historic() {
    return(
        <PageDefault>
            <MiniParagraph>HISTÓRICO ATUAL</MiniParagraph>
            <DivTalk>
                <P>12/10/2021 - 09h30</P>
                <Subtitle>Pé e Mão</Subtitle>
            </DivTalk>
            <br></br>
            <DivTalk>
                <P>12/10/2021 - 09h30</P>
                <Subtitle>Pé e Mão</Subtitle>
            </DivTalk>
            <br></br>
            <DivTalk>
                <P>12/10/2021 - 09h30</P>
                <Subtitle>Pé e Mão</Subtitle>
            </DivTalk>
            
        </PageDefault>
    )
}