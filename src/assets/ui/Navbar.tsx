import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="flex mt-8 container-wrapper">
        <div className=" logo">
          <img src="public/images/Codeboustinelogo.png" alt="logo" />
        </div>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <a href="#">About Us</a>
          <li>
            <a href="#home">Services</a>
          </li>
          <li>
            <a href="#services">Portfolio</a>
          </li>
          <li>
            <a href="#about">Blog</a>
          </li>
          <li>
            <a href="#contact" onClick={handleClick}>
              Contact
            </a>
          </li>
          <button className="relative flex items-center gap-2 text-black transition duration-300 ease group-hover:text-black button-property">
            Contact us
          </button>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {isOpen && (
        <div className="z-50 flex items-center justify-center bg-gray-900 container-wrapper moudal-image">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="z-50 w-[1000px] p-4 bg-white rounded-lg shadow-lg h-[700px]">
            <h1 className="flex  items-center justify-center w-[700px] text-5xl ">
              Let’s Talk On Something
              <span className=" text-amber-400">Great</span> Together
            </h1>
            <div className="flex items-center justify-start">
              <h4>info@codebaustein.com</h4>

              <h4>Universität strasse 114, B02-09, 44799 Bochum Germany</h4>

              <h4>+49 1577 5568031 </h4>
            </div>

            <div className="flex items-center justify-end min-h-screen">
              <div className="p-8 bg-white rounded shadow-md w-96">
                <h2 className="mb-4 text-2xl font-bold">Login</h2>
                <form>
                  <div className="mb-4">
                    <label
                      className="block mb-2 font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
                      id="email"
                      type="email"
                      placeholder="Email"
                      readOnly
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block mb-2 font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none"
                      id="password"
                      type="password"
                      placeholder="Password"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="px-4 py-2 font-bold text-white bg-blue-500 rounded cursor-not-allowed hover:bg-blue-700"
                      type="submit"
                      disabled
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <button
              className="absolute text-2xl top-28 right-[300px]"
              onClick={onClose}
            >
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
