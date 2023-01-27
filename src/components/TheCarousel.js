import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { Grid } from '@mui/material'
import { Slider } from './SliderCarousel'

import Slide__1 from '../components/img/Slide__1.jpg'
import Slide__2 from '../components/img/Slide__2.jpg'
import Slide__3 from '../components/img/Slide__3.jpg'
import Slide__4 from '../components/img/Slide__4.jpg'
import { Loader } from './Loader'
import { Button } from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    // marginTop: "20px",
    marginBottom: '15px',
  },
  imageSlider: {
    // width: "100%",
    // maxWidth: "200px",
    maxHeight: '450px',
    height: '450px',
    cursor: 'pointer',
  },
}))

export function Dashboard(params) {
  const classes = useStyles()
  const history = useNavigate()
  const path = useLocation()

  const [showSlider, setShowSlider] = useState(true)

  const [loading, setLoading] = useState(false)
  const banners = [
    {
      src: `${Slide__2}`,
      text: 'Creating Safe indoor Environment!',
      color: 'black',
      buttonText: 'SEE SERVICES',
      textContent: '',
      //   name: "Random Name #1",
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      src: `${Slide__1}`,
      text: 'Innovative Solutions!',
      color: 'black',
      buttonText: 'ABOUT ZICAD',
      textContent: '',
    },
    {
      src: `${Slide__3}`,
      text: 'High Quality service!',
      color: 'white',
      buttonText: 'CONTACT US',
      textContent:
        'Zicad Integrated Engineering services assume single-point accountability from start to finish.',
    },
    {
      src: `${Slide__4}`,
      text: 'TrustWorthy. Timely Delivery!',
      color: 'white',
      buttonText: 'VIEW PROJECTS',
      textContent: '',
    },
  ]

  return (
    <div>
      {showSlider ? (
        <>
          <div className={classes.sliderContainer}>
            <Slider
              className={classes.imageSlider}
              sliderItems={banners}
              sliderType='fade'
              sliderAutoPlay={true}
              sliderStopOnHover={false}
              slideNavigatorsHide={true}
              sliderIndicators
              sliderIndicatorsStyle={{
                padding: '10px',
              }}
            />
          </div>
        </>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <div>
              <Grid container style={{ paddingTop: '20px' }}>
                <Grid
                  item
                  md={3}
                  lg={3}
                  xl={3}
                  display={{ xs: 'none', sm: 'none' }}
                ></Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={9}
                  lg={9}
                  xl={9}
                  // display={{ xs: "flex", sm: "flex", md: "flex", lg: "flex" }}
                ></Grid>
              </Grid>
              <Grid></Grid>
            </div>
          )}
        </>
      )}
    </div>
  )
}