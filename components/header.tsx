import React from "react";
import logoheader from "@/public/react-core-concepts.png";
import Image from "next/image";

export default function Header() {
    return (
        <header id='cabecera' className= 'flex flex-col items-center justify-center  bg-slate-800'>
            <Image src={logoheader} alt='React concepts' width={150} />
            <h1 className='font-sixty-four w-5/6 text-center text-3xl font-extrabold bg-gradient-to-r from-purple-700 to-violet-300 bg-clip-text text-transparent'>
                React Core Concepts
            </h1>
            <h2 className="2-5/6 m-4 text-xl text-slate-200 text-left md:text-center font-sans">Cuatro conceptos fundamentales para entender React</h2>
        </header>
    );
}