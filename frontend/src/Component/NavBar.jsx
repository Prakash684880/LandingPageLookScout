import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import logo from "../assets/Logo_vector.png";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const handleResize = () => {
 
    if (window.innerWidth >= 768) {
     
      setMenuOpen(false);
    }
  };
 
  useEffect(() => {
   
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  return (
    <div className="shadow-md w-full px-4">
      <div className="md:flex items-center bg-white py-4 md:px-8 px-7">
        <div className="font-bold text-2xl cursor-pointer font-[Poppins] w-60 p-2">
          <Link to={"/"} className="flex items-center text-black ">
            <img src={logo} alt="logo_img" height={30} width={30} />
            <h1 className="md:text-xl font-extrabold hover:text-gray-500">
              APEX Innovative
            </h1>
          </Link>
        </div>

        {/* Menu Button (only visible on mobile) */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl absolute right-8 top-6 bg-black cursor-pointer md:hidden"
        >
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </div>

        {/* Navigation Links and Buttons*/}
        <div
          className={`md:text-sm md:flex md:items-center md:pb-0  md:static justify-between gap-4 bg-white md:z-auto z-[-1] left-0 w-full md:gap-2 transition-all duration-500 ease-in ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div
            className={`flex ${
              menuOpen ? "flex-col" : "" // Apply flex-col when menuOpen is true
            } justify-between gap-4 md:gap-3 font-bold text-lg md:text-sm my-2 md:my-0`}
          >
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Our Products
            </Link>
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Services
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Contacts
            </Link>
          </div>

          {/* Buttons (Sign Up and Log In) */}
          <div className="gap-2 md:flex md:items-center md:ml-4 my-2 md:my-0">
            <div className="md:ml-4">
              <button className="text-blue-500 font-[Poppins] hover:font-semibold duration-500">
                Sign Up
              </button>
            </div>
            <div className="md:ml-4 mt-4 md:mt-0">
              <button className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded hover:bg-indigo-400 duration-500">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
