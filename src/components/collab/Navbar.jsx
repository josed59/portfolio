'use client'

import React, {useState,useEffect}from "react";
import Image from "next/image";
import CollabLogo from '@components/collab/CollabLogo.jsx';
import {BsGlobe} from 'react-icons/bs';
import LocaleSwitcher from "@components/LocaleSwitcher";
import menu from '@images/menu.png';
import Menu from '@components/collab/Menu.jsx';



export default function Navbar(){
    const [isSmallScreen, setIsSmallScreen] = useState(true);
    const[showMenu,setShowMenu] = useState(false);

    const toggleMenu= ()=>{
       setShowMenu(!showMenu);
    };

    useEffect(() => {
        // Detecta el ancho de la pantalla y actualiza isSmallScreen en función de tu lógica.
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768); // Aquí se asume que 768px es el umbral para una pantalla pequeña.
        };
    
        // Agrega un event listener para detectar cambios en el tamaño de la pantalla.
        window.addEventListener('resize', handleResize);
    
        // Limpia el event listener al desmontar el componente.
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return(
        <nav className=" min-w-360 h-14 border-b border-black-100 bg-[#F1F3F5] md:px-20 lg:px-40">
            <ul className="flex items-center">
                <li className="pl-4">
                    <CollabLogo 
                        viewBox="35 35 150 60"
                        style={{ width:'150px', height:'44px'}}
                    />
                </li>
                <li className="flex items-center px-4 relative ml-auto">
                    <div className="cursor-pointer hidden md:block justify-center items-center w-36 h-9 flex-shrink-0 bg-[#CA4336] rounded-lg mr-4">
                        <p className="text-white text-center font-roboto text-base font-normal leading-normal tracking-tight">
                            <a href="https://yellow-flower-0d72f9810.3.azurestaticapps.net/#/login">
                                Log in
                            </a>
                        </p>
                    </div>
                    <BsGlobe className='hidden md:block cursor-pointer text-2xl'/>
                    <LocaleSwitcher />
                </li>
                <li className="block md:hidden mx-2">
                    <Image src={menu} className="cursor-pointer" onClick={toggleMenu}/>
                </li>
            </ul>     
           { (showMenu && isSmallScreen) && <Menu /> }
        </nav>
    );
}