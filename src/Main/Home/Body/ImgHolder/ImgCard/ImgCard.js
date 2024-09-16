import './ImgCard.css'
import ImgPerson from '../../../../img/Unknown_person.jpg'
import SocialFacebook from '../../../../img/facebook.svg'
import SocialTwitter from '../../../../img/insta.svg'
import SocialLinkedin from '../../../../img/linkedin.svg'
function ImgCard(props) {
    return (
        <div className='img-card-main'>
            <div className='image-card'>
                <img src={ImgPerson} alt=''/>
            </div>
            <p className='name'>{props.name}</p>
            <p className='major'> {props.major}</p>
            <div className='s-icons'>
            <img src={SocialFacebook} alt=''/>
            <img src={SocialTwitter} alt=''/>
            <img src={SocialLinkedin} alt=''/>
            
            </div>
        </div>
    )
}
export default ImgCard