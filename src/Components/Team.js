import "../App.css";
import { tm1, tm2, tm3 } from "../Images";

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-row">
        <div className="team-member">
          <img src={tm1}></img>
          <p>Baeset</p>
        </div>
        <div className="team-member">
          <img src={tm2}></img>
          <p>Baeset 2</p>
        </div>
        <div className="team-member">
          <img src={tm3}></img>
          <p>Baeset3</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
