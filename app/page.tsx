
import React from "react";
import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
    return (
      <>
        <Header />
        <section id='conceptos'>
          <h1 className="text-2xl font-extrabold text-slate-100 p-3 mx-auto mb-6 overflow-clip">Conceptos Fundamentales</h1>
          <ul className="m-3 md:m-8 flex flex-col md:flex-row space-y-0 md:space-x-6">
            

          </ul>
        </section>
      </>
    );
}