"use client";
import React, { useState } from "react";
import Link from "next/link";

type LinkItem = {
  href: string;
  label: string;
};

const menuData: Record<string, LinkItem[]> = {
  MenuLeft: [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/add-property", label: "Add Property" },
  ],
  MenuRight: [
    { href: "/profile", label: "Profile" },
    { href: "/settings", label: "Settings" },
    { href: "/logout", label: "Logout" },
  ],
};

interface DropdownProps {
  menuText: "MenuLeft" | "MenuRight";
  position?: "left" | "right";
}

export default function Dropdown({ menuText, position = "left" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const list = menuData[menuText]; 
  
  const finalPosition = position === "right" || menuText === "MenuRight" ? "right" : "left";
  
const buttonClasses = 
  "h-full px-12 bg-purple-300 text-black font-semibold flex items-center gap-2 focus:outline-none";

 
  const menuClasses = 
    `absolute top-full ${finalPosition === "left" ? "left-0" : "right-0"} w-40 bg-purple-900 rounded-b-md shadow-lg z-20`;
  
  if (!list) return null; 

  return (
    <div className="relative h-full">
      <button
        className={buttonClasses}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {menuText}
        <span className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className={menuClasses}>
          {list.map((item) => (
            <Link
              key={item.label}
              href={item.href}

              className="block px-4 py-4 hover:bg-purple-700 transition" 
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}