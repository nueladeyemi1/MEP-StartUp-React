import React from 'react'
import Footer1 from '../components/footer1'
import Map from '../components/Map'
import Mapp from '../components/Mapdata'

//
// ========

const Contacts = function() {
  return (
    <>
      <h2>Company Contact Information</h2>
      <section
        style={{
          marginTop: '5rem',
          display: 'flex',
          // justifyContent: 'space-between',
        }}
      >
        <div>
          zicad Integrated Engineering services
          <div>Address: 11, agbaoku street, off awosika bus stop, opebi Lagos,
          Nigeria.</div>
          <div>Telephone: +2348-162-728-300 | +2348-053-454-579</div>
        <div>zicadintegrated@gmail.com</div>
        </div>
        <Mapp />
      </section>
      <form>
        <input type={Text} placeholder='Your Name'></input>
        <input type={Number} placeholder='Surname'></input>
        <input type={Number} placeholder='Your Email'></input>
        <button type='submit' onClick={()=> sendmail}>Send Message</button>
      </form>
      
      <section style={{ position: 'absolute', bottom: '0', width: '100%' }}>
        <Footer1 />
      </section>
    </>
  )
}

export default Contacts
