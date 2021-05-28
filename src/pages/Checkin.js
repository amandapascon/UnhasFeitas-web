import React from 'react'
import styles from 'styled-components'

import PageDefault from '../components/PageDefault'
import MiniParagraph from '../components/MiniParagraph'

const P = styles.h1`
  text-align: center;
  margin: 10 auto;
  font-size: 2.5vh;
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

    cursor: pointer;
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

  margin-bottom: 5%;
`

export default function Checkin() {
    return(
        <PageDefault>
            <MiniParagraph>CHECK-IN</MiniParagraph>
            <DivTalk>
                <P>
                    Amanda Pascon <br></br>
                    Pé e Mão <br></br>
                    12/10/2021 - 09h30
                </P>
                <Subtitle>Realizar Check-in</Subtitle>
            </DivTalk>
            <DivTalk>
                <P>
                    Amanda Pascon <br></br>
                    Pé e Mão <br></br>
                    12/10/2021 - 09h30
                </P>
                <Subtitle>Realizar Check-in</Subtitle>
            </DivTalk>
            
        </PageDefault>
    )
}