import './Container.css'
import containerIcon from '../../../../img/search.svg'
function Container() {
    return (
        <div className='container'>
            <div className='img-div'><img src={containerIcon} alt=''/></div>
            <h1>Discover the Future of Tech with Us!    </h1>
            <p className='first-p'>Upgrade your experience with cutting-edge gadgets and hardware.
                Our store offers everything you need to build, enhance, or repair your tech setup.</p>
            <p className='sec-p'>We've made it simple and hassle-free, so you can focus on <br/>what's important—getting the best gear.
                Just explore, choose, and enjoy.</p>
            <button>READ MORE</button>

        </div>
    )
}
export default Container