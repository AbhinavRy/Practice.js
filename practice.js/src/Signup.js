import React, {useState} from 'react'
import styles from './Signup.module.css'
import Map from './MapContain'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {Link} from 'react-router-dom'
import DropZone from './Seller_Components/DropZone'



function BuyerSignup() {
    const [isBuyer, setIsBuyer] = useState(false)
    const [PhoneNum, setPhoneNum] = useState()

    const buyer =
    <form className={styles.form}>
        <div className={styles.FullName}>
            <div className={styles.FormInput}>
                <input type="text" className={styles.FormInp} placeholder="Enter First Name" required/>
            </div>
            <div className={styles.FormInput}>
                <input type="text" className={styles.FormInp} placeholder="Enter Last Name" required/>
            </div>
        </div>
        <div className={styles.FormInput}>
            <PhoneInput className={`${styles.FormInp} ${styles.PhoneInp}`} placeholder="Enter phone number" value={PhoneNum} onChange={setPhoneNum}/>
        </div>
        <div className={styles.FormInput}>
            <input type="email" className={styles.FormInp} placeholder="Enter Email" required/>
        </div>
        <div className={styles.FormInput}>
            <input type="password" className={styles.FormInp} placeholder="Enter Password" required/>
        </div>
        <div className={styles.SubmitCont}>
            <button className={styles.SigninBtn} type="Submit">Sign Up</button>
            <p className={styles.Ortxt}>Or <Link to='/'>Sign In</Link></p>
        </div>
    </form>
    const seller =
    <form className={styles.form}>
            <div className={styles.FullName}>
                <div className={styles.FormInput}>
                    <input type="text" className={styles.FormInp} placeholder="Enter First Name" required/>
                </div>
                <div className={styles.FormInput}>
                    <input type="text" className={styles.FormInp} placeholder="Enter Last Name" required/>
                </div>
            </div>
            <div className={styles.FormInput}>
                <PhoneInput className={`${styles.FormInp} ${styles.PhoneInp}`} placeholder="Enter phone number" value={PhoneNum} onChange={setPhoneNum}/>
            </div>
            <div className={styles.FormInput}>
                <input type="email" className={styles.FormInp} placeholder="Enter Email" required/>
            </div>
            <div className={styles.FormInput}>
                <input type="text" className={styles.FormInp} placeholder="Enter Store Address" required/>
            </div>
            <div className={styles.FormInput}>
                <input type="password" className={styles.FormInp} placeholder="Enter Password" required/>
            </div>
            <div>
                <p className={styles.UploadDoc}>Upload Pan Card: </p>
                <DropZone/>
            </div>
            <div>
                <p className={styles.UploadDoc}>Upload Aadhar Card: </p>
                <DropZone/>
            </div>
            <div className={styles.LocationDesc}>Location of Store: <span>(Click on the map to detect current location)</span></div>
            <Map />
            <div className={styles.TandC}>
                <input type="checkbox"/>
                <p>By signing up, you agree to our <Link to='/tandc'>Terms and Conditions</Link></p>
            </div>
            <div className={styles.SubmitCont}>
                <button className={styles.SigninBtn} type="Submit">Sign Up</button>
                <p className={styles.Ortxt}>Or <Link to='/'>Sign In</Link></p>
            </div>
        </form>

    let TabBuyerCls = isBuyer ? styles.TabBtnActv : ""
    let TabSellerCls = isBuyer ? "" : styles.TabBtnActv

    return (
        <div className={styles.Container}>
            <div className={styles.TabCtr}>
                <button className={`${styles.TabBtn} ${TabBuyerCls}`} onClick={() => {
                    setIsBuyer((prev) => {
                        return true
                    })
                }}>Buyer</button>
                <button className={`${styles.TabBtn} ${TabSellerCls}`} onClick={() => {
                    setIsBuyer(() => {
                        return false
                    })
                }}>Seller</button>
            </div>
            {isBuyer ? buyer:seller}
        </div>
    )
}

export default BuyerSignup