import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Team",
      path: "team",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <nav className="w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
      <h1 className="text-white md:text-4x1 text-3x1 font-bold">
        Strong <span className="text-red-500 italic">Zone</span>
      </h1>

      {/* Navigation Links */}
      <ul className="lg:flex justify-center items-center gap-10 hidden">
        {navItems.map(({ link, path }) => (
          <li key={path}>
            <Link
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              duration={500}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-white"
              onClick={closeMenu}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="bg-red-600 hover:bg-blue-900 text-white px-10 py-3 rounded-full font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden">BOOK NOW</button>

      {/* Mobile Menu */}
      <div className="flex justify-center items-center lg:hidden mt-3" onClick={toggleMenu}>
        <div>
            {isMenuOpen ? <FaXmark className="text-white text-3x1 cursor-pointer" /> : <FaBars className="text-white text-3x1 cursor-pointer" />}
        </div>
      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-black p-4 absolute top-[72px] left-0`} >

      </div>

      {/* {isMenuOpen && (
        <ul className="absolute top-full left-0 bg-black w-full flex flex-col items-center gap-4 py-4">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                smooth={true}
                duration={500}
                className="text-white cursor-pointer"
                onClick={closeMenu}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )} */}

    </nav>
  );
};

export default Header;
