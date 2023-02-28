import React from 'react'
import Footer1 from '../components/footer1'
import Map from '../components/Map'
import Mapp from '../components/Mapdata'
import emailjs from 'emailjs-com'
import { Container, Row, Col } from 'react-bootstrap'


const Contacts = function() {
  
  function sendEmail(e) {
    e.preventDefault();    //To prevent reload

    emailjs.sendForm('service_duv7ooh', 'template_6952ogo', e.target, 'GsOug08hfQqbgkERA')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <Container>
        <h2 style={{ marginBottom: "2.5rem" }}>Company Contact Information</h2>
        <Row className="sec_sp">
          <Col lg="5">
            <div className="col-md-4">
              zicad Integrated Engineering services
              <address style={{ marginBottom: "2.5rem" }}>
                Address: 11, agbaoku street, off awosika bus stop, opebi Lagos,
                Nigeria.
                <div>Telephone: +2348-162-728-300 | +2348-053-454-579</div>
                <div>zicadintegrated@gmail.com</div>
              </address>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <Mapp />
            </div>
          </Col>

          <Col>
            <strong>
              <div style={{ marginBottom: "1.5rem" }}>Send us an email</div>
            </strong>

            <div style={{ marginBottom: "2.5rem" }}>
              Please tell us about your business.
              <div>
                Zicad representative will respond to you instantly and walk you
                through our services.
              </div>
            </div>
            <Col lg="7" className="d-flex">
              <form className="contact__form w-100" onSubmit={sendEmail}>
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="from_name"
                      placeholder="Name"
                      required
                    />
        
                  </Col>
                  <br />
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                   
                  </Col>
                  <br />
                  <br />
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control "
                      type="email"
                      name="from_email"
                      placeholder="Email"
                      required
                    />
                  </Col>
                </Row>
                <br />
                <textarea
                  className="form-control rounded-0"
                  name="html_message"
                  placeholder="Message"
                  rows="5"
                  required
                />
                <br />
                <Row>
                  <Col lg="12" className="form-group">
                    <input
                      className="btn ac_btn"
                      style={{
                        backgroundColor: "rgb(55, 99, 176)",
                        color: "white",
                      }}
                      type="submit"
                      value="Send"
                    />
                  </Col>
                </Row>
              </form>
            </Col>
          </Col>
        </Row>

      </Container>
      <section>
        <Footer1 />
      </section>
    </>
  );
}

export default Contacts
