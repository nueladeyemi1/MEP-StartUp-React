import {
  Box,
  Column,
  FooterLink,
  Social,
  OuterCardStyle,
  SubContainerStyle,
  SubInputStyle,
  SubButtonStyle,
} from './footerstyle'
import { Col, Container, Row } from 'react-bootstrap'
// import SubscribeCard from "react-subscribe-card";
import {
  PhoneFill,
  EnvelopeFill,
  GeoAltFill,
  Facebook,
  Instagram,
  Twitter,
} from 'react-bootstrap-icons'
// import "../../style.css";

function Footer() {
  const mailchimpURL = `[Your Mailchimp subscription URL]`

  return (
    <Box>
      <Container>
        <section className='row1'>
          <Row>
            <div className='col1'>
              <Col>
                <div>
                  <h6 className='mb-4'>SIGN UP FOR OUR NEWSLETTER</h6>
                  {/* <SubscribeCard
                mailchimpURL={mailchimpURL}
                outerCardStyle={OuterCardStyle}
                subContainerStyle={SubContainerStyle}
                subInputStyle={SubInputStyle}
                subButtonStyle={SubButtonStyle}
              /> */}
                  <FooterLink href='/'>
                    <Social className='me-3'>
                      <Facebook></Facebook>
                    </Social>
                  </FooterLink>
                  <FooterLink href='/'>
                    <Social className='me-3'>
                      <Instagram></Instagram>
                    </Social>
                  </FooterLink>
                  <FooterLink href='/'>
                    <Social className='me-3'>
                      <Twitter></Twitter>
                    </Social>
                  </FooterLink>
                </div>
              </Col>
            </div>
            <div className='col1'>
              <Col>
                <h6 className='mb-4'>Navigate</h6>
                <Column>
                  <FooterLink href='/'>Home</FooterLink>
                  <FooterLink href='/'>About</FooterLink>
                  <FooterLink href='/'>Services</FooterLink>
                  <FooterLink href='/'>Projects</FooterLink>
                  <FooterLink href='/'>Career</FooterLink>
                  <FooterLink href='/'>Contact</FooterLink>
                </Column>
                <Column>
                  <FooterLink></FooterLink>
                  <FooterLink></FooterLink>
                  <FooterLink></FooterLink>
                </Column>
              </Col>
            </div>
            <div className='col1'>
              <Col>
                <h6 className='mb-4'>CONTACT US</h6>
                <Column>
                  <FooterLink>
                    <GeoAltFill className='me-2'></GeoAltFill>
                    12345 Street name, PlaceHolder Street, Fagba Lagos.
                  </FooterLink>
                  <FooterLink>
                    <EnvelopeFill className='me-2'></EnvelopeFill>
                    info@Zicad.com
                  </FooterLink>
                  <FooterLink>
                    <PhoneFill className='me-2'></PhoneFill>
                    0810-0000-000
                  </FooterLink>
                </Column>
              </Col>
            </div>
          </Row>
        </section>
      </Container>
    </Box>
  )
}

export default Footer
