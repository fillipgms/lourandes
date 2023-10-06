"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const menuStyle = "w-6 h-0.5 bg-light block transition-all";

    return (
        <div>
            <button
                aria-label="abrir menu"
                className="md:hidden flex flex-col gap-1.5"
                onClick={() => setNav(!nav)}
            >
                <span
                    className={menuStyle}
                    style={
                        nav
                            ? {
                                  transform:
                                      "rotate(-45deg) translate(-1px, 2px)",
                              }
                            : {}
                    }
                ></span>
                <span
                    className={menuStyle}
                    style={nav ? { display: "none" } : {}}
                ></span>
                <span
                    className={menuStyle}
                    style={
                        nav
                            ? {
                                  transform:
                                      "rotate(45deg) translate(-3px, -5px)",
                              }
                            : {}
                    }
                ></span>
            </button>
            <ul
                className="flex gap-4 md:flex-row flex-col absolute md:static right-0 top-14 w-screen h-screen md:w-fit md:h-fit items-center translate-x-full md:translate-x-0 transition-all z-[999] md:bg-none bg-dark bg-opacity-50 md:p-0 pt-5"
                style={nav ? { transform: "translateX(0)" } : {}}
            >
                <li>
                    <Link href="/">projetos</Link>
                </li>
                <li>
                    <Link href="/">demos</Link>
                </li>
                <li>
                    <Link href="/">agenda</Link>
                </li>
                <li>
                    <Link href="/">contato</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
