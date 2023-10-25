import React from "react";

export default function Main({ children }){
    return(
        <main className='bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
            {children}
        </main>
    );
}