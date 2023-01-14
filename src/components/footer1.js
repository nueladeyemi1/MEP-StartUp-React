import styles from "./footer.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  PhoneFill,
  EnvelopeFill,
  GeoAltFill,
  Facebook,
  Instagram,
  Twitter,
} from "react-bootstrap-icons";

const Footer1 = () => {
  /*  const classes = useStyles(); */
  return (
    <footer className={`container-fluid py-4 ${styles.bgFooter} }`}>
      <div className="row">
        <div
          className={`container ${styles.customeContainer} d-flex justify-content-between flex-wrap`}
        >
          <section className=" col-xs-6">
            <h4 className={`text-white ${styles.titleList}`}>PAGES</h4>
            <br />

            <ul className={styles.colorList}>
              <a
                href="/"
                className={`text-reset text-decoration-none ${styles.item}`}
              >
                About US
              </a>

              <br />
              <a
                href="/"
                className={`text-reset text-decoration-none ${styles.item}`}
              >
                Services
              </a>

              <br />
              <a
                href="/"
                className={`text-reset text-decoration-none ${styles.item}`}
              >
                Projects
              </a>

              <br />
              <a
                href="/"
                className={`text-reset text-decoration-none ${styles.item}`}
              >
                Career
              </a>

              <br />
              <a
                href="/"
                className={`text-reset text-decoration-none ${styles.item}`}
              >
                Home
              </a>
            </ul>
          </section>

          {/* <div className="col1">
            <Col>
              <h6 className="mb-4">CONTACT US</h6>
              <Column>
                <FooterLink>
                  <GeoAltFill className="me-2"></GeoAltFill>
                  12345 Street name, PlaceHolder Street, Fagba Lagos.
                </FooterLink>
                <FooterLink>
                  <EnvelopeFill className="me-2"></EnvelopeFill>
                  info@Zicad.com
                </FooterLink>
                <FooterLink>
                  <PhoneFill className="me-2"></PhoneFill>
                  0810-0000-000
                </FooterLink>
              </Column>
            </Col>
          </div> */}

          <div className="col-xs-6">
            <h4 className={`text-white ${styles.titleList}`}>CONTACT US</h4>
            <br />
            <p className={styles.thirdSectionParagraph}>
              <PhoneFill className="me-2"></PhoneFill> +2348-162-728-300,
              +2348-053-454-579
              <br />
              <br />
              <GeoAltFill className="me-2"></GeoAltFill>
              11, agbaoku street, off awosika bus stop, opebi Lagos, Nigeria.
              <br />
              <br />
              <EnvelopeFill className="me-2"></EnvelopeFill>
              zicadintegrated@gmail.com <br />
              <br />
            </p>
            {/* <section className="social__icons">
              <ul className={`d-flex ${styles.colorList}`}>
                <li>
                  <FaFacebookSquare
                    className={styles.item}
                    style={{ fontSize: "1.4rem", margin: "0.6rem" }}
                  />
                </li>
                <li>
                  <FaInstagram
                    className={styles.item}
                    style={{ fontSize: "1.4rem", margin: "0.6rem" }}
                  />
                </li>
                <li>
                  <FaLinkedin
                    className={styles.item}
                    style={{ fontSize: "1.4rem", margin: "0.6rem" }}
                  />
                </li>
                <li>
                  <FaTwitter
                    className={styles.item}
                    style={{ fontSize: "1.4rem", margin: "0.6rem" }}
                  />
                </li>
              </ul>
            </section> */}
          </div>
          <section className="col-xs-6">
            <h4 className={`text-white ${styles.titleList}`}>NEWSLETTER</h4>
            <TextField
              id="standard-textarea"
              label="Email"
              InputLabelProps={{ style: { color: "#b2b2b2" } }}
              inputProps={{
                style: {
                  color: "#b2b2b2",
                },
              }}
              fullWidth
              placeholder="email@example.com"
              multiline
              variant="standard"
            />
            <Button
              style={{ marginTop: "35px", borderRadius: "25px" }}
              /* className={classes.buttonStyle} */
              fullWidth
              variant="contained"
              color="primary"
            >
              Subscribe
            </Button>
          </section>
        </div>
      </div>

      <section className="social__icons">
        <ul className={`d-flex ${styles.colorList}`}>
          <li>
            <FaFacebookSquare
              className={styles.item}
              style={{ fontSize: "1.4rem", margin: "0.6rem" }}
            />
          </li>
          <li>
            <FaInstagram
              className={styles.item}
              style={{ fontSize: "1.4rem", margin: "0.6rem" }}
            />
          </li>
          <li>
            <FaLinkedin
              className={styles.item}
              style={{ fontSize: "1.4rem", margin: "0.6rem" }}
            />
          </li>
          <li>
            <FaTwitter
              className={styles.item}
              style={{ fontSize: "1.4rem", margin: "0.6rem" }}
            />
          </li>
        </ul>
      </section>

      <div
        /* className={classes.TextDifferentColor} */
        style={{ textAlign: "center", paddingTop: "20px", color: "#b2b2b2" }}
      >
        Copyright ©2022 All rights reserved
      </div>
    </footer>
  );
};

export default Footer1;