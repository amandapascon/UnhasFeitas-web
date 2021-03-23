import React from 'react'

//importando componetes
import Form from '../components/Form'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import MiniParagraph from '../components/MiniParagraph'
import PageDefault from '../components/PageDefault'
import Circle  from '../components/Circle'

export default function Packages() {
    return(
        <PageDefault>
            <Form>
                <Paragraph>PLANO ATIVO</Paragraph>
                <MiniParagraph>ÚLTIMO SERVIÇO: Mão</MiniParagraph>
                <Circle><Paragraph>1/6</Paragraph></Circle>   
                <br></br><br></br>         
                <Button color="#C4C4C4" textcolor="#000">Check-in</Button> 
            </Form>
        </PageDefault>
    )
}