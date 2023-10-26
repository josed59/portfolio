import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import collab from "@images/collab.png";
import { FaReact, 
        FaSass} from "react-icons/fa";
import { AiOutlineHtml5,
        AiFillGithub } from "react-icons/ai";
  import{
        SiCsharp,
        SiMicrosoftazure} from "react-icons/si";
import {BsFiletypeSql} from "react-icons/bs";

export default function Portfolio(){
  const t = useTranslations('portfolio');
    return(
        <section className="py-10">
        <div className="text-center">
          <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            {t("description")}
          </p>
        </div>
        <div className="flex  flex-col  items-center">
          <div className=" md:w-1/2">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              src={collab}
            />
          </div>
          <div className=" text-center md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">Collab.</h2>
              <p className="text-gray-600">{t("collabText")}</p>
              <div className="flex items-center flex-row gap-5  md:flex-wrap mt-4">
                  <FaReact className="w-8 h-8 text-blue-500 basis-1/4 flex-1"/>
                  <AiOutlineHtml5 className="w-8 h-8  text-html5 basis-1/4 flex-1 "/>
                  <FaSass className="w-8 h-8 text-red-500 basis-1/4 flex-1 "/>
                  <SiCsharp className="w-8 h-8 text-black basis-1/4 flex-1 "/>
                  <BsFiletypeSql className="w-8 h-8 text-green-800 basis-1/4 flex-1 "/>
                  <SiMicrosoftazure className="w-8 h-8 text-blue-700 basis-1/4 flex-1 "/>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mt-4">Git:</h2>
              </div>
              <div className="flex flex-row gap-4 justify-around pt-8">
                <div className="flex items-center gap-4 ">
                  <p>Frontend</p>
                  <a href="https://github.com/josed59/collab." target="_blank" rel="noopener noreferrer">
                    <AiFillGithub className="w-8 h-8 text-orange-500 "/>
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <p>Backend</p>
                  <a href="https://github.com/josed59/collabbacked" target="_blank" rel="noopener noreferrer" >
                    <AiFillGithub className="w-8 h-8 text-orange-500 "/>
                  </a>
                </div>
              </div>
              <Link className="text-blue-500 hover:underline block mt-4" href="/portfolio/collab">
                 {t("check")}
              </Link>
            </div>
          </div>

        </div>

      </section>
    );
}