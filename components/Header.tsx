import Link from "next/link";
import React from "react";
import { Navbar } from ".";

const Header = () => {
    return (
        <header className="flex justify-between py-4 px-7 items-center fixed w-full z-[999] bg-dark text-white shadow-xl">
            <Link href="/" className="lowercase tracking-widest font-medium">
                Lourandes
            </Link>
            <Navbar />
        </header>
    );
};

export default Header;
