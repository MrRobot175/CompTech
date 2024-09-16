import './Buttons.css'
import { Link } from 'react-router-dom'
function Buttons() {
    return (
        <div className="buttons">
            <Link to="/sign-in"><button className='one' >LOGIN </button></Link>
            <Link to="/sign-up"><button className='two'>SIGNUP</button></Link>
               
            
        </div>      
    )
}
export default Buttons