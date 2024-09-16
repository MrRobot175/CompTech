import "./Form.css";
function Form() {
    return (
        <div className="form-holder"> 

            <div className="name-email">
            <input className="full-name" type="text" placeholder="Full Name" />
            <input className="email" type="email" placeholder="Email Address" />
            </div>

            <input className="message" type="text" placeholder="Message" />
            <button className="send">SEND MESSAGE</button>

        </div>
    );
        
    }
export default Form;
