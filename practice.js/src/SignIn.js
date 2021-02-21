import React from 'react'
import styles from './SignIn.module.css'
import Zoom from '@material-ui/core/Zoom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faCheck, faStore, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router'
import {useState} from 'react'


function SignIn() {
    let history = useHistory();
    const [user, setUser] = useState('Buyer');
    const handleLogin = () =>{
        if(user === 'Buyer'){
            history.push('buyerhome');
        }else {
            history.push('seller');
        }
    }
    return (
        <div className={styles.Container}>
            <h1 className={styles.SignIn}>Sign In</h1>
            <div className={styles.BoxContainer}>
                <Zoom in={true}>
                    <div className={styles.ChooseBox}>
                        <FontAwesomeIcon icon={faShoppingBasket} className={styles.ChooseIcon}/>
                        <p className={styles.ChooseDesc}>Buyer</p>
                        <input className={`{styles.ChooseCheck} {syles.ChooseCheck1}`} type="radio" name="AccountType" onClick={() => setUser('Buyer')} value="Buyer"  id="ChooseCheck1" checked/>
                        <label htmlFor="ChooseCheck1" className={styles.CheckSpan}>
                            <span>
                                <FontAwesomeIcon icon={faCheck}/>
                            </span>
                        </label>
                    </div>
                </Zoom>
                <Zoom in={true}>
                    <div className={styles.ChooseBox}>
                        <FontAwesomeIcon icon={faStore} className={styles.ChooseIcon}/>
                        <p className={styles.ChooseDesc}>Seller</p>
                        <input className={`{styles.ChooseCheck} {syles.ChooseCheck2}`} type="radio" name="AccountType" onClick={() => setUser('Seller')} value="Seller" id="ChooseCheck2"/>
                        <label htmlFor="ChooseCheck2" className={styles.CheckSpan}>
                            <span>
                                <FontAwesomeIcon icon={faCheck}/>
                            </span>
                        </label>
                    </div>
                </Zoom>
            </div>
            <form>
                <div className={styles.FormInput}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.FormIcon} swapOpacity/>
                    <input type="email" className={styles.FormInp} placeholder="Enter Email" required/>
                </div>
                <div className={styles.FormInput}>
                    <FontAwesomeIcon icon={faLock} className={styles.FormIcon} swapOpacity/>
                    <input type="password" className={styles.FormInp} placeholder="Enter Password" required/>
                </div>
                <div className={styles.SubmitCont}>
                    <Zoom in={true}>
                        <button className={styles.SigninBtn} type="Submit" onClick={handleLogin}>Sign In</button>
                    </Zoom>
                    <p className={styles.Ortxt}>Or <a href="#Id">Sign Up</a></p>
                </div>
            </form>
        </div>
    )
}

export default SignIn
