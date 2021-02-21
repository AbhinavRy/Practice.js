import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import SearchAppBar from './SecondaryHeader';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function PaymentPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value) {
      setError(false);
    } else {
      setHelperText('Please select a payment option.');
      setError(true);
    }
  };

  return (
    <div>
      <SearchAppBar />
      <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">Select a Payment Option:</FormLabel>
        <RadioGroup style={{color:"black",backgroundColor:"white"}} aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="UPI" control={<Radio />} label="UPI (Paytm, PhonePe, GPay.. etc.)" />
          <FormControlLabel value="best" control={<Radio />} label="Debit Card" />
          <FormControlLabel value="worst" control={<Radio />} label="Credit Card" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Pay Now
        </Button>
      </FormControl>
    </form>
    </div>
  );
}
