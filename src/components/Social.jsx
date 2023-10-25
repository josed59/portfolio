import React from "react";
import {
    AiFillLinkedin,
    AiFillGithub,
  } from "react-icons/ai";
import { HiOutlineMail } from 'react-icons/hi'

export default function Social(){
    return(
        <div className="hidden md:flex fixed md:flex-col md:top-[35%] md:left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex items-center justify-between w-full h-full text-gray-300 px-4" 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/josedramirez-50338a85">
                Linkedid <AiFillLinkedin size={30}/>
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a className="flex justify-between items-center w-full text-gray-300 px-4" 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://github.com/josed59">
                Github <AiFillGithub size={30}/>
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
              <a className="flex justify-between items-center w-full text-gray-300 px-4"  
              href="mailto:josedavidrc59@gmail.com">
                Email <HiOutlineMail size={30}/>
              </a>
            </li>
          </ul>
        </div>
    );

}