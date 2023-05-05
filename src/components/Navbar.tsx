'use client'
import { FC } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <>
      <div className="fixed w-full h-10 bg-white">
        Navbar
        <div className=''>
          <ThemeToggle/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
