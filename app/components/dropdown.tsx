"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const list = [
  { href: "/", label: "Home" },
  { href: "/prueba1", label: "Prueba1" },
  { href: "/prueba2", label: "Prueba2" },
];

export default function Dropdown({ menuText }: { menuText: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto md:mx-28 relative flex flex-col items-center w-[340px] bg-purple-700">
      <button
        className="bg-purple-400 p-4 2-full flex items-center justify-between font-bold text-xl rounded-lg t"
        onClick={() => setIsOpen((prev) => !prev)}
        onBlur={() => setIsOpen(false)}
      >
        {menuText}
      </button>
      {isOpen && (
        <div className="absolute top-20 w-full bg-pink-950 p-4 rounded-lg z-10">
          {list.map((item) => (
            <div
              key={item.label}
              className="flex w-full justify-between hover:bg-blue-400 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
            >
              <Link href={item.href} className='flex-1 text-xl text-white rounded-md px-3 py-2'
              onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
