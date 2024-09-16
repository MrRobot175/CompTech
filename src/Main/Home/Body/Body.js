import './Body.css'
import LandPage from './LandPage/LandPage'
import Holder from './CompoHolder/Holder'
import Text from './Text/Text'
import ImgHolder from './ImgHolder/ImgHolder'
import Form from './Form/Form'

function Body() {
    return (
        <div className="body">
            <LandPage />
            <Holder />
           <div className='our-team-text'> <Text P1Text="Our Team"
                H1Text="Here are our Heroes" 
                P2Text="Team of tech experts is dedicated to providing top-notch service and support. 
                With years of experience, we're here to help you find the best hardware and solutions. "/></div>
            
            <ImgHolder />

            <div className='contact-us-text'><Text P1Text="Contact Us"
                H1Text="Want to work with us?" 
                P2Text="Complete this form and we will get back to you in 24 hours." /></div>
            <Form/>
          
        </div>
    )
}
export default Body