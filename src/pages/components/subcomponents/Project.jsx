import Image from "next/image";
import React from "react";
import CSS from "../../../../public/css-3.svg";
import { Circle, GitHub, Visibility } from "@mui/icons-material";
import { Chip } from "@mui/material";
import Link from "next/link";

const Project = ({ src, title, description, skills, git, site }) => {
  return (
    <div className="w-full h-full flex justify-center items-center hover:scale-[1.1] transition-all duration-300">
      <div className="border rounded-lg overflow-hidden">
        <Image
          alt="Project"
          src={src}
          className="aspect-auto pointer-events-none object-contain w-full h-1/2"
        />
        <div className="p-4">
          <h1 className="text-lg lg:text-2xl font-[700]">{title}</h1>
          <p className="lg:mt-2 text-xs lg:text-base">{description}</p>
          <div className="flex mt-2 gap-2 justify-start items-start">
            <Link href={git} target="_blank">
              <GitHub className="text-blue-400 hover:scale-[1.15] hover:text-blue-600 transition-all duration-300" />
            </Link>
            <Link href={site} target="_blank">
              <Visibility className="text-blue-400 hover:scale-[1.15] hover:text-blue-600 transition-all duration-300" />
            </Link>
          </div>
          <div className="mt-4 flex gap-2 flex-wrap">
            {skills.map((item, index) => (
              <Chip
                key={index}
                variant="outlined"
                className={`${
                  item === "React" ? `border-blue-500 text-blue-500` : null
                }
                ${
                  item === "Next"
                    ? `border-black text-black bg-neutral-50`
                    : null
                }
                ${
                  item === "Three"
                    ? `border-neutral-600 text-neutral-600`
                    : null
                }
                ${
                  item === "Tailwind CSS"
                    ? `border-cyan-500 text-cyan-500`
                    : null
                }
                ${
                  item === "Three"
                    ? `border-neutral-800 text-neutral-800`
                    : null
                }`}
                label={`${item}`}
              ></Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
