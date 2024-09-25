import React from "react";
import { Navbar, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import Link from "next/link";

export const PortfolioNavbar: React.FC = () => {
  return (
    <Navbar 
      maxWidth="full" 
      position="sticky" 
      className=" bg-eerie-black-2 text-white w-full backdrop-blur-[10px] border  rounded-t-xl shadow-md z-[5]"
    >
      <NavbarContent className="hidden sm:flex gap-12" justify="end">
        <NavbarItem>
          <Link color="foreground" href="/about" className="">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/resume">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/portfolio">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/blog">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};