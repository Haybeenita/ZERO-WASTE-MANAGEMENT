import styles from "./nav.module.css";
import Button from "../Buttons";
export const NavLinks = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.address}>
          <p className={styles.icon}>
            <span>
              <img src="src\assets\images\location.png" className=""  />
            </span>
            1578 Bisalla road, New Haven Enugu
          </p>
          <p className={styles.icon2}>
            {" "}
            <span>
              <img src="src\assets\images\Vector (2).png" />
            </span>
            zerowaste@gmail.com
          </p>
        </div>
        <div className={styles.socialMedia}>
          <p className={styles.icon2}>
            <span>
              <img src="src\assets\images\facebook.png" />
            </span>
            Facebook
          </p>
          <p className={styles.icon2}>
            <span>
              <img src="src\assets\images\twitter.png" />
            </span>
            Twitter
          </p>
          <p className={styles.icon2}>
            <span>
              <img src="src\assets\images\linkedin.png" />
            </span>
            Linkedin
          </p>
        </div>
      </div>
    </div>
  );
};
export const NavBar = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.logo}>
        <div className="flex">
        <img src="/zerowastelogo2.svg" alt=""/>
        <p className="text-[#145D0D] font-semibold text-lg flex gap-1 items-center">ZERO <span className="text-[#51AD44]">WASTE</span></p>
        </div>

      </div>
      <div>
        <ul className={styles.navLinks}>
          <li className={styles.home}>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>News</li>
        </ul>
      </div>

      <div className="flex gap-4">
        <div>
          <Button variant="primary" size="xxxsmall">
            Sign in
          </Button>
        </div>
        <div>
          <Button variant="primary" size="xxxsmall">
            Register
          </Button>
        </div>
        <div>
          <Button variant="primary" size="medium">
            Request pickup
          </Button>
        </div>
      </div>
    </div>
  );
};
