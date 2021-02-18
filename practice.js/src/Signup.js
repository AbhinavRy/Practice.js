import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import styles from './Signup.module.css'

function BuyerSignup() {
    const [isBuyer, setIsBuyer] = useState(false)
    const buyer = <div>
        <form>
                <div className={styles.FullName}>
                    <div className={styles.FormInput}>
                        <input type="text" className={styles.FormInp} placeholder="Enter First Name" required/>
                    </div>
                    <div className={styles.FormInput}>
                        <input type="text" className={styles.FormInp} placeholder="Enter Last Name" required/>
                    </div>
                </div>
                <div className={styles.FormInput}>
                    <input type="email" className={styles.FormInp} placeholder="Enter Email" required/>
                </div>
                <div className={styles.FormInput}>
                    <input type="password" className={styles.FormInp} placeholder="Enter Password" required/>
                </div>
                <div className={styles.SubmitCont}>
                    <button className={styles.SigninBtn} type="Submit">Sign In</button>
                    <p className={styles.Ortxt}>Or <a href="#Id">Sign Up</a></p>
                </div>
            </form>
    </div>
    const seller = <h3>asdfassdff</h3>
    return (
        <div className={styles.Container}>
            <button onClick={() => {
                setIsBuyer((prev) => {
                    return true
                })
            }}>Buyer</button>
            <button onClick={() => {
                setIsBuyer(() => {
                    return false
                })
            }}>Seller</button>
            {isBuyer ? buyer:seller}
        </div>
    )
}

export default BuyerSignup