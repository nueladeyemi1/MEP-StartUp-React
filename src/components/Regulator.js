import React from "react";
import Marquee from "react-fast-marquee";

const Regulator = () => {
 
  return (
    <>
      <div className="regulator">
        <div className="title--regulator">
          <h1>Our Technology Partner</h1>
        </div>

        <div>
          <Marquee direction="right" speed={100} delay={5}>
            <div className="image_wrapper">
              <img src={""} alt="aaaaa" />
            </div>
            <div className="image_wrapper">
              <img src={""} alt="xcvx" />
            </div>
            <div className="image_wrapper">
              <img src={""} alt="vccx" />
            </div>
            <div className="image_wrapper">
              <img src={""} alt="vf" />
            </div>
            <div>
              <img src={""} alt="gfdhg" />
            </div>
            <div className="image_wrapper">
              <img src={""} alt="hjk" />
            </div>
            <div className="image_wrapper">
              <img src={""} alt="kuk" />
            </div>
            <div className="image_wrapper">
              <img src={""} alt="liy" />
            </div>
            <div className="image_wrapper">
              <img src={""} alt="kug" />
            </div>
            <div className="image_wrapper">
              <img src={""} alt="jryfj" />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Regulator;
