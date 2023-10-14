import { TOP_BAR_TEXT } from '../Const';
import './Header.css';

const TapBar = () =>{
    return(
        <div className="top-bar">
            <div className="blinking-text">{TOP_BAR_TEXT}</div>
        </div>
    )
}

export default TapBar;