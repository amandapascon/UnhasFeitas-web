import React from 'react'
import styles from 'styled-components'

//importando componetes
import PageDefault from '../components/PageDefault'

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

export default function Home(){
  return(
    <PageDefault>
      <DivTalk>
        <P>Ver Solicitações</P>
      </DivTalk>
      <br></br>
      <DivTalk>
        <P>Ver Check-ins</P>
      </DivTalk>
      <br></br>
      <DivTalk>
        <P>Cadastrar Horários</P>
      </DivTalk>
      <br></br>
      <DivTalk>
        <P>Visualizar Clientes</P>
      </DivTalk>
    
    </PageDefault>
  )
}

