import Image from "next/image";
import React from "react";

const Skill = ({ src, name }) => {
  return (
    <div className="group flex flex-col justify-center items-center m-4">
      <Image alt="skill" className="h-24 lg:w-24 group-hover:scale-[1.15] transition-all duration-300 bg-neutral-50 rounded p-2" src={src} />
      <p className="opacity-0 mt-2 group-hover:opacity-100 text-center transition-all duration-300">
        {name}
      </p>
    </div>
  );
};

export default Skill;
