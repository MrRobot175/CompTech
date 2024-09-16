import './Links.css'
import { Link } from 'react-router-dom';


function Links() {
    return (
        <>
        <div className='links'>
            <ul>
          <li>
            <Link to="/">Home</Link>
                    </li>
                     <li>
            <Link to='/products'>Products</Link>
                    </li>
                     <li>
            <Link to='./about'>About us</Link>
                    </li>
                     <li>
            <Link>Profile</Link>
                    </li>
                </ul>
                
        </div>
               
                    
        </>
    )
}
export default Links