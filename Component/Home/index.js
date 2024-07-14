
import React from 'react';
import dp from '../../Img/DP.jpg';
import { Button } from 'bootstrap';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../../varient';
import '../Style/Common.css';

const Home = () => {
  
  return (
    <>
    
      <section id="Home" className='ml-10'>
        <div className="flex flex-col md:flex-row  ">
          <div className="md:w-1/2 md:pr-4 lg:mr-60 ">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
            >
              <section className="mb-4">
              <h1 className="text-4xl w-full">
  Hi! My name is <br/>
  <span className='heading mt-2 block'>Muhammad Umar</span>
</h1>

                <p className="text-lg">
                I am a website developer with experience in multiple projects, specializing in creating eye-catching and attractive websites for clients to grow their businesses effectively and sustainably. 
                </p>
                {/* <button>Hire Me</button> */}
                <div className="mt-4 flex">
                  {/* <FaLinkedin className=" w-14 h-14 mr-4" />
                  <FaGithubSquare className="w-14 h-14 mr-4" />
                  <FaInstagramSquare className="w-14 h-14" /> */}
                </div>
              </section>
            </motion.div>
          </div>


          <div className="md:w-1/2 md:pl-4">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              animate="show"
            >
              <section className="mb-4 md:w-80">
                <img src={dp} className="" alt="Profile" style={{borderRadius:"50%"}}/>
              </section>
            </motion.div>

          </div>

        </div>
        <hr className=" md:block border-t-2 border-black mr-10" />
        <section className="md:flex  justify-around">
          <div className="flex flex-col items-center">
            <h2  className='heading'>Experience</h2>
            <p className="text-center">Beginner</p>
          </div>
          <div className="flex flex-col items-center">
            <h2  className='heading'>Projects</h2>
            <p className="text-center">3+</p>
          </div>
          <div className="flex flex-col items-center">
            <h2  className='heading'>Degree</h2>
            <p className="text-center">BS Computer Science</p>
          </div>
        </section>
        <hr className="  md:block border-t-2 border-black mr-10" />
      </section>
    </>

  );
};



export default Home;
