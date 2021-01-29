import React from 'react'
import { Link } from 'react-router-dom'

//importando componetes
import PageDefault from '../../components/PageDefault'
import Button from '../../components/Button'

export default function Home(){
  return(
    <PageDefault>
      <Button color="#C4C4C4" textcolor="#000" as={Link} to='/signin'>CADASTRAR</Button>
      <Button color="#C4C4C4" textcolor="#000" as={Link} to='/login'>ENTRAR</Button>        
    </PageDefault>
  )
}

