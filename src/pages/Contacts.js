import React from 'react'
import Footer1 from '../components/footer1'
import Map from '../components/Map'
import Mapp from '../components/Mapdata'
import emailjs from 'emailjs-com'
import 'react-bootstrap'

//
// ========

const Contacts = function() {
  
  function sendEmail(e) {
    e.preventDefault();    //To prevent reload

    emailjs.sendForm('service_duv7ooh', 'template_6952ogo', e.target, 'GsOug08hfQqbgkERA')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <h2>Company Contact Information</h2>
      <section
      className='row11'
        // style={{
        //   marginTop: '5rem',
        //   display: 'grid',
        //   position: 'relative',
        //   padding: '50px 0'
          // justifyContent: 'space-between',
        // }}
      >
        <div className='col-md-4'>
          zicad Integrated Engineering services
          <div>Address: 11, agbaoku street, off awosika bus stop, opebi Lagos,
          Nigeria.</div>
          <div>Telephone: +2348-162-728-300 | +2348-053-454-579</div>
        <div>zicadintegrated@gmail.com</div>
        </div>
        
        <div>
      <Mapp />
      <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" required/>
      <label>Name</label>
      <input type="text" name="from_name" required/>
      <label>Email</label>
      <input type="email" name="from_email" required/>
      <label>Subject</label>
      <input type="text" name="subject" required/>
      <label>Message</label>
      <textarea name="html_message" />
      <input type="submit" value="Send" />
    </form>
    </div>
      </section>

      <section>
        <Footer1 />
      </section>
      
      {/* <section style={{ position: 'absolute', bottom: '0', width: '100%' }}>
        <Footer1 />
      </section> */}
    </>
  )
}

export default Contacts
