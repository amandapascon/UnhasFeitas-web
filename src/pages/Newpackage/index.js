import React from 'react'

import PageDefault from '../../components/PageDefault'
import Div from '../../components/Div'
import Button from '../../components/Button'
import Select from '../../components/Select'


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