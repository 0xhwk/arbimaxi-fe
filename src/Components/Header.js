import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { motion } from "framer-motion";
import Scroll from "react-scroll";

import "../App.css";
import { logo } from "../Images";

const Header = () => {
  const scroll = Scroll.animateScroll;
  const scrollTo = (height) => {
    return scroll.scrollTo(height);
  };
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    isWeb3EnableLoading,
    deactivateWeb3,
    Moralis,
  } = useMoralis();

  useEffect(() => {
    if (isWeb3Enabled) return;
    if (window.localStorage.getItem("connected")) enableWeb3();
  }, [isWeb3Enabled]);

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      if (account == null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
      }
    });
  }, []);

  return (
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
          <div className="nav-links-left">
            <button onClick={() => scrollTo(753)} className="header-button">
              About
            </button>

            <button onClick={() => scrollTo(1517)} className="header-button">
              Roadmap
            </button>

            <button onClick={() => scrollTo(2775)} className="header-button">
              Collection
            </button>
          </div>
          <div className="nav-links-right">
            <a
              href="https://twitter.com/0xNugen"
              className="fa-brands fa-twitter nav-socials-logo "
            ></a>
            <a
              href="https://discord.gg/aasTeCBM"
              className="fa-brands fa-discord nav-socials-logo "
            ></a>

            {!account ? (
              isWeb3EnableLoading ? (
                <button className="connect-button">
                  <motion.i
                    animate={{ rotate: [0, 385, -385] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="fa-solid fa-rotate"
                  ></motion.i>
                </button>
              ) : (
                <button
                  className="connect-button"
                  onClick={async () => {
                    await enableWeb3();
                    window.localStorage.setItem("connected", "injected");
                  }}
                >
                  Connect Wallet
                </button>
              )
            ) : (
              <button className="connect-button">
                {account.slice(0, 6)}...{account.slice(account.length - 4)}
              </button>
            )}
          </div>
        </ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
