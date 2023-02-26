import React from "react";
import classNames from "classnames";
import Footer1 from "../components/footer1";

import { SectionTilesProps } from "../components/mepservices/SectionProps";
// import { SectionTilesProps } from './SectionProps'
import SectionHeader from "../components/mepservices/SectionHeader";
// import SectionHeader from './SectionHeader'
// import { serviceContents } from './ServicesContent'
// import Image from './Image'
import "../components/mepservices/featureTiles.css";
// import './featureTiles.css'

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const About = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "tiles-wrap",
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "About Zicad Integrated",
    paragraph: `We are a multi-disciplinary engineering firm that provides innovative solutions for complex engineering challenges. We use in-house project management tools, CAD and BIM software, and quality control guidelines to ensure successful completion of projects on time and within budget. Our goal is to create and maintain structures that make our clients successful.`,
  };

  const sectionHeader2 = {
    title: "Our Quality Policy",
    paragraph: `Our aim is to provide reliable and top-notch consultancy services in the construction industry that support the organization's strategic goals and satisfy the requirements of our stakeholders. We will achieve this by implementing and continuously improving our Quality Management System, which fully adheres to ISO 9001:2015 standards, engaging actively with our customers, employing highly skilled and committed personnel, utilizing cutting-edge technology, and complying with all relevant legal and regulatory requirements. Our Quality Policy serves as the foundation for establishing and assessing our quality objectives.`,
  };

  return (
    <>
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
          </div>
          <div style={{ marginTop: "10rem" }} className={innerClasses}>
            <SectionHeader data={sectionHeader2} className="center-content" />
          </div>
        </div>

        {/* <button className='btn' style={{backgroundColor: 'blue', color: 'white'}}>Zicad Profile</button> */}
      </section>
      <div
        style={{
          display: "block",
          justifyContent: "center",
          textAlign: "center",
          margin: "2.5rem 2.5rem",
        }}
      >
        Download our company's profile
        <div>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100px"
              height="100px"
              viewBox="0 0 1000 1000"
              color="red"
            >
              <path
                id="Imported Path"
                fill="none"
                stroke="black"
                stroke-width="1"
                d="M 854.80,399.30
           C 826.40,323.90 753.70,270.30 668.40,270.30
             648.80,270.30 629.80,273.10 611.90,278.40
             563.30,200.00 476.50,147.80 377.50,147.80
             227.30,147.80 105.10,268.00 101.90,417.40
             47.00,449.20 10.00,508.70 10.00,576.60
             10.00,678.00 92.30,760.30 193.80,760.30
             193.80,760.30 331.60,760.30 331.60,760.30
             331.60,760.30 280.50,699.00 280.50,699.00
             280.50,699.00 193.60,699.00 193.60,699.00
             126.10,699.00 71.20,644.20 71.20,576.50
             71.20,518.50 111.50,469.90 165.70,457.20
             163.90,446.20 163.00,434.90 163.00,423.40
             163.00,305.00 259.00,209.00 377.40,209.00
             474.20,209.00 556.10,273.20 582.60,361.40
             606.20,342.70 635.90,331.50 668.30,331.50
             739.20,331.50 797.70,385.10 805.30,454.00
             805.30,454.00 806.20,454.00 806.20,454.00
             873.70,454.00 928.60,508.80 928.60,576.50
             928.60,644.00 873.80,699.00 806.20,699.00
             806.20,699.00 719.30,699.00 719.30,699.00
             719.30,699.00 668.20,760.30 668.20,760.30
             668.20,760.30 806.00,760.30 806.00,760.30
             907.40,760.30 989.80,677.80 989.80,576.50
             990.00,491.90 932.70,420.60 854.80,399.30 Z
           M 561.30,423.40
           C 561.30,423.40 438.80,423.40 438.80,423.40
             438.80,423.40 438.80,668.40 438.80,668.40
             438.80,668.40 346.90,668.40 346.90,668.40
             346.90,668.40 500.00,852.20 500.00,852.20
             500.00,852.20 653.10,668.40 653.10,668.40
             653.10,668.40 561.30,668.40 561.30,668.40
             561.30,668.40 561.30,423.40 561.30,423.40 Z"
              />
            </svg>
          </a>
        </div>
      </div>

      <section>
        <Footer1 />
      </section>
    </>
  );
};

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;
