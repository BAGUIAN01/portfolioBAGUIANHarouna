"use client"
import React, { useState, useEffect, useRef } from "react";
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const PortfolioNavbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
 
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      maxWidth="full"
      position="sticky"
      className="bg-eerie-black-2 text-white w-full backdrop-blur-[10px] border rounded-t-xl shadow-md z-[5]"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="end">
        {navItems.map((item) => (
          <NavbarItem key={item.href} isActive={isActive(item.href)}>
            <Link
              href={item.href}
              className={`
                ${isActive(item.href) ? "text-red-500 border-b-2 border-red-500" : "text-white"}
                hover:text-red-300 transition-colors pb-1
              `}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu
        ref={menuRef}
        className="bg-eerie-black-2 pt-6 sm:hidden"
        style={{
          height: `${navItems.length * 10}px`,
          maxHeight: '100vh',
          overflowY: 'auto'
        }}
      >
        {navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              href={item.href}
              className={`
                ${isActive(item.href) ? "text-red-500" : "text-white"}
                hover:text-red-300 transition-colors w-[80%] block py-2
              `}
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};