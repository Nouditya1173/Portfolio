import React from 'react'
//import HeroImage from '../assets/heroImage.png';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl mt-16 sm:text-7xl font-bold text-white">I'm a Full Stack Web Developer</h2>
                <p className="text-xl text-gray-500 py-4 max-w-md ">
                    I am a third year student at Indore Institute of Science and Technology.
                    Currently, I'm pursuing my Bachelor degree in Computer Science.
                    I'm learning to work on web application using technologies like
                    React JS, Tailwind, Bootstrap, Rapid API.
                    I'm also proficient in programming languages like C, C++, Java and JavaScript.
                </p>

                <div>
                    <Link
                     to="projects" 
                     smooth 
                     duration={500} 
                     className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio 
                        <span className="group-hover:rotate-90 duration-300">
                        <MdKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
               
            </div>
        </div>
    </div>
  )
};

export default Home;