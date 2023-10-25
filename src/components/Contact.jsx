import React from "react";
import {
    AiFillLinkedin,
    AiFillGithub,
  } from "react-icons/ai";
import { HiOutlineMail } from 'react-icons/hi'

export default function Contact(){
    return(
        <section className="md:hidden">
            <ul className="flex flex-row justify-between items-center">
                <li className="w-full h-[60px] bg-blue-600">
                    <a className="flex flex-col items-center justify-center w-full h-full  text-gray-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/josedramirez-50338a85"
                    >
                        <AiFillLinkedin size={60}/>
                        Linkedid
                    </a>
                </li>
                <li className="w-full  h-[60px] bg-[#333333]">
                    <a className="flex flex-col items-center justify-center w-full h-full  text-gray-300" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://github.com/josed59">
                        <AiFillGithub size={60}/>
                        Github
                    </a>
                </li>
                <li className="w-full  h-[60px] bg-[#6fc2b0]">
                    <a className="flex flex-col items-center justify-center w-full h-full  text-gray-300" 
                    href="mailto:josedavidrc59@gmail.com"
                    >
                        <HiOutlineMail size={60}/>
                        Email
                    </a>
                </li>
            </ul>
        </section>
    );
}