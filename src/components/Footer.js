import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/git-white.svg";
import { GITURL, LINKEDINURL } from "../consts";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="flex justify-start">Built with ♥ by Tanmay</Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mt-2">          
                <a href={LINKEDINURL}><img src={navIcon1} alt="" /></a>
                <a href={GITURL}><img src={navIcon2} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
