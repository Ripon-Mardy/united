import React from "react";
import Image from "next/image";
import Link from "next/link";

// === image ===
import unitedLogo from "./../../public/Image/United.png";

// === icons ===
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaWhatsappSquare,
  FaBars 
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="container mx-auto w-full py-3">
      <div className="flex items-center justify-between">
       <div className="flex justify-between items-center w-full">
         {/* ====logo === */}
        <div>
        <Link href={"#"} >
          <Image src={unitedLogo} width={150} height={150} alt="united" className="md:w-52"></Image>
        </Link>
        </div>
        {/* === mobile bar ===  */}
        <div className="text-2xl cursor-pointer text-gray-700 block xl:hidden">
            <FaBars/>
        </div>

          {/* ==== end mobile bar === */}
       </div>
        {/* === socail === */}
        <div className="xl:flex flex-col hidden w-full">
          

          <div className="flex items-center justify-end gap-5">
            <Link
              href={"#"}
              className="bg-facebookBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent hover:text-black ease-in-out duration-200"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"#"}
              className="bg-youtubeBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent hover:text-black ease-in-out duration-200"
            >
              <FaYoutube />
            </Link>
            <Link
              href={"#"}
              className="bg-linkedinBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent hover:text-black ease-in-out duration-200"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={"#"}
              className="bg-instagramBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent hover:text-black ease-in-out duration-200"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"#"}
              className="bg-whatsappBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent hover:text-black ease-in-out duration-200"
            >
              <FaWhatsappSquare />
            </Link>
          </div>

          <div className="flex items-center justify-end md:gap-16 mt-2">
            <Link
              href={"#"}
              className="text-lg text-textNavColor cursor-pointer font-medium"
            >
              About us
            </Link>
            <Link
              href={"#"}
              className="text-lg text-textNavColor cursor-pointer font-medium"
            >
              Contact{" "}
            </Link>
            <Link
              href={"#"}
              className="text-lg text-textNavColor cursor-pointer font-medium"
            >
              FAQ{" "}
            </Link>
            <Link
              href={"#"}
              className="text-lg text-textNavColor cursor-pointer font-medium"
            >
              Gallery
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
