import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import NavLogo from "../utils/NavLogo";
import loginicon from "../assets/login.svg";
import dropdown from "../assets/arrow_drop_down_36dp_000000_FILL0_wght400_GRAD0_opsz40.svg";
import { useAuth } from "../context/AuthContext";
import HeroPage from '../propertiesfeatures/HeroPage';
import hamburger from "../assets/menuwhite.svg";
import closemenu from "../assets/closex.svg";
import bgimage from "../assets/backgroundimage.png";


const Header = () => {
  
  const [showDropdownArrow, setShowDropdownArrow] = useState(false);
  
  const { user, logout } = useAuth();
  
  const [isOpen, setIsOpen] = useState(false);
  
  const navigate = useNavigate();

  
  
  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/");
  };

  
  return (
    <>
      <main style={{ backgroundImage: `url(${bgimage})` }} className="overflow-x-hidden text-white bg-cover bg-center min-h-screen ">
        <nav className="container flex justify-between">
         
          <Link to="/"><main><NavLogo /></main></Link>

          <section className="hidden md:block">
            <ul className=" lg:text-[18px] leading-loose tracking-wide flex lg:gap-[33.05px] font-exo font-[500] gap-[15px]">
              <li>Home</li>
              <li>Properties</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </section>

          
          <section className="md:flex lg:gap-[34px] gap-[20px] hidden relative overflow-x-hidden">
            {user ? (
              <div className="relative flex items-center">
                <div
                  className="md:flex md:items-center md:gap-3 cursor-pointer"
                  onClick={() => setShowDropdownArrow(prev => !prev)}
                >
                  <img src={loginicon} alt="User Icon" />
                  <figcaption>{user.firstName}</figcaption>
                  <img src={dropdown} alt="Dropdown-icon" />
                </div>

                {showDropdownArrow && (
                  <div className="absolute right-0 mt-2 overflow-x-hidden bg-white border border-gray-200 rounded shadow-md z-50 w-[150px]">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 text-red-500 py-2 text-sm hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="md:flex lg:gap-[34px] gap-[20px] hidden overflow-x-hidden">
                <Link to="/signup">
                  <div className="border-white border-[2px] rounded-[8px] px-6 py-3 hover:bg-[#3D9970] hover:text-white text-center text-sm font-[400]">
                    Sign In
                  </div>
                </Link>
                <Link to="/login">
                  <div className="border-white border-[2px] rounded-[8px] px-6 py-3 bg-[#3D9970] text-white hover:opacity-90 text-center text-sm font-[400]">
                    Login
                  </div>
                </Link>
              </div>
            )}
          </section>

          <button
     className="md:hidden text-white"
     onClick={() => setIsOpen(!isOpen)}
    >
      <img
        src={isOpen ? closemenu : hamburger}
        alt="Menu Toggle"
     className="w-6 h-6 overflow-x-hidden"/>
</button>

          
        </nav>

        
        {isOpen && (
          <div className="md:hidden px-4 pb-4 text-[#C7C7C7] font-exo text-[16px] overflow-x-hidden">
            <ul className="flex flex-col gap-4 items-center">
              <Link to="/"><li onClick={() => setIsOpen(false)}>Home</li></Link>
              <Link to="/properties"><li onClick={() => setIsOpen(false)}>Properties</li></Link>
              <Link to="/aboutUs"><li onClick={() => setIsOpen(false)}>About Us</li></Link>
              <Link to="/blog"><li onClick={() => setIsOpen(false)}>Blog</li></Link>
              <Link to="/contact"><li onClick={() => setIsOpen(false)}>Contact</li></Link>

              {user ? (
                <li
                  onClick={handleLogout}
                  className="text-cyan-300 hover:text-purple-300 cursor-pointer"
                >
                  Logout
                </li>
              ) : (
                <>
                  <Link to="/signup"><li onClick={() => setIsOpen(false)}>Sign In</li></Link>
                  <Link to="/login"><li onClick={() => setIsOpen(false)}>Login</li></Link>
                </>
              )}
            </ul>
          </div>
        )}

        
        <section><HeroPage /></section>
      </main>
    </>
  );
};

export default Header;