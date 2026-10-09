import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const navIcon1 = "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/nav-icon1.svg";
const navIcon2 = "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/nav-icon2.svg";
const navIcon3 = "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="#"><img src={navIcon2} alt="Facebook" /></a>
              <a href="#"><img src={navIcon3} alt="Instagram" /></a>
              <a href="#"><img src={navIcon1} alt="GitHub" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let’s Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;