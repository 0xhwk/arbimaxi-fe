import "../App.css";
import Scroll from "react-scroll";
import { tm1, tm2, tm3 } from "../Images";

const Team = () => {
  const Element = Scroll.Element;
  return (
    <Element name="team" className="team-container">
      <div className="team-row">
        <div className="team-member">
          <img src={tm1}></img>
          <p>Baeset</p>
        </div>
        <div className="team-member">
          <img src={tm2}></img>
          <p>Baeset2</p>
        </div>
        <div className="team-member">
          <img src={tm3}></img>
          <p>Baeset3</p>
        </div>
      </div>
    </Element>
  );
};

export default Team;
