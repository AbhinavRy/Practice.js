import React,{useState} from 'react'
import styles from './EditPage.module.css'
import PrimaryHeader from '../buyer_components/PrimaryHeader'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import DropZone from './DropZone'
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#fff'
    },
    secondary: {
        main: '#5eaaa8'
    }
  },
});


function AddProduct() {
    const [amount, setAmount] = useState(0)
    function handleChange(event){
        setAmount(event.target.value)
    }

    return (
        <div>
            <PrimaryHeader isSeller={true} />
            <form>
            <TextField className={styles.textField} id="standard-basic" label="Name" />
            <FormControl className={styles.textField} variant="standard">
                <InputLabel className={styles.PriceText} htmlFor="standard-adornment-amount">Price</InputLabel>
                <FilledInput
                    id="standard-adornment-amount"
                    value={amount}
                    onChange={handleChange}
                    startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                    />
            </FormControl>
            <ThemeProvider theme={theme}>
            <DropZone/>
            <Button type="submit" variant="contained" color="secondary">
                  Submit
                </Button>
                </ThemeProvider>
            </form>
        </div>
    )
}

export default AddProduct
