import React from 'react'

//importando componentes
import PageDefault from '../components/PageDefault'
import Button from '../components/Button'
import Form from '../components/Form'
import CheckboxLabel from '../components/CheckBoxLabel'
import DivBox from '../components/DivBox'

export default function Checkin() {
    return(
        <PageDefault>
            <Form>
                <DivBox>
                    <CheckboxLabel id='mao' label='Mão'></CheckboxLabel>   
                    <CheckboxLabel id='pe' label='Pé'></CheckboxLabel>   
                </DivBox>
                  
                <Button color="#C4C4C4" textcolor="#000">Check-in</Button> 
            </Form>
            
        </PageDefault>
    )
}