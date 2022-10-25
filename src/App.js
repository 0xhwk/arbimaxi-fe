import "./App.css";

import Header from "./Components/Header";
import Mint from "./Components/Mint";
import Roadmap from "./Components/Roadmap";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Team from "./Components/Team";

function App() {
  //   <motion.a
  //   href="https://discord.gg/aasTeCBM"
  //   target="_blank"
  //   animate={{ rotate: [0, 360, 0, 0, 0, 0] }}
  //   transition={{ repeat: Infinity, duration: 3 }}
  //   className="fa-brands fa-discord about-logo"
  // ></motion.a>

  return (
    <>
      <Header />
      <Mint />
      <About />
      <Roadmap />
      <Team />
      <Footer />
    </>
  );
}

export default App;
