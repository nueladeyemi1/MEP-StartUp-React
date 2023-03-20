import styles from './footer.module.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

import {
  PhoneFill,
  EnvelopeFill,
  GeoAltFill,
  Facebook,
  Instagram,
  Twitter,
} from 'react-bootstrap-icons'

const Footer1 = () => {
  /*  const classes = useStyles(); */

  const handleFacebook = () => {
    window.location.href = "https://facebook.com/101602696219838";
  }

  const handleInstagram = () => {
    window.location.href = "https://www.instagram.com/zicadengineering/";
  };

  const handleTwitter = () => {
    window.location.href = "https://twitter.com/zicadengineerin";
  };

  const handleLinkedIn = () => {
    window.location.href = "https://linkedin.com/company/zicad-engineering-services/";
  };

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
              <Link
                to="/about"
                className={`text-reset text-decoration-none ${styles.item}`}
              >
                About US
              </Link>

              <br />
              <Link
                to="/services"
                className={`text-reset text-decoration-none ${styles.item}`}
              >
                Services
              </Link>

              <br />
              <Link
                to="/projects"
                className={`text-reset text-decoration-none ${styles.item}`}
              >
                Projects
              </Link>

              <br />
              <Link
                to="/"
                className={`text-reset text-decoration-none ${styles.item}`}
              >
                Home
              </Link>
            </ul>
          </section>

          <div className="col-xs-6">
            <h4 className={`text-white ${styles.titleList}`}>CONTACT US</h4>
            <br />
            <p className={styles.thirdSectionParagraph}>
              <PhoneFill className="me-2"></PhoneFill> +2348-162-728-300 |
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
          <li onClick={() => handleFacebook()}>
            <FaFacebookSquare
              className={styles.item}
              style={{ fontSize: "1.4rem", margin: "0.6rem" }}
            />
          </li>
          <li onClick={() => handleInstagram()}>
            <FaInstagram
              className={styles.item}
              style={{ fontSize: "1.4rem", margin: "0.6rem" }}
            />
          </li>
          <li onClick={() => handleLinkedIn()}>
            <FaLinkedin
              className={styles.item}
              style={{ fontSize: "1.4rem", margin: "0.6rem" }}
            />
          </li>
          <li onClick={() => handleTwitter()}>
            <FaTwitter
              className={styles.item}
              style={{ fontSize: "1.4rem", margin: "0.6rem" }}
            />
          </li>
        </ul>
      </section>

      <div
        style={{ textAlign: "center", paddingTop: "20px", color: "#b2b2b2" }}
      >
        Copyright ©2022 All rights reserved
      </div>
    </footer>
  );
}

export default Footer1
