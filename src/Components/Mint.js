import { useWeb3Contract } from "react-moralis";
import { abi, contractAddresses } from "../Constants";
import { useMoralis } from "react-moralis";
import "../App.css";
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
    <div className="mint-container">
      <div className="mint-content">
        {contractAddress ? (
          <>
            <div className="mint-title">Mint your ArbiMaxi here : </div>

            <button
              onClick={() => {
                handleEnter();
              }}
              className="regular-button mint-button"
            >
              Mint!
            </button>
          </>
        ) : (
          <div>No CONTRACT address detected</div>
        )}
      </div>
    </div>
  );
};

export default Mint;
