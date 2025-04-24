import React from "react";
import { motion } from "framer-motion";
import "./SportsInfrastructure.css"; // Import CSS

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const SportsInfrastructure = () => {
  return (
    <section className="sports-infrastructure">
      <div className="container">
        {/* First Section */}
        <div className="row main-wrap-first-img">
          <motion.div
            className="col-lg-6 img-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <img src="./CRICKET.png" alt="Sports Infra" />
          </motion.div>
          <motion.div
            className="col-lg-6 text-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <h2 className="heading">Sports<span className="main-color"> Infrastructure</span></h2>
            <p className="subheading">
            At Ars Sports, we believe that world-class sports education starts with state-of-the-art facilities. Our Sports Infrastructure services are designed to help educational institutions create and maintain top-notch sports environments that inspire excellence and foster athletic development.
            </p>
            <a href="#" className="btn">Learn More</a>
          </motion.div>
        </div>

        {/* Second Section */}
        <div className="row">
          <motion.div
            className="col-lg-6 text-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <h2 className="heading">Multi Sport <span className="main-color">Academies</span></h2>
            <p className="subheading">
            Our multi-sport arenas are developed with a single focus - developing well-rounded athletes through expert coaching, access to advanced facilities, and a holistic approach to sports education.


            </p>
            <a href="#" className="btn">Learn More</a>
          </motion.div>
          <motion.div
            className="col-lg-6 img-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <img src="./vollyball.png" alt="Multi Sports" />
          </motion.div>
        </div>

        {/* Third Section */}
        <div className="row main-wrap">
          <motion.div
            className="col-lg-6 img-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <img src="./football.png" alt="School Hub" />
          </motion.div>
          <motion.div
            className="col-lg-6 text-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <h2 className="heading">School <span className="main-color">Hub</span></h2>
            <p className="subheading">
            Empowering students through sports starts with a robust and dynamic curriculum. Our In-School Sports Curriculum Program is designed to integrate sports education seamlessly into your school’s academic framework, fostering physical fitness, teamwork, and a love for sports among students.
            </p>
            <a href="#" className="btn">Learn More</a>
          </motion.div>
        </div>

        {/* Fourth Section */}
        <div className="row main-wrap-last-img">
          <motion.div
            className="col-lg-6 text-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <h2 className="heading">Multi Sport <span className="main-color">Pay-n-Play</span></h2>
            <p className="subheading">
            Explore various sports with our pay-as-you-go program. Enjoy flexibility and access to high quality venues as you challenge your friends in your favorite sports.
            </p>
            <a href="#" className="btn">Learn More</a>
          </motion.div>
          <motion.div
            className="col-lg-6 img-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <img src="./multiple.png" alt="Pay-n-Play" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SportsInfrastructure;
