import { useEffect, useState } from "react";
import { MORE_TEXT } from "../Const";
import './BuiltForEnterprises.css';
import { Image } from "react-bootstrap";
import EnterPrisesImg from '../../assets/COWRKS-Managed-Office-1.png';
import managedSpaceSolution from '../../assets/managed-space-solutions.png';

const BuiltForEnterprises = () =>{
    const [isSelectedMore, setIsSelectedMore] = useState(false)
    const [displayText, setDisplayText] = useState('')
    
    useEffect(()=>{
        setDisplayText( MORE_TEXT.slice(0, 187))
    },[]);
    const handlerMore = (e) =>{
     setDisplayText(MORE_TEXT);  
     setIsSelectedMore(true) 
    }
    return(
        <>
        <div className="built-enterprises-layout">
            <h2 className="common-heading">Built for Enterprises</h2>
            <p className="built-enterprises">
                <span>{displayText}</span>
                {
                    !isSelectedMore ? <span onClick={handlerMore} className="more-span">.... more</span> : null
                }
            </p>
            <Image
                src={EnterPrisesImg}
                alt="CoWrks"
                style={{maxWidth: '75%'}}
                fluid
            />
        </div>

        </>
    )
}
export default BuiltForEnterprises;