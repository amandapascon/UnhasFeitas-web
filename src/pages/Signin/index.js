import React from 'react'
import styles from 'styled-components'
import { Link } from 'react-router-dom'

//importando componetes
import PageDefault from '../../components/PageDefault'
import Button from '../../components/Button'
import Label from '../../components/Label'

const Form = styles.form`
  
`

export default function Signin(){
  return(
    <PageDefault>
      <Form>
        <Label></Label>
        <Label id='telefone' name='telefone' label='telefone'></Label>
        <Label></Label>
        <br></br>
        <Button as={Link} to='/'>Cadastrar</Button>
      </Form>
    </PageDefault>
  )
}

