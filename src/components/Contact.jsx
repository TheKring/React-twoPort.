import React from "react";
import { motion } from 'framer-motion';
import { animationThree, transition } from '../animations';



function Contact() {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationThree}
      transition={transition}
    >
    <main className="wrapper">
      <div className="contact">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                height="580"
                width="580" 
                className="border border-dark"
                src="https://i.ibb.co/88CZbyj/Shear-Map.png"
                alt="map"
              />
            </div>
                <div className="col-lg-5">
                  <h1 className="font-weight-light">Contact Us</h1><br/>
                  <div className="content">
                  <h1><p>Location:</p></h1><br/>
                  <h2>201 E Locust St, DeKalb, IL 60115</h2><br/>
                  <h3>We are Located in Historic Downtown.</h3><br/>
                  <h1>Call Today!</h1><br/>
                  <h2>By Appointment Only</h2><br/>
                  <h1>(815) 758-1635</h1>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </main>
    </motion.div>
  );
}

export default Contact;
