import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { CgShoppingBag } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { MdNotificationsNone, MdOutlineLogout } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="bg-[#000000] text-white py-4 px-6 md:px-8 lg:px-[80px] border-b border-white">
      <div className="flex justify-between items-center" data-aos="fade-up">
        <Link to="/">
          <img src={Logo} className="text-xl font-bold" />
        </Link>
        <div className="flex flex-row items-center gap-12">
          <div className="hidden md:inline-flex items-center space-x-6">
            <Link to="/Shop" className="hover:text-gray-400">
              ITEM
            </Link>

            <Link to="/Contactus" className="hover:text-gray-400">
              CONTENT
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/Notification" className="hover:text-gray-400">
              <MdNotificationsNone
                size={24}
                className="text-white font-extrabold cursor-pointer"
              />
            </Link>
            <div
              onClick={toggleModal}
              className="hover:text-gray-400 cursor-pointer"
            >
              <MdOutlineLogout size={20} />
            </div>

            <button className="md:hidden cursor-pointer" onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
