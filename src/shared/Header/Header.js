import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const activeStyle = {
        color: "white",
        padding: "8px",
        backgroundColor: "rgb(185 28 28)",
        borderRadius: "6px",
    };

    return (
        <div className="sticky top-0 w-full z-20">
            <nav className="bg-white px-4 md:px-8 lg:px-16 flex justify-between items-center h-[85px] z-20">
                <div className="text-3xl font-logo font-semibold z-20">
                    <span className="text-red-700">Too</span>lex
                </div>
                <div
                    className={`${
                        toggle
                            ? "fixed w-full h-auto py-5 top-[80px] right-0"
                            : "fixed w-full h-auto py-5 top-[-400px] right-0"
                    } lg:block transition-all ease-in-out duration-1000 lg:w-auto lg:static bg-white`}
                >
                    <ul className="lg:flex lg:w-fit md:w-7/12 sm:w-8/12 mx-auto px-8 lg:px-0">
                        <li className="mr-4 text-lg font-semibold hover:text-red-700 p-2 text-center">
                            <NavLink
                                to="/about"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                About
                            </NavLink>
                            <div className="h-[1px] w-full bg-red-700 lg:hidden mt-2"></div>
                        </li>
                        <li className="mr-4 text-lg font-semibold hover:text-red-700 p-2 text-center">
                            <NavLink
                                to="/blog"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                Blog
                            </NavLink>
                            <div className="h-[1px] w-full bg-red-700 lg:hidden mt-2"></div>
                        </li>
                        <li className="mr-4 text-lg font-semibold hover:text-red-700 p-2 text-center">
                            <NavLink
                                to="/login"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                My Account
                            </NavLink>
                            <div className="h-[1px] w-full bg-red-700 lg:hidden mt-2"></div>
                        </li>
                    </ul>
                </div>
                <div className="lg:hidden">
                    <button onClick={() => setToggle(!toggle)}>
                        {toggle ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
