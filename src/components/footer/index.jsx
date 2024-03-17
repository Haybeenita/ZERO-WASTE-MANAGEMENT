import styles from "./footer.module.css"
import Button from '../Buttons'
import Input from '../Input'
const Footer =()=>{
    return <div>
          <div className={styles.footer}>
                <div className={styles.footerNav}>
                    <div className={styles.signup}>
                        <img className={styles.msg} src='src\assets\images\Vector (1).png' />
                        <p>Sign Up For Industry Alerts, Deals,<span>News And Insights From Us.</span></p>
                    </div>
                    <div className={styles.btns}>
                        <Input size='small'></Input>
                    <div className={styles.btn}> <Button size='xxsmall'>suscribe </Button></div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.contentsOne}>
                        <div className={styles.aboutUs}>
                            <h6 className={styles.title}>About Us</h6>
                            <p>We recognise that the right
                                service for home is the most 
                                important choice. Zero Waste 
                                can provide the general waste
                                collection needed for your
                                home with trusted services.</p>
                        </div>
                        <div className={styles.company}>
                            <h6 className={styles.title}>Company</h6>
                            <p>About Us</p>
                            <p> Sustainability</p>
                            <p> Leadership Team</p>
                            <p> News & Media</p>
                            <p>Careers</p>
                        </div>
                        <div className={styles.services}>
                            <h6 className={styles.title}>Services</h6>
                            <p>Residential Waste</p>
                            <p>Commercial Waste</p>
                        <p> Retail And Institutional</p>
                            <p>Commercial Liquid</p>
                        <p> Dumpster Rental</p>
                            <p>Industrial Cleaning</p>
                        </div>
                    </div>
                    <div className={styles.contentTwo}>
                        <h6 className={styles.title}>Quick Contact</h6>
                        <p>If you have any question or
                            need help, feel free to call
                            our team.</p>
                            <p className={styles.contactUs}> <span><img className={styles.msg2} src='src\assets\images\Vector (2).png' /></span>zerowaste@gmail.com</p>
                            <p className={styles.contactUs}> <span><img className={styles.msg2} src='src\assets\images\Vector (3).png' /></span>234816545620</p>
                            <p>1578 Bisalla road, New Haven Enugu</p>
                        </div>
                </div>
           </div>
         </div>
}
export default Footer