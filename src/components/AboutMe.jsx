import React from "react";
import Image from 'next/image';
import gears from "@images/gears.png";
import rocket from "@images/rocket.png";
import leader from "@images/leader.png";
import {useTranslations} from 'next-intl';
import { FaReact, 
         FaSass} from "react-icons/fa";
import { FcLowBattery, 
         FcHighBattery,
         FcFullBattery,
         FcMiddleBattery} from "react-icons/fc";
import { AiOutlineHtml5,
         AiOutlineBarChart,
         AiFillGithub } from "react-icons/ai";
import{SiTailwindcss,
       SiAzuredevops,
       SiMicrosoftazure,
       SiDocker,
       SiJira,
       SiCsharp} from "react-icons/si";
import {BsFiletypeSql} from "react-icons/bs";
import {RiTeamLine,RiTeamFill} from "react-icons/ri";

export default function AboutMe(){
  const t = useTranslations('aboutMe');
  const f = useTranslations('frontend');
  const b = useTranslations('backend');
  const l = useTranslations('leader');



    return(
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">{t('title')}</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              {t('experience')}
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              {t('subtitle')}
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={rocket} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Frontend
              </h3>
              <p className="py-2">
                  {f('description')}
              </p>
              <h4 className="py-4 text-teal-600">{f('title')}</h4>
              <div className="flex items-center justify-center gap-4">
                  <FaReact className="w-6 h-6 text-blue-500"/>
                  <p className="text-gray-800 py-1">React</p>
                  <FcHighBattery className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-center gap-4">
                  <AiOutlineHtml5 className="w-6 h-6 text-html5"/>
                  <p className="text-gray-800 py-1">html</p>
                  <FcFullBattery className="w-6 h-6" />
                  
              </div>
              <div className="flex items-center justify-center gap-4">
                  <FaSass className="w-6 h-6 text-red-500"/>
                  <p className="text-gray-800 py-1">Sass</p>
                  <FcMiddleBattery className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-center gap-4">
                  <SiTailwindcss className="w-6 h-6 text-blue-400"/>
                  <p className="text-gray-800 py-1">Tailwind</p>
                  <FcLowBattery className="w-6 h-6" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={gears} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Backend
              </h3>
              <p className="py-2">
                {b('description')} 
              </p>
              <h4 className="py-4 text-teal-600">{b('title')} </h4>
              <div className="flex items-center justify-center gap-4">
                  <SiCsharp className="w-6 h-6 text-black"/>
                  <p className="text-gray-800 py-1">.Net C#</p>
                  <FcMiddleBattery className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-center gap-4">
                  <BsFiletypeSql className="w-6 h-6 text-green-800"/>
                  <p className="text-gray-800 py-1">SQL</p>
                  <FcFullBattery className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-center gap-4">
                  <SiDocker className="w-6 h-6 text-blue-500"/>
                  <p className="text-gray-800 py-1">Docker</p>
                  <FcMiddleBattery className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-center gap-4">
                  <SiMicrosoftazure className="w-6 h-6 text-blue-700"/>
                  <p className="text-gray-800 py-1">Azure</p>
                  <FcMiddleBattery className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-center gap-4">
                  <SiAzuredevops className="w-6 h-6 text-blue-500"/>
                  <p className="text-gray-800 py-1">Azure CI/CD </p>
                  <FcMiddleBattery className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-center gap-4">
                  <AiFillGithub className="w-6 h-6 text-orange-500"/>
                  <p className="text-gray-800 py-1">Git</p>
                  <FcFullBattery className="w-6 h-6" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={leader} width={100} height={100} className="rounded-full w-24 h-24 overflow-hidden" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">{l("heading")}</h3>
              <p className="py-2">
              {l('description')} 
              </p>
              <h4 className="py-4 text-teal-600">{l('title')}</h4>
              <div className="flex items-center justify-center gap-4">
                  <RiTeamFill className="w-6 h-6 text-black"/>
                  <p className="text-gray-800 py-1">PMP</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                  <RiTeamLine className="w-6 h-6 text-yellow-600"/>
                  <p className="text-gray-800 py-1">Scrum</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                  <SiJira className="w-6 h-6 text-blue-600"/>
                  <p className="text-gray-800 py-1">Jira</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                  <AiOutlineBarChart className="w-6 h-6 text-red-600"/>
                  <p className="text-gray-800 py-1">MS Project</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                  <SiAzuredevops className="w-6 h-6 text-blue-500"/>
                  <p className="text-gray-800 py-1">Azure Board</p>
              </div>
            </div>
          </div>
        </section>
    );
}