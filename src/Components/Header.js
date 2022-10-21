import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import Scroll from "react-scroll";
import { motion } from "framer-motion";
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
    <header className={`header`}>
      <img
        onClick={() => scrollTo(0)}
        className="logo"
        src={logo}
        alt="logo"
      ></img>
      <nav>
        <ul className="nav-links">
          <button onClick={() => scrollTo(753)} className="header-button">
            About
          </button>

          <button onClick={() => scrollTo(1517)} className="header-button">
            Roadmap
          </button>

          <button onClick={() => scrollTo(2775)} className="header-button">
            Collection
          </button>
        </ul>
      </nav>
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
    </header>
  );
};

export default Header;
