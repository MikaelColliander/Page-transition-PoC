import React from "react";
import { motion } from "framer-motion";
import { makeStyles, colors } from "@sjse/component-library";

const Dialog = (props: any) => {
  const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: colors.SJWhite,
      width: "100vw",
      height: "100vh",
      top: 0,
      position: "absolute",
      zIndex: 1000,
    },
    backDrop: {
      backgroundColor: colors.SJBlack,
      position: "absolute",
      width: "100vw",
      height: "100vh",
      top: 0,
      zIndex: 1000,
    },
  }));

  const modal = {
    hidden: {
      y: "100%",
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
      },
    },
    visible: {
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

  const backDrop = {
    hidden: {
      opacity: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
      },
    },
    visible: {
      opacity: 0.5,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

  const classes = useStyles();

  return (
    <>
      <motion.div
        className={classes.backDrop}
        variants={backDrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
      />
      <motion.div
        className={classes.root}
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {props.children}
      </motion.div>
    </>
  );
};

export default Dialog;
