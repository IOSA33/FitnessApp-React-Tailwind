import React from "react";

export default function Hero() {
    return(
        <div className='min-h-screen flex flex-col gap-10 items-center 
        justify-center max-w-[800px] w-full mx-auto p-4'>
            <p> IT'S time </p>
            <h1>IOSA</h1>
            <p>Your text...</p>

            <button className="px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
                <p>Accept & Begin</p>
            </button>

        </div>
    )
}
