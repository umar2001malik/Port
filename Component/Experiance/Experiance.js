import React from 'react';
import { Card } from 'react-bootstrap';
import '../Style/Common.css';

// Import images
import htmlImg from "../../Img/html.webp";
import cssImg from "../../Img/css.webp";
import bootstrapImg from "../../Img/bootstrap.png";
import jsImg from "../../Img/js.jpg";
import reactImg from "../../Img/react.png";
import tailwindImg from "../../Img/tailwind.webp";
import firebaseImg from "../../Img/firebase.png";

const Project = () => {
  // Array of project objects
  const projects = [
    {
      logo: htmlImg,
      title: 'HTML ',
      description: 'I am proficient in HTML, adept at crafting structured and semantic web pages to enhance user experience and accessibility.'
    },
    {
      logo: cssImg,
      title: 'CSS ',
      description: 'I excel in CSS, skillfully styling web elements to create visually appealing and responsive designs.'
    },
    {
      logo: bootstrapImg,
      title: 'Bootstrap ',
      description: 'I am proficient in Bootstrap, leveraging its powerful framework to create sleek and responsive user interfaces efficiently.'
    },
    {
      logo: jsImg,
      title: 'JavaScript ',
      description: 'I possess strong skills in JavaScript, enabling me to develop dynamic and interactive user-friendly web applications with ease.'
    },
    {
      logo: reactImg,
      title: 'React',
      description: 'I am proficient in React.js, adept at building modern, interactive, and scalable web applications with ease.'
    },
    {
      logo: tailwindImg,
      title: 'Tailwind CSS  ',
      description: 'I am skilled in Tailwind CSS, utilizing its utility-first approach to design and develop efficient and customizable user interfaces.'
    },
    {
      logo: firebaseImg,
      title: 'Firebase ',
      description: 'I have fundamental Firebase skills in CRUD operations, user authentication, and used Firebase for dynamic data in my one-page project .  '
    }
    // Add more project objects as needed
  ];

  return (
    <>
      <h2 className='heading ml-6 mt-36 text-3xl md:text-4xl lg:text-5xl' id='Experinace'> Experience</h2>
      <div className="flex flex-wrap justify-between " >
        {projects.map((project, index) => (
          <div key={index} className=" mt-10 m-4 md:mt-0 md:m-0 md:w-1/3 lg:w-1/4 xl:w-1/4">
            <Card className='rounded-full md:ml-0 w-72 md:w-72 border-2 border-black '>
              <div className='card-body w-300 h-300 flex flex-col justify-center items-center'>
                <div className="w-24 h-24 flex items-center justify-center">
                  <img src={project.logo} className="w-full h-full card-body" alt={`Logo ${index + 1}`} />
                </div>
                <h3 className="text-2xl font-semibold  text-center card-body heading">{project.title}</h3>
                <p className="text-md  text-center card-body">{project.description}</p>
              </div>
            </Card>
          </div>
          
        ))}
      </div>
        
    </>
  );
};

export default Project;
