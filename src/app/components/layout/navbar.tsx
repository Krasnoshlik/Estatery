"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";

import PurpleButton from "../ui/purpleButton";

import { LikedItemsContext } from '../../contexts/LickedItems';
import LikedItemsCard from "../ui/likedItemsCard";
import { itemType,LikedItemsContextType } from "@/app/types";

// images
import Logo from "../../favicon.png";
import mobileMenu from "../../../../public/mobileMenu.png";

export default function Navbar() {
  const context = useContext<LikedItemsContextType | undefined>(LikedItemsContext);
  if (!context) {
    throw new Error('Navbar must be used within a MyProvider');
  }
  const { likedItems, removeLiked } = context;
  const [menuOpen, setMenuOpen] = useState(false);
  const [likedItemsMenu, setLikedItemsMenu] = useState(false);

  // handle Menu
  const handleStateChange = (state: any) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // handle likedItemsMenu
  const handlelikedItemsMenu = (state: any) => {
    setLikedItemsMenu(state.isOpen);
  };


  const togglelikedItemsMenu = () => {
    setLikedItemsMenu(!likedItemsMenu);
  };

  return (
    <>
      <nav className="  fixed w-full border-b-[1px] bg-white z-30">
        <div className="flex justify-between py-4 px-6 items-center max-w-6xl m-auto">
        <div className="flex items-center gap-1 hover:cursor-pointer">
          <Image src={Logo} alt="Logo" width={40} height={40} />
          <h1 className="text-dark-purple text-xl font-bold">Estatery</h1>
        </div>

        <div className="hidden sm:block">
          <a href="#" className="px-4 font-medium">
            Rent
          </a>
          <a href="#" className="px-4 font-medium">
            Buy
          </a>
          <a href="#" className="px-4 font-medium">
            Sell
          </a>
        </div>

        <div className="hidden sm:flex gap-2">
        <div className={`border-2 border-[#E8E6F9] p-2 rounded-xl hover:cursor-pointer ${likedItems.length > 0 ? "bg-amber-300 border-[#7065F0]" : ""}`}
 onClick={togglelikedItemsMenu}>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill='#7065F0'
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.31804 2.31804C1.90017 2.7359 1.5687 3.23198 1.34255 3.77795C1.1164 4.32392 1 4.90909 1 5.50004C1 6.09099 1.1164 6.67616 1.34255 7.22213C1.5687 7.7681 1.90017 8.26417 2.31804 8.68204L10 16.364L17.682 8.68204C18.526 7.83812 19.0001 6.69352 19.0001 5.50004C19.0001 4.30656 18.526 3.16196 17.682 2.31804C16.8381 1.47412 15.6935 1.00001 14.5 1.00001C13.3066 1.00001 12.162 1.47412 11.318 2.31804L10 3.63604L8.68204 2.31804C8.26417 1.90017 7.7681 1.5687 7.22213 1.34255C6.67616 1.1164 6.09099 1 5.50004 1C4.90909 1 4.32392 1.1164 3.77795 1.34255C3.23198 1.5687 2.7359 1.90017 2.31804 2.31804V2.31804Z"
                stroke="#7065F0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <button className="px-4 border-2 rounded-lg font-bold text-[#000929]">Login</button>
          <PurpleButton text={"Sign up"} />
        </div>

        {/* Mobile view */}
        <div
          className="flex sm:hidden hover:cursor-pointer gap-2 items-center"
          
        >
          <div className={`border-2 border-[#E8E6F9] p-2 rounded-xl hover:cursor-pointer ${likedItems.length > 0 ? "bg-amber-300 border-[#7065F0]" : ""}`}
 onClick={togglelikedItemsMenu}>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill='#7065F0'
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.31804 2.31804C1.90017 2.7359 1.5687 3.23198 1.34255 3.77795C1.1164 4.32392 1 4.90909 1 5.50004C1 6.09099 1.1164 6.67616 1.34255 7.22213C1.5687 7.7681 1.90017 8.26417 2.31804 8.68204L10 16.364L17.682 8.68204C18.526 7.83812 19.0001 6.69352 19.0001 5.50004C19.0001 4.30656 18.526 3.16196 17.682 2.31804C16.8381 1.47412 15.6935 1.00001 14.5 1.00001C13.3066 1.00001 12.162 1.47412 11.318 2.31804L10 3.63604L8.68204 2.31804C8.26417 1.90017 7.7681 1.5687 7.22213 1.34255C6.67616 1.1164 6.09099 1 5.50004 1C4.90909 1 4.32392 1.1164 3.77795 1.34255C3.23198 1.5687 2.7359 1.90017 2.31804 2.31804V2.31804Z"
                stroke="#7065F0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
          <Image src={mobileMenu} alt="mobileMenu" width={24} height={24} onClick={toggleMenu}/>
          </div>
        </div>
        </div>
      </nav>

      {/* mobileMenu */}
      <Menu
        right
        isOpen={menuOpen}
        onStateChange={handleStateChange}
        customBurgerIcon={false}
        customCrossIcon={<div>X</div>}
        className="bg-white"
      >
        <a
          id="home"
          className="menu-item block py-2 pl-4"
          href="#"
          onClick={closeMenu}
        >
          Rent
        </a>
        <a
          id="about"
          className="menu-item block py-2 pl-4"
          href="#"
          onClick={closeMenu}
        >
          Buy
        </a>
        <a
          id="contact"
          className="menu-item block py-2 pl-4"
          href="#"
          onClick={closeMenu}
        >
          Sell
        </a>
      </Menu>


      {/* likedItemsMenu */}
      <Menu
        right
        isOpen={likedItemsMenu}
        onStateChange={handlelikedItemsMenu}
        customBurgerIcon={false}
        customCrossIcon={<div>x</div>}
        className="bg-white pt-5 pl-2"
      >
        <div>
          {likedItems.map((item: itemType,index: number) => {
            return (
              <LikedItemsCard item={item} key={index} removeLiked={removeLiked}/>
            )
          })}
          {likedItems.length === 0 && (<div>No liked properties</div>)}
        </div>
      </Menu>
    </>
  );
}
