import { motion } from 'framer-motion';
import React, { useState } from 'react';

const NavbarBanner = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="relative sm:hidden md:hidden lg:block bg-yellow-400 font-medium "
      >
        <div className="flex justify-center items-center px-3">
          <div className="flex gap-3">
            <p>
              Are you a university or school student for an online tutoring partnership?
            </p>
            <a href="#" className="text-blue-700 font-bold">
              Talk to us
            </a>
          </div>
          
          <div
            className="absolute right-10 cursor-pointer hover:font-bold"
            onClick={() => setIsOpen(false)}
          >
            X
          </div>
        </div>
      </motion.div>
    )
  );
}

export default NavbarBanner;
