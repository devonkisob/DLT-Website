import { useState, useEffect } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/pics/logo.svg';

export const NavBar = ()=> {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // keeps track of scroll progress
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY>50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        } 

    window.addEventListener("srcoll", onScroll);

    return () => window.removeEventListener("srcoll", onScroll);
    }, [])

    const onUpdatedActiveLink = (value) => {
        setActiveLink(value);
    }
    
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Marcia Rodney"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' :'navbar-link' } onClick = {() => onUpdatedActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' :'navbar-link' } onClick = {() => onUpdatedActiveLink('aboutme')}>About Me</Nav.Link>
                    <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' :'navbar-link' } onClick = {() => onUpdatedActiveLink('services')}>Services</Nav.Link>
                    <Nav.Link href="#blog" className={activeLink === 'blog' ? 'active navbar-link' :'navbar-link' } onClick = {() => onUpdatedActiveLink('blog')}>Blog</Nav.Link>
                    {/*<Nav.Link href="#articles" className={activeLink === 'articles' ? 'active navbar-link' :'navbar-link' } onClick = {() => onUpdatedActiveLink('articles')}>Articles</Nav.Link>*/}
                    <Nav.Link href="#faqs" className={activeLink === 'faqs' ? 'active navbar-link' :'navbar-link' } onClick = {() => onUpdatedActiveLink('faqs')}>FAQs</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' :'navbar-link' } onClick={() => onUpdatedActiveLink('contact')}>
                        <button><span>Contact</span></button>
                    </Nav.Link>
                </span>
            </Navbar.Collapse>
            </Container>
       </Navbar>
    )
}