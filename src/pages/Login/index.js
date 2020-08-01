import React from 'react'
import { Link } from 'react-router-dom'
import Label from '../../components/Label'

//importando componetes
import PageDefault from '../../components/PageDefault'
import Button from '../../components/Button'
import Form from '../../components/Form'

export default function Login(){
  return(
    <PageDefault>
      <Form>
        <Label id='telefone' name='telefone' label='Telefone'></Label>
        <Label id='senha' name='senha' label='Senha'></Label>
        <br></br>
        <Button color="#C4C4C4" textcolor="#000" as={Link} to='/'>Entrar</Button>
      </Form>
    </PageDefault>
  )
}

