import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { slideUp } from "../animations";
import { slideDown } from "../animations";

const Separator = ({ text1, text2 }) => {
  return (
    <div className="bg-bluy flex justify-center items-center h-36">
      <motion.div
        variants={slideDown(1)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        style={{ willChange: "transform, opacity" }} // Optimización con will-change
      >
        <h2 className="text-3xl mx-5 ">{text1}</h2>
      </motion.div>
      <motion.div
        variants={slideUp(1.3)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        style={{ willChange: "transform, opacity" }} // Optimización con will-change
      >
        <DotLottieReact
          src="https://lottie.host/2b99be06-c34c-4179-bbb0-95b060d79642/irvOyDpaCK.lottie"
          loop
          autoplay
          className=" h-60 "
        />
      </motion.div>
      <motion.div
        variants={slideDown(1.6)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        style={{ willChange: "transform, opacity" }} // Optimización con will-change
      >
        <h2 className="text-3xl mx-5  ">{text2}</h2>
      </motion.div>
    </div>
  );
};

export default Separator;
