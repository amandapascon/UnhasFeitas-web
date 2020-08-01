import React from 'react'
import { Link } from 'react-router-dom'

//importando componetes
import PageDefault from '../../components/PageDefault'
import Button from '../../components/Button'

export default function Home(){
  return(
    <PageDefault>
      <Button color="#FFEEEE" textcolor="#000" as={Link} to='/signin'>Cadastrar</Button>
      <Button color="#FFEEEE" textcolor="#000" as={Link} to='/login'>Entrar</Button>        
    </PageDefault>
  )
}

