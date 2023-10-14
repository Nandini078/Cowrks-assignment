import retain from '../../assets/retain-org-culture.svg';
import benefit from '../../assets/benefit-uncompromised-security.svg';
import gain from '../../assets/gain-economic-adv.svg';
import transition from '../../assets/transition-quick.svg';
import attract from '../../assets/attract-talent.svg';
import manage from '../../assets/manage-lesser.svg';
import premium from '../../assets/premium-workspaces.svg';
import team from '../../assets/team-motivated.svg';
import './DesignBuildRunComponent.css';
const DesignBuildRunComponent = () => {
    const arr = [
        {
            heading: 'Retain your brand identity',
            text: 'Transform your workspace to reflect your unique brand and organisational culture with our customised solutions. We tailor our services to meet your needs and embody your organisational ethos.',
            img: retain
        },
        {
            heading: 'Value Advantage',
            text: 'Get a fully customised workspace and save up to 10-25% on overall costs with our seamless one-time spending solution.',
            img: gain
        },
        {
            heading: 'Move-in faster',
            text: 'Our managed office solutions give you the advantage of getting started faster and maximising productivity with shorter move-in & set-up periods.',
            img: transition
        },
        {
            heading: 'Enterprise Grade Secure',
            text: 'Ensure the security of your business with intelligent and reliable IT solutions that guard against breaches. With our help, you can rest assured that your business is well protected from potential threats.',
            img: benefit
        },
        {
            heading: 'Attract the best talent',
            text: 'Improve your hiring approach with a visually appealing workspace that provides a motivating and invigorating atmosphere, bolstering your recruitment strategy.',
            img: attract
        },
        {
            heading: 'Manage lesser',
            text: 'Maximise your business efficiency with our enterprise workspace solution, which eliminates the need for managing multiple vendors.',
            img: manage
        },
        {
            heading: 'Inspire with your workspace design',
            text: 'Transform your workspace into an inspiring and productive environment that your team will love coming to. Our vibrant designs and natural lighting solutions will elevate your workspace, boosting productivity and enhancing employee morale.',
            img: premium
        },
        {
            heading: 'Keep your teams motivated',
            text: 'Transform your workplace into a stimulating environment that fosters collaboration and innovation with our evocative design, diverse events, upscale hospitality, and supportive community. Engage and inspire your employees with a workspace that encourages creativity and teamwork.',
            img: team
        }
    ]
    return (
        <div className='design-build-layout'>
            <h2 className="common-heading">Let us Design, Build And Run Your Next Workspace</h2>
            <div className="data-list">
                {arr.map((item, index) => (
                    <div className="data-item" key={index}>
                        <div className="column-img">
                            <img src={item.img} height='75px' width='75px' alt={item.heading}/>
                        </div>
                        <div className="column-text">
                            <h2 className='eachitem-heading'>{item.heading}</h2>
                            <p className='eachitem-p'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DesignBuildRunComponent;