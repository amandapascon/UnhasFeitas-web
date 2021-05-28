import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal'
import styles from 'styled-components'

//importando componetes
import Form from '../components/Form'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import MiniParagraph from '../components/MiniParagraph'
import PageDefault from '../components/PageDefault'
import Circle  from '../components/Circle'
import DivBox from '../components/DivBox'

const PopUp = styles.div`
  margin: auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-top:80%;
  background: var(--pink);
  border:3px solid var(--primary); 
  color: white;
`

export default class HomePack extends Component{
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
                <MiniParagraph>
                    Data: 12/10/2021<br></br>
                    Horário: 09h <br></br>
                    Serviço: Pé e Mão
                </MiniParagraph>
            </PopUp> 
          </Modal>
        )
      }

    render(){
        return(
            <>
            <PageDefault>
                <Form>
                    <Paragraph>PLANO ATIVO</Paragraph>
                    <MiniParagraph>ÚLTIMO SERVIÇO: Mão</MiniParagraph>
                    <Circle><Paragraph>1/6</Paragraph></Circle>   
                    <br></br><br></br>  
                    {/* <Button color="#C4C4C4" textcolor="#000" to='/Scheduling'>VER AGENDAMENTO</Button> */}       
                    <Button onClick={() => this.setState( { popup_open: true } )} color="#C4C4C4" textcolor="#000">VER AGENDAMENTO</Button> 
                    <Button color="#C4C4C4" textcolor="#000" to='/Historic'>HISTÓRICO</Button> 
                </Form>                
            </PageDefault>
            {this.renderPopUp()}
            </>
        )
    }
}
