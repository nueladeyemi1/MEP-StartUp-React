import React from "react";
import "./SectionService1.css";
const Section1 = () => {
  const Services1 = [
    {
      id: 1,
      icon: "far fa-gem diamond",
      heading: "Hit the ground running.",
      content:
        "We frontload the work from first contact, packing months of strategy into your initial appraisal and proposal.",
    },
    {
      id: 2,
      icon: "fas fa-chart-bar",
      heading: "Only the best in your corner.",
      content:
        "We frontload the work from first contact, packing months of strategy into your initial appraisal and proposal.",
    },
  ];
  return (
    <div className="container Section1">
      <div className="section-headings">
        <h1 className="Section1-heading">
          The thing that motivates me is a very common form of motivation. And
          that is, with other folk counting on me, it's so easy to be motivated.
        </h1>
        <p className="Section1-content">
          we work with business & provide solution to client with their business
          problem
        </p>
      </div>
      <div className="Section1-Services">
        <div className="serviced-Items">
          <div className="row">
            {Services1.map((item) => {
              return (
                <div key={item.id} className="col-md-3 secrviceSection-column">
                  <i className={item.icon}></i>
                  <h3 className="serviceSection-heading">{item.heading}</h3>
                  <p className="serviceSection-content">{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section1;
