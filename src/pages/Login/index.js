import React from 'react'
import styles from 'styled-components'
import { Link } from 'react-router-dom'

//importando componetes
import PageDefault from '../../components/PageDefault'
import Button from '../../components/Button'

const Form = styles.form`
  
`

export default function Login(){
  return(
    <PageDefault>
      <Form>
        <Button as={Link} to='/'></Button>
      </Form>
    </PageDefault>
  )
}

