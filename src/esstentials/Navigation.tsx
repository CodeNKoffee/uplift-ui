import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

// Updated interfaces for props
interface NavLink {
  name: string;
  href: string;
  isSpecial?: boolean; 
  specialColor?: string; 
}

interface NavigationProps {
  navLinks: NavLink[];
  logo: {
    src: string;
    alt: string;
  };
  logoSize?: string,
  defaultColor: string; 
  hoverColor: string; 
}

// Updated component to accept new props
export default function Navigation({ navLinks, logo, logoSize, defaultColor, hoverColor }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isExternal = (url: string) => /^https?:\/\//.test(url);
  const isAnchorLink = (url: string) => /^#/.test(url);

  return (
    <nav>
      <div className="kontainer">
        <div className="w-full row flex justify-between items-center">
          <Link href="/" className="w-1/3 text-3xl font-bold" style={{ color: defaultColor }}>
            <figure>
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={150} 
                height={150}
                className={logoSize ? logoSize : ""}
              />
            </figure>
          </Link>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={isAnchorLink(link.href) ? `/${link.href}` : link.href}
                  className={`font-bold px-8 py-4 rounded-full transition ${link.isSpecial ? `bg-${link.specialColor} text-white hover:bg-${hoverColor}` : `text-white hover:text-${hoverColor}`}`}
                  target={isExternal(link.href) ? "_blank" : "_self"}
                  rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
          <div className="md:hidden w-1/3 relative flex justify-end items-end">
            <button onClick={handleToggle} style={{ color: hoverColor }}>
              <FaBars size={24} />
            </button>
            {isOpen && (
              <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
                <button onClick={closeMenu} style={{ color: hoverColor }}>
                  <FaTimes size={32} />
                </button>
                <div className="flex flex-col items-center">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`w-full text-center text-white font-bold px-8 py-4 rounded-full my-4 ${link.isSpecial ? `bg-${link.specialColor}` : ''}`}
                      target={isExternal(link.href) ? "_blank" : "_self"}
                      rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}