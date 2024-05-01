import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import logo from "../assets/Logo_vector.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 px-4">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] w-60 text-gray-800">
          <img src={logo} alt="logo_img" height={30} width={30} />
          LOOKSCOUT
        </div>

        {/* Menu Button (only visible on mobile) */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </div>

        {/* Navigation Links and Buttons */}
        <div
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static justify-between gap-4 bg-white md:z-auto z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in ${
            menuOpen ? "top-20" : "top-[-490px]"
          }`}
        >
          <div
            className={`flex ${
              menuOpen ? "flex-col" : "" // Apply flex-col when menuOpen is true
            } justify-between gap-4 md:ml-4 font-bold text-lg md:text-sm my-2 md:my-0`}
          >
            <a
              href="#"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Our Products
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Contacts
            </a>
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
