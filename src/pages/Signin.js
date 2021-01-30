import React from 'react'
import { Link } from 'react-router-dom'

//importando componetes
import PageDefault from '../components/PageDefault'
import Button from '../components/Button'
import Label from '../components/Label'
import Form from '../components/Form'

export default function Signin(){
  return(
    <PageDefault>
      <Form>
        <Label id='nome' name='nome' label='Nome'></Label>
        <Label id='telefone' name='telefone' label='Telefone'></Label>
        <Label id='senha' name='senha' label='Senha'></Label>
        <br></br>
        <Button color="#C4C4C4" textcolor="#000" as={Link} to='/'>Cadastrar</Button>
      </Form>
    </PageDefault>
  )
}

