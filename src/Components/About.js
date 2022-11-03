import { motion } from "framer-motion";
import Scroll from "react-scroll";

import { c1 } from "../Images";
import Carousel from "./Carousel";
import "../App.css";

const About = () => {
  const Element = Scroll.Element;
  return (
    <Element name="about" className="about-container">
      <motion.div
        initial={{ y: 100 }}
        transition={{ type: "spring", bounce: 0.4, duration: 3 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="about-content">
          <div className="about-text">
            <p className="about-title">A love letter, a tribute...</p>
            <p className="about-header">
              4441 unique ArbiMaxi will be released on Arbitrum.
            </p>
            <p className="about-story">
              We believe that <span>Arbitrum</span> is the brightest Ethereum
              scaling solution. We thought about what we could do for
              <span> Arbitrum </span>
              and decided to support new projects with the funds we will raise.
              So we launched <span>Arbi</span>Maxi with the motto "Together
              Stronger".
            </p>
          </div>
          <img loading="lazy" src={c1}></img>
        </div>
      </motion.div>
      <Carousel />
    </Element>
  );
};

export default About;
