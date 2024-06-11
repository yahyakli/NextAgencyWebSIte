"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import MainAnimation from "../../public/Animation - 1717966847256.json";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="w-1/2 pt-20">
          <Lottie animationData={MainAnimation} className=""/>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center pt-20">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 pt-20">
            <Link href="/portfolio" className="p-4 rounded-lg ring-1 text-xl ring-black bg-black text-white hover:bg-white hover:text-black duration-300">
              View My Work
            </Link>
            <Link href="/contact" className="p-4 rounded-lg ring-1 text-xl ring-black hover:bg-white hover:text-black duration-300">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
