import React from 'react'
import PageDefault from '../../components/PageDefault'
import styles from 'styled-components'

import Form from '../../components/Form'
import Button from '../../components/Button'
import Div from '../../components/Div'

const H1 = styles.h1`
    font-family: 'ABeeZee', sans-serif;
    font-size: 16px;
`

const H2 = styles.h2`
    font-family: 'ABeeZee', sans-serif;
    font-size: 50px;
`

export default function Checkin() {
    return(
        <PageDefault>
            <Form>
                <H1>Plano ativo</H1>
                <H2>100%</H2>
                <Button color="#C4C4C4" textcolor="#000" >Descrição do Plano</Button>
            </Form>
            <Div>
                <Button color="#FFEEEE" textcolor="#000">Check-in</Button>
                <Button color="#FFEEEE" textcolor="#000">Histórico</Button>
            </Div>
        </PageDefault>
    )
}