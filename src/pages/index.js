import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "./components/Hero";
import { Switch } from "@mui/material";
import Skills from "./components/Skills";
import { motion, useScroll } from "framer-motion";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["900", "800", "700", "600", "500", "400", "300", "200", "100"],
});

export default function Home() {
  const [checked, setChecked] = useState(false);
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="My website development portfolio. Feel free to send me an email in the contact section if you are interested in working with me!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/zephyr_is_washed_beautiful_clean_landing_page_hero_section_ui_u_9f80b7e4-c7f0-46b0-a37f-ce134de64858 3.png"
        />
      </Head>
      <main
        className={`${poppins.className} ${
          checked
            ? `text-neutral-50 bg-neutral-950`
            : `text-neutral-950 bg-neutral-50`
        } transition-all duration-300`}
      >
        <Hero />
        <Skills />
        <Projects />
        <Contact />

        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.7 }}
          className="fixed top-4 left-4 flex items-center"
        >
          <Switch checked={checked} onChange={() => setChecked(!checked)} />
          <p>Dark Mode</p>
        </motion.div>
        {/* <motion.div
          className="fixed bottom-4 right-4"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <InfoIcon className="text-4xl cursor-pointer hover:scale-[1.15] duration-300 transition-all" />
        </motion.div> */}
      </main>
    </>
  );
}
