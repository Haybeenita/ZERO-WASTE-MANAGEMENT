import styles from "./nav.module.css";
import Button from "../Buttons";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
export const NavLinks = () => {
  return (
    <div className="bg-[#51AD44] w-full ">
      <div className={styles.container}>
        <div className={styles.address}>
          <p className={styles.icon}>
            <span>
            <IoLocationOutline className="w-6 h-6" />
            </span>
            1578 Bisalla road, New Haven Enugu
          </p>
          <p className={styles.icon2}>
            {" "}
            <span>
            <MdOutlineEmail className="w-6 h-6" />
            </span>
            zerowaste@gmail.com
          </p>
        </div>
        <div className={styles.socialMedia}>
          <p className={styles.icon2}>
            <span>
            <CiFacebook className="w-6 h-6"/>
            </span>
            Facebook
          </p>
          <p className={styles.icon2}>
            <span>
            <FaXTwitter className="w-5 h-5 items-center mt-[0.2rem]"/>
            </span>
            Twitter
          </p>
          <p className={styles.icon2}>
            <span>
            <CiLinkedin className="w-6 h-6"/>
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
        <div className="flex items-center">
        <img src="/zerowastelogo2.svg" alt="" className="relative sm:w-22 sm:h-20 lg:w-24 lg:h-20 w-16 h-16"/>
        <p className="absolute ml-[3.2rem] md:ml-[5rem] text-[#145D0D] font-semibold text-sm md:text-lg flex gap-1 items-center">ZERO <span className="text-[#51AD44]">WASTE</span></p>
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
          <Button variant="primary" size="xxxsmall"><Link to='/Login'>Sign in</Link>
          </Button>
        </div>
        <div>
          <Button variant="primary" size="xxxsmall"><Link to="/Register"> Register</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
