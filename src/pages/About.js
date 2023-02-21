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

  return (
    <>
      <section {...props} className={outerClasses}>
        <div className='container'>
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className='center-content' />
          </div>
        </div>
      </section>
      <section style={{ position: 'absolute', bottom: '0', width: '100%' }}>
        <Footer1 />
      </section>
    </>
  )
}

About.propTypes = propTypes
About.defaultProps = defaultProps

export default About
