import { logo } from "../Images";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src={logo} alt="logo"></img>
      <div className="footer-right-container">
        <p className="footer-text">Join the Maxis!</p>
        <div className="footer-socials">
          <i className="fa-brands fa-twitter footer-socials-logo"></i>
          <i className="fa-brands fa-discord footer-socials-logo"></i>
          <i className="fa-brands fa-instagram footer-socials-logo"></i>
        </div>
      </div>
    </div>
  );
};
export default Footer;
