import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="text-black bg-white shadow-xl">
      <div className="max-w-screen-xl m-auto flex  px-6 py-2 justify-between items-center">
        <h2 className="font-medium text-3xl">
          <Link href="/">
            <a>
              Movie<span className="text-red-900"> Jam</span>
            </a>
          </Link>
        </h2>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
