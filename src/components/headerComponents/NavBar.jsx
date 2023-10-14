import { Image, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImg from '../../assets/CoWrksLogo.png';

function NavBar() {
    return (
        <div className='custom-navbar'>
            <Navbar className="header-sapphire-container top" bg="light" expand="lg">
                <div className="header-sapphire">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/" className="header-logo">
                                <Image
                                    src={logoImg}
                                    alt="CoWrks"
                                    width="150"
                                    height="30"
                                    fluid
                                />
                            </Nav.Link>
                        </Nav>
                        <Nav className="ml-auto hide-nav-bar">
                            <Nav.Item>
                                <Nav.Link href="/office-spaces-India">Locations</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/workspace-solutions">Solutions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/offers">Offers</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/alliance-partnerships">Brand Alliance</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/about-us">About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Button type="button" className="button-sapphire button-solid custom-btn">
                                    Contact Us
                                </Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default NavBar;