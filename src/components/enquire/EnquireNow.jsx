import { Button } from "react-bootstrap";
import { ENQURE, Enquiry_now } from "../Const";
import './Enquire.css';
const EnquireNow = () => {
    return (
        <div className="enquire-layout">
            <div className="enquire-div">
                <p className="equire-p">
                    {ENQURE}
                </p>
                <div className="enquire-btn">
                <Button type="button" className="button-sapphire button-solid custom-btn">
                    Enquire now
                </Button>
                </div>
            </div>
        </div>
    )
}

export default EnquireNow;