import React from 'react'
import './SectionService1.css'
const Section1 = () => {
  const Services1 = [
    {
      id: 1,
      icon: 'far fa-gem diamond',
      heading:
        'Engineering, Procurement, & Construction Management (EPCM) Contracts',
      content:
        'For familiar or reoccurring projects with which you prefer to keep your hand on the rudder, put Zicad Integrated Engineering services to work.  We can work alongside your resources to help steer your project towards success while you rely on the proven procedures and processes you are accustomed to.',
    },
    {
      id: 2,
      icon: 'fas fa-chart-bar',
      heading: 'Engineering, Procurement, & Construction (EPC) Contracts',
      content:
        'For projects that may lie outside of your comfort sphere, let Zicad Integrated Engineering services assume single-point accountability from start to finish.  We can offer a turnkey product/service guarantee with the security of a comprehensive project estimate.  Let us reduce your administrative burden so you can focus your resources elsewhere.  Our strategic alliances can help shorten timelines, reduce costs, and keep processes and documentation lean by tailoring each need to specific project demands.',
    },
  ]
  return (
    <div className='container Section1'>
      <div className='section-headings'>
        <h1 className='Section1-heading'>
          ....At Zicad Integrated Engineering services
        </h1>
        <p className='Section1-content'>
          We undertake both EPCM and EPC contracts which are further described
          below:
        </p>
      </div>
      <div className='Section1-Services'>
        <div className='serviced-Items'>
          <div className='row11'>
            {Services1.map((item) => {
              return (
                // <div key={item.id} className="col-md-3 secrviceSection-column">
                <div key={item.id} className='contracts__section'>
                  <i className={item.icon}></i>
                  <h3 className='serviceSection-heading'>{item.heading}</h3>
                  <p className='serviceSection-content'>{item.content}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Section1
