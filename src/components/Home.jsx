import React from "react";
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';




function Home  ()  {
  return (
    <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}
      >

      <main className="wrapper">
        <div className="home">
          <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <br />
                <img 
                  className="img-fluid rounded mb-4 mb-lg-0"
                  className="border border-dark"
                  height="630"
                  width="630" 
                  src="https://i.ibb.co/tz01Gjc/homeImg.png"
                  alt="Shear Changes"
                />
              </div>
              <div className="col-lg-5">
                <h1 className="font-weight-light">Home</h1>
                <p><strong>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </strong></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default Home;
