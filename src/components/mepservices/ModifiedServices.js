import React, { useState } from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from './SectionProps'
import { serviceContents } from './ServicesContent'
import './featureTiles.css'
import '../servicetabs.css'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'

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
  )

  const toggleTab = (index) => {
    if (toggleState === index) {
      setToggleState()
    } else {
      setToggleState(index)
    }
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

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  )

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <h4>Zicad Services</h4>
        <div className={tilesClasses}>
          {serviceContents.map((content) => {
            return (
              <div
                key={content.id}
                className='tiles-item reveal-from-bottom'
                data-reveal-delay={content.serviceDelay}
              >
                <div className='tiles-item-inner'>
                  <div className='features-tiles-item-header'>
                    <div className='features-tiles-item-image mb-16'>
                      <img
                        src={content.serviceIcon}
                        alt='Features tile icon 01'
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <div
                    style={{ paddingBottom: '1.5rem' }}
                    className='features-tiles-item-content'
                  >
                    <h4 className='mt-0 mb-8'>{content.serviceTitle}</h4>
                    <p className='m-0 text-sm text__justify'>
                      {content.serviceText}
                    </p>
                  </div>
                  {content.mechanical.map(
                    ({ id, title, serviceListContent }) => {
                      return (
                        <div key={id} className='container2'>
                          <div className='bloc-tabs'>
                            <button
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                padding: '8px 0',
                                textAlign: 'left',
                              }}
                              className={
                                toggleState === id ? 'tabs active-tabs' : 'tabs'
                              }
                              onClick={() => toggleTab(id)}
                            >
                              <span
                                style={{
                                  paddingLeft: '1rem',
                                  paddingRight: '0.5rem',
                                }}
                              >
                                {toggleState === id ? (
                                  // <img src={minus} width="18px" />
                                  <FaMinusCircle color='white' size={18} />
                                ) : (
                                  // <img src={plus} width='18px' />
                                  <FaPlusCircle size={18} />
                                )}
                              </span>
                              <span style={{ textAlign: 'left' }}>{title}</span>
                            </button>
                          </div>

                          <div className='content-tabs'>
                            <div
                              className={
                                toggleState === id
                                  ? 'content1  active-content'
                                  : 'content1'
                              }
                            >
                              <h4
                                style={{
                                  textAlign: 'left',
                                  color: 'hsl(223, 79%, 64%)',
                                }}
                              >
                                {title}
                              </h4>
                              <hr />
                              <ul>
                                {serviceListContent.map((list, index) => {
                                  return (
                                    <li
                                      style={{ textAlign: 'left' }}
                                      key={index}
                                    >
                                      {list}
                                    </li>
                                  )
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

ModifiedServices.propTypes = propTypes
ModifiedServices.defaultProps = defaultProps

export default ModifiedServices
