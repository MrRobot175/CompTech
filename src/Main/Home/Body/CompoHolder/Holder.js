import './Holder.css'
import Container from './Container/Container'
import CardTwo from './Card/CardTwo'
function Holder() {
    return (
        <div className="two-card-holder">
            <Container />
            <CardTwo/>
        </div>
    )
}
export default Holder