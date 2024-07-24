import React from "react";
import { Heading } from "@/components/Heading";
import Image from "next/image";
import { Nunito } from "next/font/google";
import clsx from "clsx";

const nunito = Nunito({ weight: "400", subsets: ["latin"] });

const TECH_ICONS = [
  {
    src: "/images/tech/React.png",
    name: "React",
    alt: "react logo",
  },
  {
    src: "/images/tech/Node.png",
    name: "Node",
    alt: "node logo",
  },
  {
    src: "/Images/tech/Git.png",
    name: "Git",
    alt: "git logo",
  },
  {
    src: "/Images/tech/Next.png",
    name: "Next",
    alt: "next logo",
  },
  {
    src: "/Images/tech/Typescript.png",
    name: "Typescript",
    alt: "typescript logo",
  },
  {
    src: "/Images/tech/Tailwind.png",
    name: "Tailwind",
    alt: "tailwind logo",
  },
];

export const Technologies = () => {
  const TechComponent = ({
    src,
    alt,
    name,
  }: {
    src: string;
    alt: string;
    name: string;
  }) => {
    return (
      <div className="flex flex-col gap-y-2 items-center justify-center">
        <div className="flex flex-col gap-y-2 items-center">
          <Image
            alt={alt}
            src={src}
            height={120}
            width={120}
            key={src}
            className="drop-shadow-glow"
            placeholder="blur"
            blurDataURL={src}
          />
          <div className={clsx("text-gray-100", nunito.className)}>{name}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-y-2 items-center justify-center w-full min-h-[calc(100vh-140px)]">
      <Heading level={2}>Technologies</Heading>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 align-middle my-8 ">
        {TECH_ICONS.map(({ src, name, alt }) => (
          <TechComponent src={src} name={name} alt={alt} key={src} />
        ))}
      </div>
    </div>
  );
};
