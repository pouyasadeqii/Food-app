import React from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex items-center justify-between p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-sm">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* search input */}

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[140px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>

      {/* cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 px-4 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* mobile Menu */}
      {/* Overlay */}

      {nav && (
        <div className="bg-black/80 fixed top-0 left-0 w-full h-screen"></div>
      )}

      {/* side drawer menu */}

      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex text-xl py-4 cursor-pointer mb-2">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="flex text-xl py-4 cursor-pointer mb-2">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="flex text-xl py-4 cursor-pointer mb-2">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="flex text-xl py-4 cursor-pointer mb-2">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="flex text-xl py-4 cursor-pointer mb-2">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="flex text-xl py-4 cursor-pointer mb-2">
              <BsFillSaveFill size={25} className="mr-4" /> Best One
            </li>
            <li className="flex text-xl py-4 cursor-pointer mb-2">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
