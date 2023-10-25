import React from "react";
import Image from "next/image";
import Landing  from '@images/landing.svg';
import banner from '@images/collab_banner.png';
import {useTranslations} from 'next-intl';


export default function CollabDescription(){
    const t = useTranslations('collab');
    return(
        <section className="w-full h-[462px]" style={{ 
            background: `url("${Landing.src}") center bottom -0.5px / 100% 14% no-repeat scroll padding-box border-box, 
            linear-gradient(60deg, rgb(202, 67, 54), rgb(231, 179, 179)) 4.38% 99.12% / auto repeat scroll padding-box border-box rgb(241 ,243, 245)`
            }}> 
           <div className="pt-2 text-center text-white flex items-center justify-center flex-col md:flex-row md:gap-[224px] md:pt-10 ">
                <ul>
                    <li>
                        <h1 className=" inline-block clear-none font-inter text-3xl font-bold w-64 h-16 flex-shrink-0">
                            {t('title')}
                        </h1>
                    </li>
                    <li>
                        <h2 className=" text-white text-center font-roboto text-2xl font-semibold mt-6">
                            {t('subTitle')}
                        </h2>
                    </li>
                </ul>
                <div>
                    <Image src={banner} />
                </div>
            </div>
        </section>
    );
}   