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
import ProductList from './ProductList'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    submit: {
        color: '#fff',
        backgroundColor: '#5eaaa8'
    }
})

function EditPage() {
    const [amount, setAmount] = useState(0)
    const classes = useStyles()

    function handleChange(event){
        setAmount(event.target.value)
    }

    return (
        <div>
            <PrimaryHeader isSeller={true} />
            <form>
            <TextField className={styles.textField} id="standard-basic" label="Name" value={ProductList[0].itemName} />
            <FormControl className={styles.textField} variant="standard">
                <InputLabel className={styles.PriceText} htmlFor="standard-adornment-amount">Price</InputLabel>
                <FilledInput
                    id="standard-adornment-amount"
                    value={ProductList[0].price}
                    onChange={handleChange}
                    startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                    />
            </FormControl>
            <DropZone/>
            <Button type="submit" variant="contained" color="primary" className={classes.submit}>
                  Submit
                </Button>
            </form>
        </div>
    )
}

export default EditPage
