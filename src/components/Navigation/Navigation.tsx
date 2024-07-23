"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nunito } from "next/font/google";
import { Link as ScrollLink } from "react-scroll";
import path from "path";

const MENU_ITEMS = [
  { label: "Home", url: "/" },
  { label: "Contact me", url: "/contact-me" },
  { label: "About me", url: "/#about-me", isInternal: true },
];

const nunito = Nunito({ weight: "400", subsets: ["latin"] });

interface Props {
  onNavigate?: Function;
}

export const Navigation = ({ onNavigate }: Props) => {
  const MenuItem = ({
    label,
    url,
    internal,
  }: {
    label: string;
    url: string;
    internal: boolean;
  }) => {
    const pathname = usePathname();

    if (internal && pathname === "/")
      return (
        <ScrollLink
          to={"about-me"}
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          className={`
                text-white 
                  inline-block
                  font-kodchasan
                  text-base
                  relative 
                  hover:bg-gradient-primary
                  [&.active]:bg-gradient-primary
                  hover:bg-clip-text
                  [&.active]:bg-clip-text
                  hover:text-transparent
                  [&.active]:text-transparent
                  hover:drop-shadow-glow
                  [&.active]:drop-shadow-glow
                  cursor-default
                  transition-all
                  ease-in-out
                  duration-300 
                  hover:after:absolute
                  [&.active]:after:absolute
                  hover:after:translate-y-3
                  [&.active]:after:translate-y-3
                  ${nunito.className}
                  `}
        >
          <li
            onClick={() => {
              onNavigate && onNavigate();
            }}
          >
            {label}
          </li>
        </ScrollLink>
      );

    return (
      <Link href={url}>
        <li
          className={`
                text-white 
                  inline-block
                  font-kodchasan
                  text-base
                  relative 
                  hover:bg-gradient-primary
                  [&.active]:bg-gradient-primary
                  hover:bg-clip-text
                  [&.active]:bg-clip-text
                  hover:text-transparent
                  [&.active]:text-transparent
                  hover:drop-shadow-glow
                  [&.active]:drop-shadow-glow
                  cursor-default
                  transition-all
                  ease-in-out
                  duration-300 
                  hover:after:absolute
                  [&.active]:after:absolute
                  hover:after:translate-y-3
                  [&.active]:after:translate-y-3
                  ${pathname === url ? "active" : ""}
                  ${nunito.className}
                  `}
          onClick={() => {
            onNavigate && onNavigate();
          }}
        >
          {label}
        </li>
      </Link>
    );
  };
  return (
    <ul className="flex flex-col md:flex-row px-4 gap-y-8 gap-x-12 w-fit">
      {MENU_ITEMS.map(({ isInternal, label, url }) => {
        return (
          <MenuItem
            key={label}
            label={label}
            url={url}
            internal={Boolean(isInternal)}
          />
        );
      })}
    </ul>
  );
};
