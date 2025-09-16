"use client";

import React, { useState } from "react";
import { Home, User, MessageSquare, Camera, Settings, QrCode, Shirt, ArrowRightLeft, ArrowLeftRight, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const Menus = [
    { id: 1, name: "Home", icon: Home, dis:"translate-x-0" },
    { id: 2, name: "Services", icon: Shirt, dis:"translate-x-16" },
    { id: 3, name: "Cart", icon: ShoppingCart, dis:"translate-x-32" },
    { id: 4, name: "History", icon: ArrowLeftRight, dis:"translate-x-48" },
    { id: 5, name: "Profile", icon: User, dis:"translate-x-64" },
  ];
  
  const [active, setActive] = useState(1);
  
  return (
    <div className="bg-white max-h-[5.4rem] px-6 rounded-t-xl">
      <ul className="flex relative">
        <span className={`bg-sky-400 border-[5px] border-gray-900 w-16 h-16 absolute -top-5 rounded-full ${Menus[active - 1].dis} duration-500`}>
          <span className="w-3.5 h-3.5 rounded-tr-[11px] absolute top-4 -left-[18px] shadow-myShadow1 bg-transparent"></span>
          <span className="w-3.5 h-3.5 rounded-tl-[11px] absolute top-4 -right-[18px] shadow-myShadow2 bg-transparent"></span>
        </span>
        {
          Menus.map((menu) => 
            <li key={menu.id} className="w-16">
              
          <a className="flex flex-col text-center pt-6" onClick={() => setActive(menu.id)}>
            <span className={`flex flex-col items-center text-xl cursor-pointer duration-500 ${active === menu.id && "-mt-6 text-stone-100 font-semibold"} z-10`}>
              <menu.icon size={24} />
            </span>
            <span className={`flex flex-col items-center text-sm duration-500 ${active === menu.id ? "  translate-y-4 opacity-100 p-1" : "translate-y-10 opacity-0"}`}>{menu.name}</span>
          </a>
            </li>
        )
        }
      </ul>
  </div>
  );
};
  export default Navbar;
  