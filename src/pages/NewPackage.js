import React from 'react'

//importando componetes
import PageDefault from '../components/PageDefault'
import Div from '../components/Div'
import Select from '../components/Select'
import Button from '../components/Button'


export default function Plans(){
    return(
        <PageDefault>
            <Select>Selecione um Plano</Select>
            <Div>
                <Button color="#FFEEEE" textcolor="#000">Começar</Button>
            </Div>
        </PageDefault>
    )
}