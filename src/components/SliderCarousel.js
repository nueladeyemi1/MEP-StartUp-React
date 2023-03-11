import Carousel from 'react-material-ui-carousel'
import { useNavigate } from 'react-router-dom'
// import { Typography } from '@mui/material'
import './slidertext.css'

export function Slider(props) {
  const {
    sliderItems,
    sliderType,
    sliderAutoPlay,
    sliderStopOnHover,
    sliderNavStyle,
    sliderNavigatorsShow, //show hide nav button
    slideNavigatorsHide,
    sliderIndicators, //bottom indicator
    sliderIndicatorsStyle,
    sliderActiveIndicator,
  } = props

  return (
    <Carousel
      animation={sliderType ? sliderType : 'slide'} //"fade" | "slide"
      autoPlay={sliderAutoPlay} // ? sliderAutoPlay : true} //{false}
      stopAutoPlayOnHover={sliderStopOnHover} //{sliderStopOnHover ? sliderStopOnHover : false}
      // timeout="300" //kind of blank time
      interval='7500' //duration after which changes slide
      reverseEdgeAnimationDirection={false}
      navButtonsAlwaysVisible={
        sliderNavigatorsShow ? sliderNavigatorsShow : false
      }
      navButtonsAlwaysInvisible={
        slideNavigatorsHide ? slideNavigatorsHide : false
      }
      // cycleNavigation={true}slideNavigatorsHide
      // fullHeightHover={true}
      navButtonsProps={{
        style: sliderNavStyle && sliderNavStyle,
      }}
      // NextIcon={<RandomIcon />}
      // PrevIcon={<RandomIcon />}
      indicators={sliderIndicators ? sliderIndicators : false}
      indicatorIconButtonProps={{
        style: sliderIndicatorsStyle
          ? sliderIndicatorsStyle
          : {
              marginTop: '0px',
            },
      }}
      activeIndicatorIconButtonProps={{
        style: sliderActiveIndicator && sliderActiveIndicator,
      }}
    >
      {sliderItems.map((item, i) => (
        <Item
          key={i}
          item={item}
          type='IMAGE_WITH_CONTENT'
          className={props.className}
        />
      ))}
    </Carousel>
  )
}
function Item(props) {
  const navigate = useNavigate()
  const { item, className } = props
  switch (props.type) {
    case 'IMAGE':
      return <div></div>
    case 'IMAGE_WITH_CONTENT':
      return (
        <div className={className}>
          <img
            src={item.src}
            alt={item?.name}
            style={{
              backgroundSize: 'cover',
              position: 'absolute',
              backgroundPosition: 'left',
              // height: '100%',
              // maxHeight: '100%',
              // minHeight: '100%',
              // width: '100%',
              // maxWidth: '100%',
              // minWidth: '100%',
            }}
          />

          <div className='slider__text'>
            <div
              style={{
                color: `${item.color}`,
              }}
            >
              <h1
                style={{
                  fontFamily: 'initial',
                  letterSpacing: '0.2rem',
                }}
              >
                {item.text}
              </h1>
              {item.textContent}
            </div>

            <button
              className='btn'
              style={{
                marginTop: '25px',
                fontSize: '12px',
                fontFamily: 'calibri',
                letterSpacing: '1.5px',
                backgroundColor: '#2642af',
                padding: '0.5rem 2rem',
                color: 'white',
              }}
              onClick={() => navigate(`/${item.links}`)}
            >
              {item.buttonText}
            </button>
          </div>
        </div>
      )
    case 'CONTENT':
      return <span></span>
    default:
      return <span></span>
  }
}
