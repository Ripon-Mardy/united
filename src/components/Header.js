import React from "react";
import Image from "next/image";
import Link from "next/link";

// === images ====
import unitedLogo from "./../../public/Image/United.png";

// === icons ===
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full container mx-auto py-1">
      <div className="flex items-center justify-between">
        {/* === logo === */}
        <div>
          <Image src={unitedLogo} width={150} height={150}></Image>
        </div>
        {/* === logo right === */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-end">
            <ul className="flex items-center justify-center gap-3">
              <li className="bg-facebookBg text-white p-1 rounded-full text-sm inline-block cursor-pointer border hover:border-gray-800 duration-200 ease-in-out hover:bg-transparent hover:text-black">
                <FaFacebookF />
              </li>
              <li className="bg-youtubeBg text-white p-1 rounded-full text-sm inline-block cursor-pointer border hover:border-gray-800 duration-200 ease-in-out hover:bg-transparent hover:text-black">
                <FaYoutube />
              </li>
              <li className="bg-linkedinBg text-white p-1 rounded-full text-sm inline-block cursor-pointer border hover:border-gray-800 duration-200 ease-in-out hover:bg-transparent hover:text-black">
                <FaLinkedin />
              </li>
              <li className="bg-instagramBg text-white p-1 rounded-full text-sm inline-block cursor-pointer border hover:border-gray-800 duration-200 ease-in-out hover:bg-transparent hover:text-black">
                <FaInstagramSquare />
              </li>
              <li className="bg-whatsappBg text-white p-1 rounded-full text-sm inline-block cursor-pointer border hover:border-gray-800 duration-200 ease-in-out hover:bg-transparent hover:text-black">
                <FaWhatsappSquare />
              </li>
            </ul>
          </div>
          {/* === send navbar === */}
          <div>
            <ul className="flex items-center justify-center gap-14 text-lg font-medium text-textNavColor">
              <Link   href={"#"}>About Us </Link>
              <Link href={"#"}> Contact </Link>
              <Link href={"#"}> FAQ </Link>
              <Link href={"#"}> Gallery </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
