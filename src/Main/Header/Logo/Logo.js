import Img1 from '../../img/unnamed.png'
import './Logo.css'
import { Link } from 'react-router-dom'
function Logo() {
    
    return (
        <div className="logo">
           
            <Link to="/"><img className='logo-img' src={Img1} alt='' /></Link>
            
        </div>
    )
 }
export default Logo