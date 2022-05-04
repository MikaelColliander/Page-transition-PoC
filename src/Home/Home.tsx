import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CTA from "../CTA/CTA";
import AppBar from "../AppBar";

const Home = () => {

const root = {
    exit: {
        opacity: 1,
    }
}

  return (
    <motion.div
        variants={root}
        exit="exit"
    >
      <AppBar />
      <Link to="/sok-resa" /*onClick={(e) => onButtonClick(e, "/about")}*/>
        <CTA text="Sök resa" />
      </Link>
    </motion.div>
  );
};

export default Home;