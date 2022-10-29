import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { motion } from "framer-motion";

import "../App.css";

const Connect = () => {
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
    <>
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
    </>
  );
};

export default Connect;
