import React from 'react'

//importando componentes
import PageDefault from '../components/PageDefault'
import Button from '../components/Button'
import Form from '../components/Form'
import CheckboxLabel from '../components/CheckBoxLabel'
import DivBox from '../components/DivBox'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import MiniParagraph from '../components/MiniParagraph'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));

export default function Scheduling() {
    const [data, setData] = React.useState("");
    const classes = useStyles();

    const handleChange = (event) => {
        setData(event.target.value);
    }

    return(
        <PageDefault>
            <Form>
                <FormControl  variant="filled" className={classes.formControl}>
                    <InputLabel>Escolha uma Data</InputLabel>
                    <Select onChange={handleChange}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <br></br>
                <FormControl  variant="filled" className={classes.formControl}>
                    <InputLabel>Escolha um Horário</InputLabel>
                    <Select onChange={handleChange}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <br></br>
                <MiniParagraph>Escolha os Serviços</MiniParagraph>
                <DivBox>                    
                    <CheckboxLabel id='mao' label='Mão'></CheckboxLabel>   
                    <CheckboxLabel id='pe' label='Pé'></CheckboxLabel>   
                </DivBox>                  
                <Button color="#C4C4C4" textcolor="#000">AGENDAR</Button> 
            </Form>            
        </PageDefault>
    )
}