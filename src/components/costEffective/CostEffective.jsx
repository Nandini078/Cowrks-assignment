import { useEffect, useState } from "react";
import { COST_EFFECTIVE_WORKSPACE } from "../Const";
import '../BuiltForEnterprises/BuiltForEnterprises.css';
import './CostEffective.css';
import { Image, Button } from "react-bootstrap";

import managedSpaceSolution from '../../assets/managed-space-solutions.png';

const CostEffectiveComponent = () => {
    const [isSelectedMore, setIsSelectedMore] = useState(false)
    const [displayText, setDisplayText] = useState('');
    const whyCowrksList = [
        {
            id: 1,
            text: '100% Compliant, Premium Grade A Real Estate (In Compliance with NBC guidelines)'
        },
        {
            id: 2,
            text: 'COWRKS centres across Brookfield Properties provide dependable & stable support for businesses to execute their long-term growth strategies & scale effortlessly'
        },
        {
            id: 3,
            text: "Enjoy Grade 'A' campuses with access to services like community events, food halls, creches, facility management, security, and parking"
        },
        {
            id: 4,
            text: 'End-to-end workspace solutions, that include the design, build and run of your workspace to create the ideal environment for your business to flourish'
        },
        {
            id: 5,
            text: 'From design and architecture to development and community, our in-house teams offer expertise in creating and managing custom workspaces'
        }
    ]

    useEffect(() => {
        setDisplayText(COST_EFFECTIVE_WORKSPACE.slice(0, 187))
    }, []);
    const handlerMore = (e) => {
        setDisplayText(COST_EFFECTIVE_WORKSPACE);
        setIsSelectedMore(true)
    }
    return (
        <>
            <div className="built-enterprises-layout">
                <h2 className="common-heading">Cost Effective Workspaces</h2>
                <p className="built-enterprises">
                    <span>{displayText}</span>
                    {
                        !isSelectedMore ? <span onClick={handlerMore} className="more-span">.... more</span> : null
                    }
                </p>
                <div className="image-why-cowrks-layout">
                    <Image
                        src={managedSpaceSolution}
                        alt="managedSpaceSolution"
                        style={{ maxWidth: '75%' }}
                        fluid
                    />
                    <div className="why-cowrks-layout">
                        <h2>Why COWRKS?</h2>
                        <div className="why-cowrks-div">
                            {
                                whyCowrksList?.map((item, i) => {
                                    return <p className="why-cowrks-p" key={item.id} >{item.text}</p>
                                })
                            }
                        </div>
                        <div className="btn-layout">
                        <Button type="button" className="button-sapphire button-solid custom-btn">
                            Enquire now
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CostEffectiveComponent;