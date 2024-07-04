"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nunito } from "next/font/google";

const MENU_ITEMS = [
  { label: "Home", url: "/" },
  { label: "Contact me", url: "/contact-me" },
];

const nunito = Nunito({ weight: "400", subsets: ["latin"] });

interface Props {
  onNavigate?: Function;
}

export const Navigation = ({ onNavigate }: Props) => {
  const MenuItem = ({ label, url }: { label: string; url: string }) => {
    const pathname = usePathname();

    return (
      <Link href={url} passHref>
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
      {MENU_ITEMS.map((item) => {
        return <MenuItem key={item.label} label={item.label} url={item.url} />;
      })}
    </ul>
  );
};
