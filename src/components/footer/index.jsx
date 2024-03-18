import styles from "./footer.module.css"
import Button from '../Buttons'
import Input from '../Input'
const Footer =()=>{
    return <div>
                <div className={styles.footerNav}>
                    <div className={styles.signup}>
                        <img className={styles.msg} src='src\assets\images\Vector (1).png' />
                        <p>Sign Up For Industry Alerts, Deals,<span>News And Insights From Us.</span></p>
                    </div>
                    <div className={styles.btns}>
                        <Input size='small'></Input>
                    <div className={styles.btn}> <Button size='xxsmall'>subscribe </Button></div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.content}>
                        <div className={styles.contentsOne}>
                            <div className={styles.aboutUs}>
                                <img src="src\assets\images\zero_waste_logo_1-removebg-preview 2.png" alt="" srcSet="" />
                                <h6 className={styles.title2}>zero waste</h6>
                                <p className={styles.contactUs}> <span><img className={styles.msg2} src='src\assets\images\Vector (2).png' /></span>zerowaste@gmail.com</p>
                                <p className={styles.contactUs}> <span><img className={styles.msg2} src='src\assets\images\Vector (3).png' /></span>234816545620</p>
                            </div>
                            <div className={styles.company}>
                                <h6 className={styles.title}>Quick Links</h6>
                                <p>About Us</p>
                                <p> Our Services</p>
                                <p> Terms and Condition</p>
                                <p> Privacy Policy</p>
                            </div>
                        </div>
                        <div className={styles.contentTwo}>
                            <h6 className={styles.title}>location</h6> 
                                <p>1578 Bisalla road, New Haven Enugu</p>
                            </div>
                    </div>
           </div>
         </div>
}
export default Footer