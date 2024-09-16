import './CardTwo.css'
import Card_Img from '../../../../img/data.jpg'
function CardTwo() {
    return (
        <div className='card-2'>
            <div className='card-2-img'>
                <img src={Card_Img} alt='' />
            </div>
            <h5 className='h5-card-two'>Enterprise</h5>
            <h2 className='h2-card-two'>Top-Notch Tech Solutions</h2>
            <p className='p-card-two'>Our store offers cutting-edge hardware and services to keep your business ahead.
                Upgrade or start fresh with our expert tech solutions.</p>
       </div> 
    )
    
} export default CardTwo