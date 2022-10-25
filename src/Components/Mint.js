import { useWeb3Contract } from "react-moralis";
import { abi, contractAddresses } from "../Constants";
import { useMoralis } from "react-moralis";
import { motion } from "framer-motion";
import "../App.css";
import Clipper from "./Clipper";
const Mint = () => {
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const contractAddress = contractAddresses[42161];

  const { runContractFunction: ___mintFunc } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    params: {},
    functionName: "___mintFunc",
    msgValue: "___mintFee",
  });

  const handleEnter = async () => {
    await ___mintFunc();
  };
  return (
    <div className="mint-bg">
      <div className="mint-container">
        <div className="mint-content">
          <h1>MAX</h1>
          <h1>MAXI</h1>
          <h1>ARBIMAXI</h1>

          {contractAddress ? (
            <>
              <div className="mint-title">Mint your ArbiMaxi here : </div>

              <motion.button
                initial={{ y: 0, x: 0 }}
                whileHover={{ y: -10, x: -10 }}
                transition={{ duration: 0.1 }}
                onClick={() => {
                  handleEnter();
                }}
                className="regular-button mint-button"
              >
                Mint!
              </motion.button>
            </>
          ) : (
            <div>No CONTRACT address detected</div>
          )}
        </div>
      </div>
      <Clipper />
    </div>
  );
};

export default Mint;
