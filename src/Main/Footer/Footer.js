import "./Footer.css";
import YT_Icon from "../img/youtube.svg";
import GithubIcon from "../img/github.svg";
import InstaIcon from "../img/insta-b.svg";
import TwitterIcon from "../img/twitter.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
    <div className="footer-holder">
      <div className="footer-social">
        <p className="logo">CompTech Website</p>
        <span className="logo-text">
          Your trusted store for top-tier hardware<br /> and tech solutions.  
          Upgrade your setup<br /> with the best in the industry.
        </span>
        <div className="social-icons">
          <Link><img src={YT_Icon} alt="" /></Link>
          <Link><img src={GithubIcon} alt="" /></Link>
          <Link><img src={InstaIcon} alt="" /></Link>
          <Link><img src={TwitterIcon} alt="" /></Link>
        </div>
      </div>

      <div className="footer-info">
        <div className="info-list">
          <ul>
           <li><span className="head">USEFUL LINKS</span></li>
           <li><Link to='./about'><p>About Us</p></Link></li>
           <li><p><Link><p>Blog</p></Link></p></li>
           <li><p><Link><p>Github</p></Link></p></li>
           <li><p><Link to='./products'><p>Products</p></Link></p></li>
          </ul>
        </div>

        <div className="info-link2">
          <ul>
            <li><span className="head">OTHER RESOURCES</span></li>
           <li><p><Link><p>MIT License</p></Link></p></li>
           <li><p><Link><p><Link><p>Contribute</p></Link></p></Link></p></li>
           <li><p><Link><p>Change Log</p></Link></p></li>
           <li><p><Link><p>Contact Us</p></Link></p></li>
          </ul>
        </div>
      </div>
      
      </div>
      <div className="copy">
        <p className="para">Copyright © 2024 Created by <Link className="myname">Momen Mohamed</Link>.</p>

      </div>
      </>
  );
}
export default Footer;
