import './FooterComponent.css';
import { faInstagram, faLinkedin, faSquareFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FooterComponent = () => {
    const list = [
        {
            heading: 'COWRKS',
            items: ['About Us', 'Blog', 'Careers', 'FAQ']
        }, {
            heading: 'Locations',
            items: ['Bengaluru', 'Mumbai', 'Delhi NCR', 'Chennai', 'Hyderabad', 'Pune']
        }, {
            heading: 'Solutions',
            items: ['Flexible Offices',
                'Managed Offices',
                'Day Pass',
                'Virtual Office',
                'Event Spaces',
                'Meeting Rooms',
                'Lounge Membership']
        }
    ]
    return (
        <footer className="footer">
            {
                list.map((eachItem) => {
                    return <div className="footer-column" key={eachItem.heading}>
                        <h5 className='each-item-h5'>{eachItem.heading}</h5>
                        <ul className='list-items'>
                            {
                                eachItem.items?.map((item) => {
                                    return <li key={item} className='list-items-li'>{item}</li>
                                })
                            }
                        </ul>
                    </div>
                })
            }
            <div className="footer-column wide-column">
                <h5 className='each-item-h5'>Follow Us</h5>
                <div className='fa-icons'>
                    <ul style={{ width: '100%', padding: '0' }}>
                        <li className='link-li'>
                            <a className='link-a' href="https://www.facebook.com/COWRKS/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} /></a>
                            <a className='link-a' href="https://twitter.com/i/flow/login?redirect_after_login=%2Fcowrks" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a className='link-a' href="https://www.instagram.com/cowrks/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a className='link-a' href="https://in.linkedin.com/company/cowrks" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a className='link-a' href="https://www.youtube.com/channel/UCtV21z12cLpHCZeufAt880Q" target="_blank">   <FontAwesomeIcon icon={faYoutube} /></a>
                        </li>
                        <div className='footer-heading'> Contact Us </div>
                        <div className='footer-followUs-text'>
                            Unit No. 804, 8th Floor, Campus 7, Ecoworld, Sarjapur, Marathahalli, Outer Ring Road, Bangalore 560103
                        </div>
                        <div className='footer-followUs-text'>
                            +91 95386 11122 <br />
                            solutions@cowrks.com
                        </div>
                        <div className='footer-heading'> Disclaimer </div>
                        <div className='footer-followUs-text'>
                            At COWRKS, we value transparency and want to ensure that our community is well-informed and protected from any potentially fraudulent activities. <br /><br />
                            COWRKS does not engage in soliciting investments, requesting personal or financial information including CVV (Card Verification Value) or OTP (One-Time Password), or endorsing any third-party investment opportunities. <br /><br />
                            Official communications from COWRKS will always originate from COWRKS-verified channels. If you receive any messages claiming to be from COWRKS regarding investments or financial matters, please disregard them and inform us through our official channels.
                        </div>
                        <div className='footer-heading'> Terms & Conditions </div>
                        <div className='footer-followUs-text'>
                            Copyright © COWRKS 2023. All rights reserved.<br /><br />
                            The images displayed on the COWRKS mobile application and website, are the property of COWRKS India Private Limited. Any use, duplication and/or reference to the said images without COWRKS prior written consent will be an infringement of COWRKS copyright in such images. 
                            If you intend to use the images for promoting COWRKS, you could seek our consent by writing to communication@cowrks.com, and use such image/s after obtaining our written consent. <br />
                        </div>
                    </ul>
                </div>

                {/* <ul>
                    <li>  <FaFacebook /> Follow us on Facebook</li>
                    <li>Subheading 2</li>
                    <li>Subheading 3</li>
                </ul> */}
            </div>
        </footer>
    )
}

export default FooterComponent;