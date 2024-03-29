import React from 'react'
import Marquee from 'react-fast-marquee'
import ashrea from '../components/img/regulator/ASHRAE_Logo.png'
import nfpa from '../components/img/regulator/NFPA_logo.png'
import fidic from '../components/img/regulator/FIDIC.png'
import acen from '../components/img/regulator/acen.png'
import icc from '../components/img/regulator/icc.jpg'
import bsi from '../components/img/regulator/BSI.jpg'
import smaccna from '../components/img/regulator/SMACCNA_logo.png'
import usgbcouncil from '../components/img/regulator/USGBCouncil_logo.png'
import './regulator.css'

const Regulator2 = () => {
  return (
    <>
      <div className='regulator'>
        <div className='title'>
          <h2>Regulation and Codes</h2>
        </div>
        <div>
          Zicad's services, culture, mode of operations and designs follow the
          Standard, Regulation and Codes of the below bodies
        </div>
        {/* <div style={{ width: "50%", display: "flex", justifyItems: "center" }}> */}
        <section className='regulator_flex'>
          <div className='image_wrapper'>
            <img src={ashrea} alt='ashrae' height='50px' />
          </div>
          <div className='image_wrapper'>
            <img src={nfpa} alt='NFPA' height='50px' />
          </div>
          <div className='image_wrapper'>
            <img src={fidic} alt='FIDIC' height='50px' />
          </div>
          <div className='image_wrapper'>
            <img src={acen} alt='ACEN' height='70px' />
          </div>
          <div className='image_wrapper'>
            <img src={icc} alt='ICC' height='50px' />
          </div>
          <div className='image_wrapper'>
            <img src={bsi} alt='bsi' height='80px' />
          </div>
          <div className='image_wrapper'>
            <img src={smaccna} alt='smaccna' width='80px' height='50px' />
          </div>
          <div className='image_wrapper'>
            <img src={usgbcouncil} alt='liy' width='60px' height='50px' />
          </div>
        </section>
        {/* </div> */}
      </div>
    </>
  )
}

export default Regulator2
