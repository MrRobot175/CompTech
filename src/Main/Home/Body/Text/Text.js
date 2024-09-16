import './Text.css'
function Text(props) {
    return (
        <div className='text'>
            <p className='p-text'> {props.P1Text}</p>
            <h1 className='h1-text'> {props.H1Text}</h1>
            <span className='p-sec-text'>{props.P2Text}</span>
        </div>
    )
}
export default Text