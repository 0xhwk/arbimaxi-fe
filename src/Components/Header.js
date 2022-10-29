import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Scroll from "react-scroll";

import "../App.css";
import { logo } from "../Images";
import Connect from "./Connect";

const Header = () => {
  const scroll = Scroll.animateScroll;
  const scroller = Scroll.scroller;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollTop, setScrollTop] = useState(false);
  const scrollTo = (height) => {
    return scroll.scrollTo(height);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const mobileScroll = () => {
    if (scrollPosition < 601)
      return scroller.scrollTo("about", { smooth: true });
    if (601 < scrollPosition && scrollPosition < 1719)
      return scroller.scrollTo("roadmap", { smooth: true });
    if (1719 < scrollPosition && scrollPosition < 2325) {
      setScrollTop(true);
      return scroller.scrollTo("team", { smooth: true });
    }
    if (scrollTop) return scroll.scrollToTop({ smooth: true });
  };

  return (
    <>
      {window.screen.availWidth < 820 ? (
        scrollPosition > 2100 ? (
          <button
            onClick={() => mobileScroll()}
            className="fa-solid fa-circle-arrow-up"
          ></button>
        ) : (
          <button
            onClick={() => mobileScroll()}
            className="fa-solid fa-circle-arrow-down"
          ></button>
        )
      ) : null}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className="header"
      >
        <img
          onClick={() => scrollTo(0)}
          className="logo"
          src={logo}
          alt="logo"
        ></img>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          <ul className="nav-links">
            {window.screen.availWidth < 800 ? null : (
              <div className="nav-links-left">
                <button
                  onClick={() => scroller.scrollTo("about", { smooth: true })}
                  className="header-button"
                >
                  About
                </button>

                <button
                  onClick={() => scroller.scrollTo("roadmap", { smooth: true })}
                  className="header-button"
                >
                  Roadmap
                </button>

                <button
                  onClick={() => scroller.scrollTo("team", { smooth: true })}
                  className="header-button"
                >
                  Team
                </button>
              </div>
            )}
            <div className="nav-links-right">
              <a
                href="https://twitter.com/0xNugen"
                className="fa-brands fa-twitter nav-socials-logo "
              ></a>
              <a
                href="https://discord.gg/aasTeCBM"
                className="fa-brands fa-discord nav-socials-logo "
              ></a>
              <Connect />
            </div>
          </ul>
        </motion.nav>
      </motion.header>
    </>
  );
};

export default Header;
