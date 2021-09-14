import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MobileStepper, Typography, Button, Container }from '@material-ui/core';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import Loading from '../Loading';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Link } from 'react-router-dom';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
     flexGrow: 1,
     marginTop:20,
     width: '100%',
     height: '30rem',
     justifyContent: "center",
     alignItems: "center",
     [theme.breakpoints.down('md')]: {
       minWidth: '20rem',
       width: '80%',
       height: '15rem',
     },
  },

  img: {
    marginTop: '1rem',
    width: '100%',
    height: '25rem',
    minWidth: '40rem',
    overflow: 'hidden',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    [theme.breakpoints.down('md')]: {      
      height: '60%',  
      minWidth: '15rem',
      width: '100%'  
    },
    
  },
  link: {
    textDecoration: 'none',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },

  flechas: {
  position: 'absolute',
	top: 0,
	zIndex: 20,
	width: '100%',
	height: '100%',
	pointerEvents: 'none'
  },
  flechaback: {
    pointerEvents: 'all',
	  background: 'none',
	  border: 'none',
	  cursor: 'pointer',
	  outline: 'none',
	  width: '50px',
	  height: '100%',
	  position: 'absolute',
	  transition: '.3s ease all',
    filter: 'drop-shadow(2px 0px 0px #fff)',
    left: 0
  },
  flechaforw: {
    pointerEvents: 'all',
	  background: 'none',
	  border: 'none',
	  cursor: 'pointer',
	  outline: 'none',
	  width: '50px',
	  height: '100%',
	  position: 'absolute',
	  transition: '.3s ease all',
    filter: 'drop-shadow(-2px 0px 0px #fff)',
    right: 0
  }
}
));

const Slider = ({lista}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState([])
  const maxSteps = steps.length;

  
  useEffect(() => {
      let ultimosProd = lista.slice(-4)
      setSteps(ultimosProd)
  }, [])


  const handleNext = () => {
    if(activeStep < maxSteps - 1){
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
    
  };

  const handleBack = () => {
    if(activeStep > 0){
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
    
  };

  const handleStepChange = (steps) => {
    setActiveStep(steps);
  };

  
  return (
    <>
      {(steps.length!==0) ? (
      <Container className={classes.root}>
          <Typography component="h2" variant="h6" noWrap align='center' > 
          Últimos Ingresos 
          </Typography>
        <AutoPlaySwipeableViews
        axis='x'
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={2000}
      >
         {steps.map((step, index) => (
            <div key={step.label} >
              {Math.abs(activeStep - index) <= 2 ? (
                    <img className={classes.img} src={step.pictureURL} alt={step.title} />
                    ) : null}
                <div className={classes.flechas}>
                  <Button size='large' onClick={handleBack} disabled={activeStep === 0} className={classes.flechaback}>
                      <ArrowBackIosOutlinedIcon style={{ fontSize: 40 }}/>
                  </Button>
                  <Button size='large' onClick={handleNext} disabled={activeStep === maxSteps - 1} className={classes.flechaforw}>
                      <ArrowForwardIosOutlinedIcon style={{ fontSize: 40 }}/>
                  </Button>
                </div>
            </div>
        ))}
        </AutoPlaySwipeableViews>

      </Container>
      ) 
      :
      (
        <Loading />
      )}

    </>
  );
}

export default Slider