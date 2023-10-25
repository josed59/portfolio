import React from "react";

export default function Menu(){
    return(
        <div className="flex justify-center items-center mt-3 fixed top-10 right-[-2px] h-20 bg-[#F1F3F5] p-4 rounded-md">
            <div className="flex justify-center items-center w-36 h-9 flex-shrink-0 bg-[#CA4336] rounded-lg">
                <p className="text-white text-center font-roboto text-base font-normal leading-normal tracking-tight"
                >Log in</p>
            </div>
        </div>
    );
}