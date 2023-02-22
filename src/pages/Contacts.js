import React from 'react'
import Footer1 from '../components/footer1'
import Map from '../components/Map'

// const fetchMap = async function() {
//   try {
//     const res = await fetch(
//       'https://www.openstreetmap.org/#map=18/6.59560/3.35755'
//     )
//     const data = await res.json
//     console.log(data)
//   } catch (error) {
//     console.log(error.message)
//   }
// }
// fetchMap()

const Contacts = function() {
  return (
    <>
      <h2>Company Contact Information</h2>
      <section
        style={{
          marginTop: '5rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div>
          Address: 11, agbaoku street, off awosika bus stop, opebi Lagos,
          Nigeria.
        </div>
        <div>Telephone: +2348-162-728-300 | +2348-053-454-579</div>
        <div>zicadintegrated@gmail.com</div>
      </section>
      <Map />
      <section style={{ position: 'absolute', bottom: '0', width: '100%' }}>
        <Footer1 />
      </section>
    </>
  )
}

export default Contacts
