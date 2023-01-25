import Carousel from 'react-material-ui-carousel'
import { Typography } from '@mui/material'

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
      interval='5000' //duration after which changes slide
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
              position: 'absolute',
              height: '100%',
              maxHeight: '100%',
              minHeight: '100%',
              width: '100%',
              maxWidth: '100%',
              minWidth: '100%',
            }}
          />
          <Typography>
            <span
              align={'right'}
              style={{
                position: 'absolute',
                bottom: '50%',
                zIndex: '20',
                color: 'white',
              }}
            >
              <div style={{ textAlign: 'right' }}>
                <h1>{item.text}</h1>
              </div>
              <button
                align={'right'}
                className='btn'
                style={{
                  textAlign: 'left',
                  backgroundColor: '#2642af',
                  display: 'flex',
                  padding: '0.5rem 2.5rem',
                  color: 'white',
                }}
              >
                {item.buttonText}
              </button>
            </span>
          </Typography>
        </div>
      )
    case 'CONTENT':
      return <span></span>
    default:
      return <span></span>
  }
}
