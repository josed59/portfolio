import React from "react";
import Image from 'next/image';
import {BsMoonStarsFill,BsGlobe} from 'react-icons/bs';
import deved from "@images/jdAvatar.png";
import {useTranslations} from 'next-intl';
import LocaleSwitcher from "@components/LocaleSwitcher";

export default function Navbar(){
    const t = useTranslations('navbar');
    return(
        <section className='min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between'>
                <h1 className='text-xl font-burtons'>Fullstack | IT Project Manager</h1>
                <ul className=' flex items-center'>
                <li className="flex items-center px-4 relative">
                    <BsGlobe className='hidden md:block cursor-pointer text-2xl'/>
                    <LocaleSwitcher />
                </li>
                {/* <li>
                    <BsMoonStarsFill className='cursor-pointer text-2xl'/>
                </li> */}
                <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='https://1drv.ms/b/s!Av26DqJMpErCnhQZAGFYYdN5O28Y?e=kqVBXh'
                target="_blank" rel="noopener noreferrer"
                >Resume</a></li>
                </ul>
            </nav>
            <div className="text-center p-10 py-10 md:flex items-center" >
                <div className="w-full md:w-1/2">
                <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                    José Ramírez
                </h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                    {t('title')}
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                    {t('description')}
                </p>
                </div>
                <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden mt-20 md:h-80 md:w-80 lg:h-96 lg:w-96">
                <Image src={deved} fill style={{objectFit:"cover"}} />
                </div>
            </div>
        </section>
    );
};