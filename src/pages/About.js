import React from 'react'
import classNames from 'classnames'
import Footer1 from '../components/footer1'

import { SectionTilesProps } from '../components/mepservices/SectionProps'
// import { SectionTilesProps } from './SectionProps'
import SectionHeader from '../components/mepservices/SectionHeader'
// import SectionHeader from './SectionHeader'
// import { serviceContents } from './ServicesContent'
// import Image from './Image'
import '../components/mepservices/featureTiles.css'
// import './featureTiles.css'

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}
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

  const sectionHeader2 = {
    title: 'Our Quality Policy',
    paragraph: `Our aim is to provide reliable and top-notch consultancy services in the construction industry that support the organization's strategic goals and satisfy the requirements of our stakeholders. We will achieve this by implementing and continuously improving our Quality Management System, which fully adheres to ISO 9001:2015 standards, engaging actively with our customers, employing highly skilled and committed personnel, utilizing cutting-edge technology, and complying with all relevant legal and regulatory requirements. Our Quality Policy serves as the foundation for establishing and assessing our quality objectives.`,
  }

  return (
    <>
      <section {...props} className={outerClasses}>
        <div className='container'>
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className='center-content' />
          </div>
          <div style={{marginTop: '10rem'}} className={innerClasses}>
            <SectionHeader data={sectionHeader2} className='center-content' />
          </div>
        </div>
        
        {/* <button className='btn' style={{backgroundColor: 'blue', color: 'white'}}>Zicad Profile</button> */}
      </section>
      <div style={{display: 'block', justifyContent: 'center', textAlign: 'center', margin: '2.5rem 2.5rem'}}>
          Download our company's profile
          <div><a href=''><img src='../components/img/download-icon.svg' alt='company-profile'/></a></div>
        </div>

      <section>
        <Footer1 />
      </section>
      {/* <section style={{ position: 'absolute', bottom: '0', width: '100%' }}>
        <Footer1 />
      </section> */}
    </>
  )
}

About.propTypes = propTypes
About.defaultProps = defaultProps

export default About
