"use client";

import { FaApple } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";

const navbartextlist = [
  { text: "스토어" },
  { text: "Mac" },
  { text: "iPad" },
  { text: "iPhone" },
  { text: "Watch" },
  { text: "AirPods" },
  { text: "TV 및 홈" },
  { text: "엔터테인먼트" },
  { text: "액세서리" },
  { text: "고객지원" },
];

const NavbarComp = ({ text }) => {
  return (
    <li className="flex items-center">
      <span className="text-[12px] font-[SDR] font-[400] pt-1 text-[#bcbcbc] cursor-pointer">
        {text}
      </span>
    </li>
  );
};

export default function Navbar() {
  return (
    <>
      <nav className="h-[44px] w-full bg-[#444444] top-0 sticky z-50">
        <div className="flex h-full">
          <ul className="flex mx-auto justify-between items-center max-w-[1024px] w-full">
            <li className="flex cursor-pointer">
              <FaApple size={18} color="#bcbcbc" />
            </li>
            {navbartextlist.map((v, i) => (
              <NavbarComp key={i} text={v.text} />
            ))}

            <li className="flex cursor-pointer">
              <AiOutlineSearch size={18} color="#bcbcbc" />
            </li>
            <li className="flex cursor-pointer">
              <AiOutlineShopping size={18} color="#bcbcbc" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
