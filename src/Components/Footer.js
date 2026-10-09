import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";

const logo = "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/logo.svg";
const navIcon1 = "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/nav-icon1.svg";
const navIcon2 = "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/nav-icon2.svg";
const navIcon3 = "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <MailchimpForm />

         
          <Col size={12} sm={6} className="text-center text-sm-start mb-3 mb-sm-0">
            <img src={logo} alt="Logo" style={{ width: '110px' }} />
          </Col>

          
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="#"><img src={navIcon2} alt="Facebook" /></a>
              <a href="#"><img src={navIcon3} alt="Instagram" /></a>
              <a href="#"><img src={navIcon1} alt="GitHub" /></a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;