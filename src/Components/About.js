import { motion } from "framer-motion";
import { c1 } from "../Images";
import Carousel from "./Carousel";
import "../App.css";

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        initial={{ y: 100 }}
        transition={{ type: "spring", bounce: 0.4, duration: 3 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="about-title">A love letter, a tribute...</div>
        <div className="about-content">
          <p className="about-text">
            <p className="about-header">
              4441 unique ArbiMaxi will be released on Arbitrum.
            </p>
            <p className="about-story">
              We believe that arbitrum has the brightest ethereum scaling
              solution and have been using it since the beginning. So we
              launched ArbiMaxi with the motto "Together Stronger".
            </p>
          </p>
          <img src={c1}></img>
        </div>
      </motion.div>
      <Carousel />
    </div>
  );
};

export default About;
