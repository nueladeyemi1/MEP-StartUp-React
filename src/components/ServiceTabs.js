import { useState } from 'react'
import './servicetabs.css'

function Tabs({ contentList }) {
  const [toggleState, setToggleState] = useState(contentList[0].id)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <>
      {contentList.map(({ id, mechanical }) => {
        return (
          <section
            style={{ display: 'flex', justifyContent: 'space-between' }}
            key={id}
          >
            {mechanical.map(({ id, title, serviceListContent }) => {
              return (
                <div key={id} className='container'>
                  <div className='bloc-tabs'>
                    <button
                      // style={{ display: 'flex', justifyContent: 'center' }}
                      className={
                        toggleState === id ? 'tabs active-tabs' : 'tabs'
                      }
                      onClick={() => toggleTab(id)}
                    >
                      {title}
                    </button>
                  </div>

                  <div className='content-tabs'>
                    <div
                      className={
                        toggleState === id
                          ? 'content  active-content'
                          : 'content'
                      }
                    >
                      <h2>{title}</h2>
                      <hr />
                      <ul>
                        {serviceListContent.map((list, index) => {
                          return <li key={index}>{list}</li>
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </section>
        )
      })}
    </>
  )
}

export default Tabs
