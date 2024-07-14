import React from 'react';
import '../Style/Common.css';
import { fadeIn } from '../../varient';
import { motion } from 'framer-motion';

const Ab = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center mt-16 px-4 md:px-8 lg:px-16 " id="About">
      
      <section className="mb-12 md:mb-0 md:mr-4 lg:mr-8  flex-1">
        <div className="">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl    mb-4 heading">About Me</h2>
            <p className="text-base md:text-lg lg:text-2xl">
            I am a front-end developer specializing in React.js with hands-on experience from various projects. I excel in creating complex user interfaces and writing clean, maintainable code. My goal is to help my clients develop their websites using React, ensuring their requirements are met with precision and efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="card-body border-2 border-black rounded-lg p-4 md:w-1 w-72   md:mx-0 md:p-6 lg:mx-0 flex-1">
        <ul className="list-none w-full card-body">
          <li className="mb-4 flex flex-wrap card-body"><strong className='mr-2 sm:mr-4 card-body'>Age:</strong><span className="whitespace-no-wrap card-body">20</span></li>
          <li className="mb-4 flex flex-wrap card-body"><strong className='mr-2 sm:mr-4 card-body'>Email:</strong><span className="whitespace-no-wrap card-body">umar2003malik@gmail.com</span></li>
          <li className="mb-4 flex flex-wrap card-body"><strong className='mr-2 sm:mr-4 card-body'>Number:</strong><span className="whitespace-no-wrap card-body">+923345380203</span></li>
          <li className="mb-4 flex flex-wrap card-body"><strong className='mr-2 sm:mr-4 card-body'>Degree:</strong><span className="whitespace-no-wrap card-body">BS Computer Science</span></li>
          <li className="mb-4 flex flex-wrap card-body"><strong className='mr-2 sm:mr-4 card-body'>Freelance:</strong><span className="whitespace-no-wrap card-body">Available</span></li>
        </ul>
      </section>
      
    </section>
  );
};

export default Ab;
