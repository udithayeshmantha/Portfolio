import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px text-white bg-black fixed">
      <div>
        <img className="w-14 m-5" src={Logo} alt="" />
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10">
        <FaBars size={30} />
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
};

export default NavBar;
