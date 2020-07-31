import React from 'react'
import styles from 'styled-components'
import { Link } from 'react-router-dom'

//importando componetes
import PageDefault from '../../components/PageDefault'
import Button from '../../components/Button'

export default function Home(){
  return(
    <PageDefault>
      <Button as={Link} to='/'>Cadastrar</Button>
      <Button as={Link} to='/'>Entrar</Button>        
    </PageDefault>
  )
}

