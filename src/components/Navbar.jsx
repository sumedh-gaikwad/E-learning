import React, { useState } from "react";
import { MdComputer } from "react-icons/md";
import { NavbarMenu } from "../mockData/data";
import { IoMdMenu } from "react-icons/io";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6 ml-6">
          {/*logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-blue-600" />
            <p>E-tution</p>
          </div>

          {/*menu section */}
          <div className="hidden lg:block ">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((items) => {
                return (
                  <li key={items.id} className="flex justify-center ite">
                    <a
                      href={items.link}
                      className="inline-block text-gray-500 text-md font-medium  xl-text-base py-1 px-2 mx-6 
                            hover: text-secondary transition-all duration-300 hover:font-bold hover:text-blue-700"
                    >
                      {items.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/*SR button section */}
          <div className=" hidden lg:flex space-x-4 mr-10 justify-between">
            <button className="font-bold hover:transition-all duration-300 hover:font-extrabold hover:to-blue-700">
              Sign in
            </button>
            <button
              className="font-bold bg-blue-600 rounded-full px-4 py-2
                hover:transition-all duration-300 hover:font-extrabold hover:text-white"
            >
              Register
            </button>
          </div>
          {/*mobile hamburger section */}

          <div className="lg:hidden md:block sm:block mr-8">
            <IoMdMenu
              className="text-4xl"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>

          {/*mobile sildebar section  */}
        </div>
        <ResponsiveMenu isOpen={isOpen} />
      </motion.div>
    </section>
  );
};

export default Navbar;
