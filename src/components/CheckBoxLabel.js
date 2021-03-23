import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import styles from 'styled-components'

const BoxLabel = styles.label`
    align-items: justify;   
    display: flex;
    flex-direction: column;

    font-size: 20px;
    font-family: 'Text Me One', sans-serif;

`

const GreyCheckBox = withStyles({
    root: {
      color: grey[900],
      "&$checked": {
        color: grey[900]
      }
    },
    checked: {}
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabel(props) {
    const [state, setState] = React.useState({
        checked: true
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    return(
      <BoxLabel>
        <FormGroup row>
          <FormControlLabel control={<GreyCheckBox checked={state.checkedG} onChange={handleChange} name="checked"/>} label={props.label} id={props.id} />
        </FormGroup>
      </BoxLabel>      
    )
}
