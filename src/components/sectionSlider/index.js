import React, { useEffect, useState } from 'react'
import {
  Paper,
  makeStyles,
  Typography,
  IconButton,
  Box,
} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { ArrowLeft, ArrowRight } from '@material-ui/icons'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const options = [
  {
    image: '/assets/images/slide1.jpg',
    title: 'Enerji',
    subTitle: '1 Enerji ihtiyacınız için doğru çözüm ortağı',
  },
  {
    image: '/assets/images/slide2.jpg',
    title: 'Enerji',
    subTitle: '2 Gunes Enerjisi ihtiyacınız için doğru çözüm ortağı',
  },
  {
    image: '/assets/images/slide2.jpg',
    title: 'Enerji',
    subTitle: '3 Gunes Enerjisi ihtiyacınız için doğru çözüm ortağı',
  },
  {
    image: '/assets/images/slide2.jpg',
    title: 'Enerji',
    subTitle: '4 Gunes Enerjisi ihtiyacınız için doğru çözüm ortağı',
  },
]

const useStyles = makeStyles((theme) => ({
  swiper: {
    width: '100%',
    position: 'relative',
  },
  img: {
    width: '100%',
    height: 'auto',
    minHeight: 400,
    objectFit: 'cover',
    display: 'block',
  },
  imgOverlay: {
    position: 'absolute',
    left: 0,
    padding: theme.spacing(10),
    backgroundColor: 'rgba(0,0,0,0.5)',
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    height: ' 100%',
    width: '100%',
    zIndex: 100,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleContainer: {
    height: '100%',
    display: 'flex',
  },
  text: {
    color: '#fff',
  },
  leftArrow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  rightArrow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: '#fff',
  },
}))

const SectionSlider = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  const downStepChange = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    } else {
      setActiveStep(options.length - 1)
    }
  }

  const upStepChange = () => {
    if (activeStep !== options.length - 1) {
      setActiveStep(activeStep + 1)
    } else {
      setActiveStep(0)
    }
  }

  return (
    <Box position='relative'>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {options.map((item, index) => (
          <Paper key={index} className={classes.swiper}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={item.image} alt={item.title} />
            ) : null}
            <Box className={classes.imgOverlay}>
              <Typography variant='h3' className={classes.text}>
                {item.title}
              </Typography>
              <Typography variant='h5' className={classes.text}>
                {item.subTitle}
              </Typography>
            </Box>
          </Paper>
        ))}
      </AutoPlaySwipeableViews>
      <Box className={classes.leftArrow}>
        <IconButton
          size='small'
          aria-label='delete'
          onClick={downStepChange}
          className={classes.iconButton}
        >
          <ArrowLeft fontSize='large' />
        </IconButton>
      </Box>
      <Box className={classes.rightArrow}>
        <IconButton
          size='small'
          aria-label='delete'
          onClick={upStepChange}
          className={classes.iconButton}
        >
          <ArrowRight fontSize='large' />
        </IconButton>
      </Box>
    </Box>
  )
}

export default SectionSlider
