import "./Signin.css";
import Text from "../Home/Body/Text/Text";
import ImgIco1 from '../img/google.svg'
import ImgIco2 from '../img/ffacebook.svg'
import R_img from '../img/pattern (1).png'
import { Link } from "react-router-dom";
function Signin() {
  return (
    <div className="sign-in">
      <div className="left-side">
        <div className="text-sign-In">
          <Text
            H1Text="Sign In"
            P2Text="Enter your email and password to Sign In."
          />
        </div>
        <div className="user-login">
          <div className="userN-passWord">
            <p>Your email</p>
            <input className="" type="email" placeholder="name@mail.com" />
            <p>Password</p>
            <input className="" type="password" placeholder="********" />
            <div class="terms">
              <input type="checkbox"/>
              <span>I agree to terms and conditions</span>
            </div>
          </div>
                  <div className="btns">
                  <button className="S-I"> SIGN IN</button>
                      <button className="google-btn"> <span> <img src={ImgIco1} alt="" />SIGN IN WITH GOOGLE </span></button>
                  <button className="facebook-btn"> <span> <img src={ImgIco2} alt="" />SIGN IN WITH FACEBOOK </span></button>
                  </div>
                  <div className="acc"> <p className="forget"> Not registered? <Link to="/sign-up">Create account</Link>
                      
                  </p></div>
        </div>
      </div>
      <div className="right-side">
        <img src={R_img} alt=""/>
      </div>
    </div>
  );
}

export default Signin;
