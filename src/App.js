import { motion } from "framer-motion";

import "./App.css";
import { logo } from "./Images";

import Header from "./Components/Header";
import Mint from "./Components/Mint";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <div>
      <Header />
      <Mint />
      <div className="about-container">
        <div className="about-title">We are ArbiMaxi </div>

        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <motion.a
          href="https://discord.gg/aasTeCBM"
          target="_blank"
          animate={{ rotate: [0, 360, 0, 0, 0, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="fa-brands fa-discord about-logo"
        ></motion.a>
        <p>Join Nitro Club</p>
        <p className="about-story">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="roadmap-title">ROADMAP</div>
      <div className="roadmap-container">
        <motion.div
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
          className="roadmap-left"
        >
          <div className="roadmap-item">
            FIRST STEP
            <p className="roadmap-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="roadmap-item">
            PERKS
            <p className="roadmap-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="roadmap-item">
            UNIQUE PROOPS
            <p className="roadmap-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </motion.div>
        <div className="roadmap-divider"></div>
        <motion.div
          initial={{ x: 500 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 3 }}
          className="roadmap-right"
        >
          <div className="roadmap-item">
            UTILITY
            <p className="roadmap-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="roadmap-item">
            MINT INFO
            <p className="roadmap-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="roadmap-item">
            ON ARBITRUM
            <p className="roadmap-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="roadmap-item">
            MINI GAME
            <p className="roadmap-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </motion.div>
      </div>
      <Carousel />
      <div className="footer">
        <img className="footer-logo" src={logo} alt="logo"></img>
        <div className="footer-right-container">
          <p className="footer-text">Join the Maxis!</p>
          <div className="footer-socials">
            <i className="fa-brands fa-twitter footer-socials-logo"></i>
            <i className="fa-brands fa-discord footer-socials-logo"></i>
            <i className="fa-brands fa-instagram footer-socials-logo"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
