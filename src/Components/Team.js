import "../App.css";
import Scroll from "react-scroll";
import { owen, arthur, venator, psyduck, kahel, weu } from "../Images";

const Team = () => {
  const Element = Scroll.Element;
  return (
    <Element name="team" className="team-container">
      <div className="team-row">
        <div className="team-member">
          <img loading="lazy" src={owen}></img>
          <p>Owen</p>
        </div>
        <div className="team-member">
          <img loading="lazy" src={arthur}></img>
          <p>Arthur</p>
        </div>
        <div className="team-member">
          <img loading="lazy" src={venator}></img>
          <p>Venator</p>
        </div>
      </div>
      <div className="team-row">
        <div className="team-member">
          <img loading="lazy" src={psyduck}></img>
          <p>Psyduck</p>
        </div>
        <div className="team-member">
          <img loading="lazy" src={kahel}></img>
          <p>kAHEL</p>
        </div>
        <div className="team-member">
          <img loading="lazy" src={weu}></img>
          <p>Weu</p>
        </div>
      </div>
    </Element>
  );
};

export default Team;
