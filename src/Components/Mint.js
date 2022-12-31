import { useWeb3Contract } from "react-moralis";
import { useMoralis } from "react-moralis";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

//import { abi, contractAddresses } from "../Constants";
import config from "../Constants/config.json";
import "../App.css";
import Clipper from "./Clipper";
import Notification from "./Notification";

const Mint = () => {
  const {
    contractAddress,
    abi,
    mintFeeGetterFunctionName,
    currentlyMintedGetterFunctionName,
    mintFunctionName,
    chainId,
  } = config;

  const [notification, setNotification] = useState();
  const [notificationId, setNotificationId] = useState(0);

  const [mintFee, setMintFee] = useState();
  const [mintedAmount, setMintedAmount] = useState(0);
  const { chainId: chainIdHex, isWeb3Enabled, account } = useMoralis();
  const userChainId = parseInt(chainIdHex);

  useEffect(() => {
    const getFee = async () => {
      const mintFeeValue = await getMintFee();
      const mintedAmount = await getCurrentlyMinted();
      setMintFee(mintFeeValue);
      setMintedAmount(mintedAmount);
    };

    getFee();
  }, [isWeb3Enabled]);

  //CONTRACT FUNCTION CALLS

  //MINT NFT
  const {
    runContractFunction: mintNFT,
    data: enterTxResponse,
    isLoading,
    isFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: mintFunctionName,
    msgValue: mintFee,
    params: {},
  });
  //GET MINT FEE
  const { runContractFunction: getMintFee } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    params: {},
    functionName: mintFeeGetterFunctionName,
  });

  //GET CURRENTLY MINTED NFT AMOUNT
  const { runContractFunction: getCurrentlyMinted } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    params: {},
    functionName: currentlyMintedGetterFunctionName,
  });

  //NOTIFICATONS

  const handleSuccess = async (tx) => {
    try {
      await tx.wait(1);
      handleNotification(tx);
      console.log(tx);
    } catch (error) {
      console.log(error);
      handleNotification(error);
    }
  };

  const handleNotification = (type) => {
    setNotification(<Notification id={notificationId} type={type} />);
    console.log(notificationId);
    setNotificationId(notificationId + 1);
  };

  return (
    <div className="mint-bg">
      {notification}
      <div className="mint-container">
        <div className="mint-content">
          <h1 className="mint-max">MAX</h1>
          <h1 className="mint-maxi">MAXI</h1>
          <h1 className="mint-arbimaxi">ARBIMAXI</h1>

          {contractAddress ? (
            <>
              <div className="mint-title">
                {mintedAmount !== 4126
                  ? chainId !== 5
                    ? "Please Switch to Arbitrum One."
                    : ` ${mintedAmount} /4216 ArbiMaxis Minted !`
                  : "Sold Out !"}
              </div>
              {isLoading || isFetching || userChainId !== chainId ? (
                <>
                  <button className="regular-button mint-button">
                    <motion.i
                      animate={{ rotate: [0, 385, -385] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="fa-solid fa-rotate"
                    ></motion.i>
                  </button>
                </>
              ) : (
                <motion.button
                  initial={{ y: 0, x: 0 }}
                  whileHover={{ y: -10, x: -10 }}
                  transition={{ duration: 0.1 }}
                  onClick={async () => {
                    await mintNFT({
                      onSuccess: handleSuccess,
                      onError: (e) => handleNotification(e),
                    });
                  }}
                  className="regular-button mint-button"
                >
                  Mint!
                </motion.button>
              )}
            </>
          ) : (
            <div>No CONTRACT address detected</div>
          )}
        </div>
      </div>
      {window.screen.availWidth < 820 ? null : <Clipper />}
    </div>
  );
};

export default Mint;
