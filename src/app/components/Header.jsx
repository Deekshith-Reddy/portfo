import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";

export default function Header() {
  return (
    <div className="flex justify-between p-4 ">
      <div className="flex items-center w-auto flex-row basis-2/3 p-0.5 ">
        {/* Homepage */}
        <div className="rounded-2xl border-2 border-white p-0.5 basis-1/3 ">
          <div className="flex items-center rounded-2xl border-2 border-white p-0.5 justify-between hover:bg-white group transition duration-300">
            <p className="p-0.5 group-hover:text-black">Home page</p>
            <div className="flex bg-white rounded-full h-6 w-6 px-1 group-hover:bg-black">
              <BsArrowRight className="text-black overflow-hidden h-6 w-6 group-hover:text-white" />
            </div>
          </div>
        </div>

        {/* Portfolio and Category */}
        <div className="flex rounded-2xl border-2 border-white p-0.5 basis-2/3">
          <div className="flex rounded-2xl border-2 border-white p-1 basis-1/2 justify-between hover:bg-white group transition duration-300 mr-1">
            <p className="group-hover:text-black">Portfolio</p>
            <div className="bg-red-500 rounded-2xl px-2">
            <p>190+</p>
            </div>
           
          </div>
          <div className="flex rounded-2xl border-2 border-white p-1 basis-1/2 justify-between hover:bg-white group transition duration-300">
            <p className="group-hover:text-black">Cateogry</p>
            <div className="bg-amber-500 rounded-2xl px-2 ">
              <p className="">Collections</p>
            </div>
          </div>
        </div>
      </div>
      {/* Socials */}
      <div className="flex items-center">
        <TiSocialLinkedinCircular className="rounded-xl text-5xl hover:bg-white hover:text-black transition duration-300"/>
        <TiSocialInstagramCircular className="rounded-xl text-5xl hover:bg-white hover:text-black duration-300"/>
        <TiSocialTwitterCircular className="rounded-xl text-5xl hover:bg-white hover:text-black duration-300"/>
      </div>
    </div>
  );
}
