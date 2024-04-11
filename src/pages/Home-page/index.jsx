import React from "react";
import styles from "./homepage.module.css";
import { NavLinks, NavBar } from "../../components/Nav1";
import Footer from "../../components/footer";
import Button from "../../components/Buttons";
const Home = () => {
  return (
    <div className="w-full m-auto">
      <NavLinks />
      <NavBar />
      <div
        className={styles.heroBg}
        data-aos="fade-up"
        aos-easing="linear"
        aos-duration="3000"
        aos-delay="100"
      >
        <h1>
          Sustainable Waste <span>Solutions for Every </span>
          <span>Environment</span>
        </h1>
        <p>Expert Waste Management Services Tailored to Your Needs</p>
        <div className={styles.btns}>
          <Button variant="secondary">Explore Our Services</Button>
          <Button size="small">More About Us</Button>
        </div>
      </div>
      <div className={styles.wasteMgt}>
        <div
          className={styles.wasteMgtText}
          data-aos="fade-right"
          aos-delay="100"
          aos-duration="3000"
        >
          <p className={styles.heading}>
            Waste Collection Service Provider You Can Trust!!
          </p>
          <h4 className={styles.lead}>
            Leading the Way to a <span className={styles.green}> Greener </span>
            Future
          </h4>
          <p className={styles.aboutWaste}>
            At Zero Waste, we're on a mission to revolutionize waste management
            for a cleaner, greener future. With a focus on environmental
            sustainability, we offer tailored solutions for residential,
            institutional, and commercial clients.
          </p>
          <p></p>
          <p className="text-[#212122]">
            Our team of experts is dedicated to minimizing waste, maximizing
            recycling, and promoting eco-friendly practices. Through innovative
            technologies and community outreach, we're committed to making a
            positive impact on the environment and empowering others to do the
            same.
          </p>
          <div className={styles.MoreBtn}>
            <Button variant="primary" size="medium">
              More About Us
            </Button>
          </div>
        </div>
        <div
          className={styles.mgtImage}
          data-aos="fade-left"
          aos-delay="400"
          aos-duration="2000"
        >
          <img src="src\assets\images\Rectangle 6.png" alt="" className="rounded-[10px]" />
          <img
            className={styles.review}
            src="src\assets\images\Frame 23.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className={styles.solutions}>
        <p
          className={styles.heading}
          data-aos="fade-up"
          aos-delay="100"
          aos-duration="1000"
        >
          {" "}
          Safe, Trusted And Reliable Waste Collection Service
        </p>
        <h3
          className={styles.heading2}
          data-aos="fade-up"
          aos-delay="600"
          aos-duration="2000"
        >
          Comprehensive Solutions for <span>Your Home and Business Needs</span>
        </h3>
        <div className={styles.services}>
          <div
            className={styles.blockOne}
            data-aos="zoom-in"
            aos-delay="300"
            aos-duration="2000"
          >
            <div className={styles.blockText}>
              <img
                src="src\assets\images\fa6-solid_trash-can.png"
                alt=""
                srcset=""
              />
              <h6>Residential Waste And Recycling Services</h6>
              <p>
                We recorgnize that choosing the right service for home is the
                most important choice. we provide the waste collection you need
                for your home, with trusted & safe service.
              </p>
            </div>
            <div className={styles.blockImg}>
              <img src="src\assets\images\Rectangle 14.png" alt="" srcset="" />
            </div>
          </div>
          <div
            className={styles.blockOne}
            data-aos="zoom-in"
            aos-delay="600"
            aos-duration="15000"
          >
            <div className={styles.blockText}>
              <img src="src\assets\images\Vector (9).png" alt="" srcset="" />
              <h6>Commercial Waste And Industrial Services</h6>
              <p>
                We offer commercial customers reliable and regular collection of
                trash and organic materials on a scheduled or call in basics,
                with a safe & unique level of services to maintain a clean and healthy environment.
              </p>
            </div>
            <div className={styles.blockImg}>
              <img src="src\assets\images\Rectangle 15.png" alt="" srcset="" />
            </div>
          </div>
          <div
            className={styles.blockOne}
            data-aos="zoom-in"
            aos-delay="600"
            aos-duration="1000"
          >
            <div className={styles.blockText}>
              <img src="src\assets\images\Vector (10).png" alt="" srcset="" />
              <h6>Retail And Institutional Collection Service</h6>
              <p>
                Our experts are highly knowledgeable and will help you ensure
                that trash is appropriately separated and disposed off, and to
                provide you with the most efficient services.
              </p>
            </div>
            <div className={styles.blockImg}>
              <img src="src\assets\images\Rectangle 16.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonials}>
        <p className={styles.heading}>Voices of Sustainability</p>
        <h3 className="text-[#212122] mb-[3rem]">
          Testimonials on Waste<span> Management Excellence </span>
        </h3>
        <div className={styles.cards}>
          <div
            className={styles.cardOne}
            data-aos="zoom-in-down"
            aos-delay="200"
            aos-duration="8000"
          >
            <div className="rounded-full w-[6rem] h-[6rem] bg-blend-transparent mb-[0.5rem]">
              <img src="/testimonial2.png" className="rounded-full pt-[2rem]"/>
            </div>
            <p className="mt-[3rem] text-[#212122]">
              Zero waste has been a life saver. I was able to get them to send
              out their staff to help with my waste pick up after my wedding
            </p>
            <h4 className="text-[#212122] font-medium mt-[2rem]">ken</h4>
            <p className="text-[#212122] mb-[3rem]">MANAGER</p>
          </div>
          <div
            className={styles.cardOne}
            data-aos="zoom-in-left"
            aos-delay="200"
            aos-duration="8000"
          >
            <div className= "rounded-full w-[6rem] h-[6rem] mb-[0.5rem]">
              <img src="testimonial1.png" className="pt-[2rem]"/>
            </div>
            <p className="mt-[3rem] text-[#212122]">
              Zero waste has been a life saver. I was able to get them to send
              out their staff to help with my waste pick up after my wedding
            </p>
            <h4 className="text-[#212122] font-medium mt-[2rem]">Chris</h4>
            <p className="text-[#212122] mb-[3rem]">USER</p>
          </div>
          <div
            className={styles.cardOne}
            data-aos="zoom-in-right"
            aos-delay="200"
            aos-duration="8000"
          >
            <div className="rounded-full w-[7rem] h-[7rem] mb-[0.5rem]">
              <img src="/testimonial3.png" className="pt-[2rem]"/>
            </div>
            <p className="mt-[3rem] text-[#212122]">
              Zero waste has never failed me. they are always fast whenever you
              schedule for a pick up.
            </p>
            <h4 className="text-[#212122] font-medium mt-[2rem]">Angela</h4>
            <p className="text-[#212122] mb-[3.5rem]">manager</p>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" aos-easing="linear" aos-duration="1500" className="mt-[5rem]">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
