import React from "react";
import CollabLogo from '@components/collab/CollabLogo.jsx';


export default function Footer(){
    return(
        <footer className="sticky bottom-0 w-screen bg-[#262B28] h-[124px] md:h-[80px] ">
            <ul className="pl-4">
                <li >
                    <CollabLogo 
                        viewBox="35 35 150 60"
                        style={{ width:'150px', height:'44px'}}
                    />
                </li>
                <li className="flex flex-col gap-3 md:flex-row text-white font-roboto text-base font-normal leading-normal tracking-tight">
                    <a href="https://yellow-flower-0d72f9810.3.azurestaticapps.net/#/login">
                        Log in
                    </a>
                    <a href="#">
                        Contact
                    </a>
                    
                </li>
            </ul>
        </footer>
    );
}