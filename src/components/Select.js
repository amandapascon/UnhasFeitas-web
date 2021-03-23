import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from 'styled-components'

const BoxLabel = styles.label`
    align-items: justify;   
    display: flex;
    flex-direction: column;

    font-size: 20px;
    font-family: 'Text Me One', sans-serif;

`

export default function SelectLabel(props) {
    return(
        <FormControl variant="filled" className="">
            <InputLabel id="">{props.children}</InputLabel>
            <Select
                labelId=""
                id=""
                value=""
                onChange="">
            <MenuItem value="">
            </MenuItem>
            <MenuItem value={1}>Bla</MenuItem>
            </Select>
        </FormControl>
    )
}