import React from "react";
import logo from "../assets/logo_gentle_bite.png";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { slideSide } from "../animations";

const Start = () => {
  return (
    <div>
      <div className="bg-yellowy ">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex items-center justify-center h-96">
            <motion.div
              variants={slideSide("left", 0.5)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              style={{ willChange: "transform, opacity" }} // Optimización con will-change
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity }}
              >
                <img src={logo} alt="Logo" className=" h-60 object-contain" />
              </motion.div>
            </motion.div>
          </div>

          <div className="justify-center  h-96 relative">
            <motion.div
              variants={slideSide("right", 1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              style={{ willChange: "transform, opacity" }} // Optimización con will-change
            >
              <h1 className="text-center pt-12 text-4xl ">
                Mini Donas en medellin
              </h1>
            </motion.div>
            <motion.div
              variants={slideSide("right", 1.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              style={{ willChange: "transform, opacity" }} // Optimización con will-change
            >
              <h2 className="text-center pt-5 text-xl">
                ¡Para los amantes de lo dulce y delicioso!
              </h2>
            </motion.div>

            <div className="flex justify-center pt-5 z-50 relative">
              <motion.div
                variants={slideSide("right", 1.6)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                style={{ willChange: "transform, opacity" }} // Optimización con will-change
              >
                <button>
                  <a
                    href="https://wa.me/+573245110672"
                    className="bg-pink-500 text-white p-2 rounded-lg "
                    target="blank"
                  >
                    Pide tus donas ahora
                  </a>
                </button>
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
              <motion.div
                variants={slideSide("right", 1.9)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                style={{ willChange: "transform, opacity" }} // Optimización con will-change
              >
                <DotLottieReact
                  src="https://lottie.host/69f26991-36ee-42d1-b981-39340cee74d9/M9ChQTYYbj.lottie"
                  loop
                  autoplay
                  className=" h-60  "
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
