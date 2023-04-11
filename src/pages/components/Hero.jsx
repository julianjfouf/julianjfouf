import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Center,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Room from "./r3f/Room";
import Buttons from "./subcomponents/Buttons";
import Link from "next/link";
import Image from "next/image";
import { Switch } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Hero = () => {
  const [checked, setChecked] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    addEventListener("mousemove", (e) => {
      setX(e.clientX / 30);
      setY(e.clientY / 30);
    });
  }, []);
  return (
    <div className={`flex flex-col min-h-screen lg:flex-row relative px-12 py-24`}>
      <div className="flex w-full lg:w-1/2 justify-center flex-col items-center relative">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-6xl lg:text-8xl font-[900] text-center"
          >
            Hi! I'm Julian.
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.0 }}
            className="font-[500] text-[14px] lg:text-[18px] text-center"
          >
            I am a student who loves to make websites in his free time.
          </motion.p>
        </div>
        <div className="flex gap-2 my-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Link target="_blank" href="https://github.com/julianjfouf">
              <GitHub className="text-blue-400 text-4xl hover:scale-[1.15] hover:text-blue-600 duration-300 transition-all" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.6 }}
          >
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/julian-jfouf-782602250/"
            >
              <LinkedIn className="text-blue-400 text-4xl hover:scale-[1.15] hover:text-blue-600 duration-300 transition-all" />
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Room />
      </div>
    </div>
  );
};

export default Hero;
