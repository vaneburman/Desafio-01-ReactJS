import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MobileStepper, Paper, Typography, Button, Container }from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Loading from '../Loading';


const useStyles = makeStyles((theme) => ({
  root: {
     flexGrow: 1,
     marginTop:30,
     width: '50rem',
     height: '28rem',
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
    height: '75%',
    minWidth: '40rem',
    overflow: 'hidden',
    objectFit: 'cover',
    objectPosition: 'center center',
    [theme.breakpoints.down('md')]: {      
      height: '60%',  
      minWidth: '15rem',
      width: '100%'  
    },
    
  },
}));

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
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  
  return (
    <>
      {(steps.length!==0) ? (
      <Container className={classes.root}>
          <Typography component="h2" variant="h6" noWrap align='center' > Últimos Ingresos </Typography>
        <img
          className={classes.img}
          src={steps[activeStep].pictureURL}
          alt={steps[activeStep].title}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
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