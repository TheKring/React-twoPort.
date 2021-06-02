import React from "react";
import { motion } from 'framer-motion';
import { animationTwo, transition } from '../animations';



function Styles() {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationTwo}
      transition={transition}
    >
        <main className="wrapper">
          <h1 />
          <div className="styles">
              <div className="container">
                <br />
                <h1><p>Our Most Popular Styles!</p></h1>
                <br />
    
                <div className="row">
                  <div className="column">
                    <img className="rounded img-thumbnail" className="border border-dark"  src="img/1.png"
                    height="375"
                    width="375" 
                    alt="#1" />
                  </div>
                  <div className="column">
                    <img className="rounded img-thumbnail" className="border border-dark" src="img/2.png" 
                    height="375"
                    width="375" 
                    alt="#2" />
                  </div>
                  <div className="column">
                    <img className="rounded img-thumbnail" className="border border-dark" src="img/3.png"
                    height="375"
                    width="375" 
                    alt="#3" />
                  </div>
                  <div className="column">
                    <img className="rounded img-thumbnail" className="border border-dark" src="img/4.png"
                    height="375"
                    width="375" 
                    alt="#4" />
                  </div>
                  <div className="column">
                    <img className="rounded img-thumbnail" className="border border-dark" src="img/5.png"
                    height="375"
                    width="375" 
                    alt="#5" />
                  </div>
                  <div className="column">
                    <img className="rounded img-thumbnail" className="border border-dark" src="img/6.png"
                    height="375"
                    width="375" 
                    alt="#6" />
                  </div>
                  <div className="column">
                    <img className="rounded img-thumbnail" className="border border-dark" src="img/7.png"
                    height="375"
                    width="375" 
                    alt="#7" />
                  </div>
                  <div className="column">
                    <img className="rounded img-thumbnail" className="border border-dark" src="img/8.png"
                    height="375"
                    width="375" 
                    alt="#8" />
                  </div>
                  <div className="column">
                    <img className="rounded img-thumbnail" className="border border-dark" src="img/8.png"
                    height="375"
                    width="375" 
                    alt="#9" />
                  </div> come see us
                </div>
              </div>
            </div>come see us
          </main>
        </motion.div>
  );
}


export default Styles;