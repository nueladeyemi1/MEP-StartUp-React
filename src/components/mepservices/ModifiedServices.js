import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from './SectionProps'
import SectionHeader from './SectionHeader'
import { serviceContents } from './ServicesContent'
import Image from './Image'
import './featureTiles.css'
import { useState } from 'react'
import Tabs from '../ServiceTabs'
import plus from '../img/plus.png'
import minus from '../img/minus.png'

// import { contentList } from '../ServiceTabContents'
import "../servicetabs.css";

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}
const ModifiedServices = ({
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

  const [toggleState, setToggleState] = useState(
    serviceContents[0].mechanical[0].id
  );

  const toggleTab = (index) => {
    if (toggleState === index){
      setToggleState();
    } else {
      setToggleState(index)
    }
  };

  const [arrayList, setArrayList] = useState([])

  const theArrayList = function (index) {
    console.log(index)
    
      serviceContents.map((serv)=> {
       setArrayList(serv.serviceList1[index])
      })
      // console.log(index, serviceContents.serviceList1)
  
  }

  const outerClasses = classNames(
    'tiles-wrap',
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  )

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  )

  const sectionHeader = {
    title: 'About Zicad Integrated',
    paragraph: `We are a multi-disciplinary engineering firm that provides innovative solutions for complex engineering challenges. We use in-house project management tools, CAD and BIM software, and quality control guidelines to ensure successful completion of projects on time and within budget. Our goal is to create and maintain structures that make our clients successful.`,
  }

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <h4>Zicad Services</h4>
        <div className={tilesClasses}>
          {serviceContents.map((content) => {
            return (
              <div
                key={content.id}
                className="tiles-item reveal-from-bottom"
                data-reveal-delay={content.serviceDelay}
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <img
                        src={content.serviceIcon}
                        alt="Features tile icon 01"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <div style={{paddingBottom: '1.5rem'}} className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">{content.serviceTitle}</h4>
                    <p className="m-0 text-sm text__justify">
                      {content.serviceText}
                    </p>
                  </div>
                  {content.mechanical.map(
                    ({ id, title, serviceListContent }) => {
                      return (
                        <div key={id} className="container2">
                          <div className="bloc-tabs">
                            <button
                              style={{
                                width: "100%",
                                padding: "8px 0",
                                textAlign: "left",
                              }}
                              className={
                                toggleState === id ? "tabs active-tabs" : "tabs"
                              }
                              onClick={() => toggleTab(id)}
                            >
                              <span
                                style={{
                                  paddingLeft: "1rem",
                                  paddingRight: "0.5rem",
                                }}
                              >
                                {toggleState === id ? (
                                  <img src={minus} width="18px" />
                                ) : (
                                  <img src={plus} width="18px" />
                                )}
                              </span>
                              <span style={{ textAlign: "left" }}>{title}</span>
                            </button>
                          </div>

                          <div className="content-tabs">
                            <div
                              className={
                                toggleState === id
                                  ? "content1  active-content"
                                  : "content1"
                              }
                            >
                              <h4 style={{ textAlign: "left" }}>{title}</h4>
                              <hr />
                              <ul>
                                {serviceListContent.map((list, index) => {
                                  return (
                                    <li
                                      style={{ textAlign: "left" }}
                                      key={index}
                                    >
                                      {list}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

ModifiedServices.propTypes = propTypes
ModifiedServices.defaultProps = defaultProps

export default ModifiedServices
