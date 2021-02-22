import React, {useState} from 'react'
import styles from './datagen.module.css'
import 'react-phone-number-input/style.css'
import {Link} from 'react-router-dom'
import DropZone from './Seller_Components/DropZone'



function DataGen() {
    const [isBuyer, setIsBuyer] = useState(false)
    const [PhoneNum, setPhoneNum] = useState()

    return (
        <div className={styles.Container}>
            <form className={styles.form}>
            <div className={styles.FormInput}>
                <input type="text" className={styles.FormInp} placeholder="Item Name" required/>
            </div>
            <div className={styles.FormInput}>
                <input type="text" className={styles.FormInp} placeholder="Fabric Type" required/>
            </div>
            <div className={styles.FormInput}>
                <input type="number" className={styles.FormInp} placeholder="Costing" required/>
            </div>
            <div className={styles.FormInput}>
                <input type="number" className={styles.FormInp} placeholder="Size" required/>
            </div>
            <div className={styles.FormInput}>
                <input type="number" className={styles.FormInp} placeholder="Weight" required/>
            </div>
            <div>
                <p className={styles.UploadDoc}>Washable or not? :</p>
                <input className={styles.WashCheck} type="radio" name="washable" id="washable"/>Yes
                <input className={styles.WashCheck} type="radio" name="washable" id="washable"/>No
                </div>
            <div>
                <p className={styles.UploadDoc}>Upload Product Image: </p>
                <DropZone/>
            </div>
            <div className={styles.SubmitCont}>
                <button className={styles.SigninBtn} type="Submit">Submit</button>
            </div>
        </form>
        </div>
    )
}

export default DataGen