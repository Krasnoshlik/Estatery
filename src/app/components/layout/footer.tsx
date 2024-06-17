import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../favicon.png";

import FaceIcon from '../../../../public/icons/facebook.png';
import InstaIcon from '../../../../public/icons/instagram.png';
import TwitIcon from '../../../../public/icons/twitter.png';
import LinkIcon from '../../../../public/icons/linkedin.png';

export default function Footer() {
  return (
    <footer className=" py-12 px-5">
      <div>
        <div className=" flex items-center gap-1 hover:cursor-pointer">
          <Image src={Logo} alt="Logo" />
          <h1 className=" text-dark-purple text-xl font-bold">Estatery</h1>
        </div>

        <div className=" py-10 flex justify-between border-b-2">
          <div className=" flex flex-col gap-7">
            <div className=" flex flex-col gap-4">
              <h4 className=" font-bold text-sm text-[#000929]">SELL A HOME</h4>
              <div className=" text-sm font-medium flex flex-col gap-2">
                <Link href={"#"}>Request an offer</Link>
                <Link href={"#"}>Pricing</Link>
                <Link href={"#"}>Reviews</Link>
                <Link href={"#"}>Stories</Link>
              </div>
            </div>

            <div className=" flex flex-col gap-4">
              <h4 className=" font-bold text-sm text-[#000929]">BUY A HOME</h4>
              <div className=" text-sm font-medium flex flex-col gap-2">
                <Link href={"#"}>Buy</Link>
                <Link href={"#"}>Finance</Link>
              </div>
            </div>

            <div className=" flex flex-col gap-4">
              <h4 className=" font-bold text-sm text-[#000929]">
                BUY, RENT AND SELL
              </h4>
              <div className=" text-sm font-medium flex flex-col gap-2">
                <Link href={"#"}>Buy & sell properties</Link>
                <Link href={"#"}>Rent home</Link>
                <Link href={"#"}>Builder trade-up</Link>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-7">
            <div className=" flex flex-col gap-4">
              <h4 className=" font-bold text-sm text-[#000929]">
              TERMS & PRIVACY
              </h4>
              <div className=" text-sm font-medium flex flex-col gap-2">
                <Link href={"#"}>Trust & Safety</Link>
                <Link href={"#"}>Terms of Service</Link>
                <Link href={"#"}>Privacy Policy</Link>
              </div>
            </div>

            <div className=" flex flex-col gap-4">
              <h4 className=" font-bold text-sm text-[#000929]">ABOUT</h4>
              <div className=" text-sm font-medium flex flex-col gap-2">
                <Link href={"#"}>Company</Link>
                <Link href={"#"}>How it works</Link>
                <Link href={"#"}>Contact</Link>
                <Link href={"#"}>Investors</Link>
              </div>
            </div>

            <div className=" flex flex-col gap-4">
              <h4 className=" font-bold text-sm text-[#000929]">RESOURCES</h4>
              <div className=" text-sm font-medium flex flex-col gap-2">
                <Link href={"#"}>Blog</Link>
                <Link href={"#"}>Guides</Link>
                <Link href={"#"}>FAQ</Link>
                <Link href={"#"}>Help Center</Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center flex-col w-full text-center gap-5 pt-2 text-[#000929]">
            <p>©2021 Estatery. All rights reserved</p>
            <div className=" flex gap-10 justify-center">
                {[FaceIcon,InstaIcon,TwitIcon,LinkIcon].map((icon,index) => {
                    return(
                        <Image src={icon} alt="Img" key={index} className=" hover:cursor-pointer"/>
                    )
                })}
            </div>
        </div>
      </div>
    </footer>
  );
}
