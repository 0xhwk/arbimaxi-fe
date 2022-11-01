import { useWeb3Contract } from "react-moralis";
import { abi, contractAddresses } from "../Constants";
import { useMoralis } from "react-moralis";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import "../App.css";
import Clipper from "./Clipper";
import Notification from "./Notification";

const Mint = () => {
  const [notification, setNotification] = useState();
  const [notificationId, setNotificationId] = useState(0);
  const [entranceFee, setEntranceFee] = useState();
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const contractAddress = contractAddresses[5];

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
              <div className="mint-title">Coming Soon </div>
              <motion.button
                initial={{ y: 0, x: 0 }}
                whileHover={{ y: -10, x: -10 }}
                transition={{ duration: 0.1 }}
                className="regular-button mint-button"
              >
                Soon !
              </motion.button>
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

//Error: transaction was replaced [ See: https://links.ethers.org/v5-errors-TRANSACTION_REPLACED ] (cancelled=true, reason="cancelled", replacement={"hash":"0x75c8d7f0070d4b88a4afd96bd968c5ce58b98f1f2db2d1608c45a76daa114f9a","type":2,"accessList":[],"blockHash":"0x31ebbf99bfbb9347154722e089bbd4e7cbe3d3e1207a7c2a6aca411899f9a709","blockNumber":7871311,"transactionIndex":5,"confirmations":11,"from":"0xDD3B763eE6986B8b1CCd0eEad429CC1f7f94F73a","gasPrice":{"type":"BigNumber","hex":"0xd2a3d69b"},"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0xd2a3d69b"},"gasLimit":{"type":"BigNumber","hex":"0x01bad458"},"to":"0xDD3B763eE6986B8b1CCd0eEad429CC1f7f94F73a","value":{"type":"BigNumber","hex":"0x00"},"nonce":40,"data":"0x","r":"0xb9bab940d0e8f953de2a4cb668d80b1f8910d8710973f7932e403c3f4312c472","s":"0x7b15e1f618dbf0188e27f84364b507b31991aedad1eec97f9f0899acbe65c509","v":0,"creates":null,"chainId":5}, hash="0xe61d87022c8d1f9ce866c66fd50435d79aac8d8624a46abc4c88fedab9718c92", receipt={"to":"0xDD3B763eE6986B8b1CCd0eEad429CC1f7f94F73a","from":"0xDD3B763eE6986B8b1CCd0eEad429CC1f7f94F73a","contractAddress":null,"transactionIndex":5,"gasUsed":{"type":"BigNumber","hex":"0x5208"},"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","blockHash":"0x31ebbf99bfbb9347154722e089bbd4e7cbe3d3e1207a7c2a6aca411899f9a709","transactionHash":"0x75c8d7f0070d4b88a4afd96bd968c5ce58b98f1f2db2d1608c45a76daa114f9a","logs":[],"blockNumber":7871311,"confirmations":11,"cumulativeGasUsed":{"type":"BigNumber","hex":"0x05761b"},"effectiveGasPrice":{"type":"BigNumber","hex":"0xd2a3d69b"},"status":1,"type":2,"byzantium":true}, code=TRANSACTION_REPLACED, version=providers/5.6.0)
// at Logger.makeError (index.js:238:1)
// at Web3Provider.<anonymous> (base-provider.js:1261:1)
// at Generator.next (<anonymous>)
// at fulfilled (base-provider.js:12:1)
