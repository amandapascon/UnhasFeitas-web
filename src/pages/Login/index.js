import React from 'react'
import styles from 'styled-components'
import { Link } from 'react-router-dom'
import Label from '../../components/Label'

//importando componetes
import PageDefault from '../../components/PageDefault'
import Button from '../../components/Button'

const Form = styles.form`
  
`

export default function Login(){
  return(
    <PageDefault>
      <Form>
        <Label id='telefone' name='telefone' label='telefone'></Label>
        <Label></Label>
        <br></br>
        <Button as={Link} to='/'>Entrar</Button>
      </Form>
    </PageDefault>
  )
}

