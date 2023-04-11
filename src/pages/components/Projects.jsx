import React, { useState } from "react";
import { motion } from "framer-motion";
import Project from "./subcomponents/Project";
import Project2 from "../../../public/Project 1 Image.jpg";
import Project1 from "../../../public/Project 4 Image.jpg";
import Project3 from "../../../public/Project 2 Image.jpg";

const Projects = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="px-12 py-24">
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: show ? 0 : 100 }}
          transition={{ delay: 0.5 }}
          className="text-4xl lg:text-6xl font-[900] mb-8 text-center"
        >
          My Projects
        </motion.h1>
      </div>
      <motion.div
        whileInView={() => setShow(true)}
        className="absolute opacity-0 pointer-events-none"
      >
        Hello
      </motion.div>
      <div className="flex h-full flex-wrap">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: show ? 1 : 0 }}
          transition={{ delay: 1.0 }}
          className="h-full w-full lg:w-1/3 p-4"
        >
          <Project
            src={Project1}
            title="Marble Run"
            description="A game similar to Temple Run or Subway Surfer where a level is randomly generated from a preset of possible traps and the player tries to get to the end in the least amount of time."
            skills={["React", "Three"]}
            git="https://github.com/julianjfouf/marblerun"
            site="https://marblerun.vercel.app/"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: show ? 1 : 0 }}
          transition={{ delay: 1.2 }}
          className="h-full w-full lg:w-1/3 p-4"
        >
          <Project
            src={Project2}
            title="Dano's Detailing"
            description="A website made for a local car detailing business with the objective of displaying information regarding services and prices for the convenience of customers."
            skills={["Next", "Tailwind CSS"]}
            git="https://github.com/julianjfouf/FernandoCar"
            site="https://www.danosdetailing.com/"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: show ? 1 : 0 }}
          transition={{ delay: 1.4 }}
          className="h-full w-full lg:w-1/3 p-4"
        >
          <Project
            src={Project3}
            title="Malik's Advertising Agency"
            description="A website for a friend that wanted to start his own advertising agency for small local businesses in order to get some real world experience and to learn business management."
            skills={["React", "Tailwind CSS"]}
            git="https://vercel.com/julianjfouf/ad-agency"
            site="https://ad-agency-rho.vercel.app/"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
