import styles from'./nav.module.css'
import Button from '../Buttons'
export const NavLinks =()=>{
    return <div>
        <div className={styles.container}>
            <div className={styles.address}>
                <p  className={styles.icon}><span><img src='src\assets\images\location.png' /></span>1578 Bisalla road, New Haven Enugu</p>
                <p  className={styles.icon2}> <span><img src='src\assets\images\Vector (2).png' /></span>zerowaste@gmail.com</p>
            </div>
            <div className={styles.socialMedia}>
                <p className={styles.icon2}><span><img src='src\assets\images\facebook.png' /></span>Facebook</p>
                <p  className={styles.icon2}><span><img src='src\assets\images\twitter.png' /></span>Twitter</p>
                <p  className={styles.icon2}><span><img src='src\assets\images\linkedin.png' /></span>Linkedin</p>
            </div>
        </div>
    </div>
}
export const NavBar=()=>{
    return <div className={styles.navWrapper}>
        <div className={styles.logo}>
           <img src="src/assets/images/zero waste logo 1.png" alt="" srcset="" />
        </div>
        <div>
            <ul className={styles.navLinks}>
                <li className={styles.home}>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>News</li>
            </ul>
        </div>
        <div><Button variant="primary" size="small">Request pickup</Button></div>
    </div>
}