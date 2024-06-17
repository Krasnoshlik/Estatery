"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import PropertiesCard from "../ui/propertiesCard";

import searchIcon from "../../../../public/icons/searchTrans.png";
import { data } from '../../../../data';

export default function PropertiesSection() {
  const [pickedButton, setPickedButton] = useState("r");
  return (
    <section className=" py-12 flex flex-col gap-4">
      <div className=" flex flex-col gap-4 text-center">
        <h3 className=" font-bold text-[32px]">Based on your location</h3>
        <p className=" text-[#000929]">
          Some of our picked properties near you location.
        </p>
      </div>

      <div className=" flex flex-col gap-4">
        <div className="py-2 px-4 flex flex-row-reverse items-center gap-3 bg-[#F7F7FD] border border-[#E0DEF7] rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className=" bg-[#F7F7FD] flex-grow py-2 px-4 rounded-lg focus:outline-none"
          />
          <button>
            <Image src={searchIcon} alt="Search" width={20} height={20} />
          </button>
        </div>

        <div className=" max-w-[328px] border-2 p-2 flex gap-2 rounded-lg bg-[#EFEFFB] text-[#6C727F] font-medium text-lg">
          <button
            className={`px-4 py-2 rounded-md w-full ${
              pickedButton === "r"
                ? " bg-white border text-light-purple font-bold"
                : null
            } `}
            onClick={() => setPickedButton("r")}
          >
            Rent
          </button>
          <button
            className={`px-4 py-2 rounded-md w-full ${
              pickedButton === "b"
                ? " bg-white border text-light-purple font-bold"
                : null
            } `}
            onClick={() => setPickedButton("b")}
          >
            Buy
          </button>
          <button
            className={`px-4 py-2 rounded-md w-full ${
              pickedButton === "s"
                ? " bg-white border text-light-purple font-bold"
                : null
            } `}
            onClick={() => setPickedButton("s")}
          >
            Sell
          </button>
        </div>

        <div className=" flex gap-3 overflow-x-scroll hide-scrollbar">
            {data.map((item,index) => {
                return (
                    <PropertiesCard item={item} key={index}/>
                )
            })}
        </div>
        <button className=" w-full bg-dark-purple text-white rounded-lg py-3">Browse more properties</button>
      </div>
    </section>
  );
}
