import './SignUp.css'
import Text from "../Home/Body/Text/Text";
import ImgIco1 from '../img/google.svg'
import ImgIco2 from '../img/ffacebook.svg'
import R_img from '../img/pattern (1).png'
import { Link } from "react-router-dom";
function SignUp() {
    return (
        <div className="sign-up">
      <div className="left-side">
        <div className="text-sign-Up">
          <Text
            H1Text="Join Us Today"
            P2Text="Enter your email to register."
          />
        </div>
        <div className="user-sign-up">
          <div className="userN-passWord">
            <p>Your email</p>
            <input className="" type="email" placeholder="name@mail.com" />
            <div class="terms">
              <input type="checkbox"/>
              <span>I agree to terms and conditions</span>
            </div>
          </div>
                  <div className="btns">
                  <button className="S-U"> REGISTER NOW</button>
                      <button className="google-btn"> <span> <img src={ImgIco1} alt="" />SIGN UP WITH GOOGLE </span></button>
                  <button className="facebook-btn"> <span> <img src={ImgIco2} alt="" />SIGN UP WITH FACEBOOK </span></button>
                  </div>
                  <div className="acc"> <p className="forget"> Already have an account? <Link to="/sign-in">Sign in</Link>
                      
                  </p></div>
        </div>
      </div>
      <div className="right-side-up">
        <img src={R_img} alt=""/>
      </div>
    </div>

    )
}
export default SignUp