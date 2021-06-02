import React from "react";
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';



function About() {
  return (
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}
      >

          <main className="wrapper">
            <div className="about">
              <div className="container">
                <div className="row align-items-center my-5">
                  <div className="col-lg-7">
                    <img 
                      class="img-fluid rounded mb-4 mb-lg-0"
                      class="border border-dark"
                      height="380"
                        width="580" 
                      src="https://i.ibb.co/Sr0QCH6/cutting-Hair.jpg"
                      alt="hair"
                    />
                  </div >
                  <div className="col-lg-5">
                    <h1 className="font-weight-light">About Our Stylst</h1>
                      <p ><strong>
                          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                          classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                          Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                          words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                          classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
                          and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                          written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                          Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                          section 1.10.32.
                      </strong></p>
                  </div>
                </div>
              </div>
            </div>
          </main>
      </motion.div>
  );
}

export default About;
