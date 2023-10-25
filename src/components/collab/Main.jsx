import React from "react";
 
export default function Main({ children }){
    return(
        <main className="flex-grow w-screen">
            {children}
        </main>
    );
}