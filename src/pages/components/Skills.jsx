import React, { useRef, useState } from "react";
import Cat from "./r3f/Cat";
import Image from "next/image";
import Blender from "../../../public/blender-2.svg";
import Tailwind from "../../../public/tailwind-css-2.svg";
import Firebase from "../../../public/firebase-1.svg";
import CSS from "../../../public/css-3.svg";
import Skill from "./subcomponents/Skill";
import HTML from "../../../public/html-1.svg";
import Javascript from "../../../public/javascript-1.svg";
import Next from "../../../public/next-js.svg";
import ReactImg from "../../../public/react-2.svg";
import Sanity from "../../../public/sanity.svg";
import ThreeJS from "../../../public/threejs-1.svg";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col-reverse lg:flex-row px-12 py-24">
      <div className="w-full lg:w-1/2">
        <Cat show={show} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <div className="overflow-hidden">
          <motion.h1
            whileInView={() => setShow(true)}
            className="absolute opacity-0 pointer-events-none"
          >
            Hello
          </motion.h1>
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: show ? 0 : 100 }}
            transition={{ delay: 0.5 }}
            className="text-4xl lg:text-6xl font-[900] mb-8 transition-all duration-300"
          >
            My Skills
          </motion.h1>
        </div>
        <div className="flex flex-wrap max-w-xl justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: show ? 1 : 0 }}
            transition={{ delay: 1.5 }}
          >
            <Skill src={HTML} name="HTML" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: show ? 1 : 0 }}
            transition={{ delay: 1.6 }}
          >
            <Skill src={CSS} name="CSS" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: show ? 1 : 0 }}
            transition={{ delay: 1.7 }}
          >
            <Skill src={Javascript} name="Javascript" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: show ? 1 : 0 }}
            transition={{ delay: 1.8 }}
          >
            <Skill src={ReactImg} name="React" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: show ? 1 : 0 }}
            transition={{ delay: 1.9 }}
          >
            <Skill src={Tailwind} name="Tailwind CSS" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: show ? 1 : 0 }}
            transition={{ delay: 2.0 }}
          >
            <Skill src={Next} name="Next" />
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: show ? 1 : 0 }}
            transition={{ delay: 2.1 }}
          >
            <Skill src={ThreeJS} name="Three" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: show ? 1 : 0 }}
            transition={{ delay: 2.2 }}
          >
            <Skill src={Blender} name="Blender" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: show ? 1 : 0 }}
            transition={{ delay: 2.3 }}
          >
            <Skill src={Sanity} name="Sanity" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: show ? 1 : 0 }}
            transition={{ delay: 2.4 }}
          >
            <Skill src={Firebase} name="Firebase" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
