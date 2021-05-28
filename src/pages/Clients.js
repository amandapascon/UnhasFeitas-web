import React, { Component } from 'react'
import styles from 'styled-components'
import Modal from '@material-ui/core/Modal'

import PageDefault from '../components/PageDefault'
import MiniParagraph from '../components/MiniParagraph'
import Div from '../components/DivBox'

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding: 10px;
    font-size: 2.5vh;
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

  margin-bottom: 5%;
  cursor: pointer;
`

const DivPopUp = styles.div`
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

const PopUp = styles.div`
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px var(--darkgrey);
  width: 90%;
  margin: auto;
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--pink);
  border:3px solid var(--primary); 
  color: black;
`
export default class Clients extends Component{
    constructor(props){
        super(props)

        this.state = {
            popup_open: false,
        }
    }

    renderPopUp() {
        return (
          <Modal open={this.state.popup_open} onClose={() => this.setState( { popup_open: false } )}>
            <PopUp>
                <P>Amanda Pascon</P>
                <Subtitle>
                    <DivPopUp>
                        <P>12/03/2021 - 09h30</P>
                        <Subtitle>Pé e Mão</Subtitle>
                    </DivPopUp>
                    <DivPopUp>
                        <P>12/03/2021 - 09h30</P>
                        <Subtitle>Pé e Mão</Subtitle>
                    </DivPopUp>
                    <DivPopUp>
                        <P>12/03/2021 - 09h30</P>
                        <Subtitle>Pé e Mão</Subtitle>
                    </DivPopUp>    
                    <DivPopUp>
                        <P>12/03/2021 - 09h30</P>
                        <Subtitle>Pé e Mão</Subtitle>
                    </DivPopUp>
                    <DivPopUp>
                        <P>12/03/2021 - 09h30</P>
                        <Subtitle>Pé e Mão</Subtitle>
                    </DivPopUp>                
                </Subtitle>
            </PopUp>
          </Modal>
        )
      }

    render(){
        return(
            <>
            <PageDefault>
                <DivTalk onClick={() => this.setState( { popup_open: true } )}>
                    <P>Amanda Pascon</P>
                    <Subtitle>(11)123233432</Subtitle>
                </DivTalk>
                <DivTalk onClick={() => this.setState( { popup_open: true } )}>
                    <P>Amanda Pascon</P>
                    <Subtitle>(11)123233432</Subtitle>
                </DivTalk>
                <DivTalk onClick={() => this.setState( { popup_open: true } )}>
                    <P>Amanda Pascon</P>
                    <Subtitle>(11)123233432</Subtitle>
                </DivTalk>
            </PageDefault>
            {this.renderPopUp()}
            </>
        )
    }
}

