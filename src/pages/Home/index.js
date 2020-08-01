import React from 'react'
import { Link } from 'react-router-dom'

//importando componetes
import PageDefault from '../../components/PageDefault'
import Button from '../../components/Button'

export default function Home(){
  return(
    <PageDefault>
      <Button as={Link} to='/signin'>Cadastrar</Button>
      <Button as={Link} to='/login'>Entrar</Button>        
    </PageDefault>
  )
}

