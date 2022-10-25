import { motion } from "framer-motion";
import "../App.css";

const Roadmap = () => {
  return (
    <>
      {/* <div className="roadmap-title">ROADMAP</div> */}
      <div className="roadmap-container">
        <motion.div
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="roadmap-left"
        >
          <div className="roadmap-item">
            Staking event
            <p className="roadmap-text">
              Staking your Maxis will enable you to get exclusive rewards !
            </p>
          </div>
          <div className="roadmap-item">
            Becoming a Capital
            <p className="roadmap-text">
              If you believe in Arbitrum, you will be able to invest in arbitrum
              projects with ArbiMaxi NFTs.Each ArbiMaxi will be used as an
              investment asset and seed invested in upcoming projects on
              arbitrum.
            </p>
          </div>
        </motion.div>
        <div className="roadmap-divider"></div>
        <motion.div
          initial={{ x: 500 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
          className="roadmap-right"
        >
          <div className="roadmap-item">
            NFT minting event
            <p className="roadmap-text">
              Minting will begin in January 2023, 1042 Maxis will be reserved
              for whitelisted members from community.
            </p>
          </div>
          <div className="roadmap-item">
            Access/use of bots written by our developer team.
            <p className="roadmap-text">
              Developers of ArbiMaxi will provide various NFT tools for stakers.
              As the arbitrum evolves, so do we.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Roadmap;
