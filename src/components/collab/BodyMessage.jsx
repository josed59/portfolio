import React from "react";
import Image from "next/image";
import teamMember from '@images/teamMember.png';
import backlog from '@images/backlog.png';
import {useTranslations} from 'next-intl';


export default function BodyMessage(){
  const t = useTranslations('collab');
    return(
        <section className="md:px-20 lg:px-40 mt-20  md:mt-2 mb-2 md:mb-8">
            <ul className="flex justify-center flex-col">
                <li className="pt-4">
                    <h2 className="text-black text-center font-roboto text-2xl font-semibold leading-normal tracking-tight">
                        {t('titleApp')}</h2>
                    <p className="text-black text-center font-roboto text-base font-normal leading-normal tracking-tight">
                        {t('subTitleApp')}</p>
                </li>
                <li className="flex justify-center pt-4">
                    <Image src={teamMember} />
                </li>
                <li className="pt-4">
                    <p className="text-black text-center font-roboto text-base font-normal leading-normal tracking-tight"
                    >{t('subTitle2')}</p>
                </li>
                <li className="flex justify-center pt-4">
                    <Image src={backlog} />
                </li>
                <li className="pt-4">
                     <h2 className="text-black text-center font-roboto text-2xl font-semibold leading-normal tracking-tight">
                     {t('dreamTitle')}</h2>
                    <p className="text-black text-center font-roboto text-base font-normal leading-normal tracking-tight px-4">
                    {t('dreamText')}</p>
                </li>
            </ul>
        </section>
    );
}