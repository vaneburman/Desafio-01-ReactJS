import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MobileStepper, Paper, Typography, Button, Container }from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow:"0 5px 7px 0 rgba(0, 0, 0, 0.15)",
    marginTop:30,
    width: '50rem',
    height: '28rem'
  },
  img: {
      marginTop: '1rem',
    width: '100%',
    height: '75%',
    minWidth: '40rem',
    overflow: 'hidden',
    objectFit: 'cover',
    objectPosition: 'center center'
  },
}));

const Slider = ({productos}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState([])
  const maxSteps = steps.length;

  useEffect(() => {
      console.log('initial', steps)
      const sliceProd = productos.slice(-4)
      console.log('sliceprod', sliceProd)
      setSteps(sliceProd)
  })

  console.log(steps)
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
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
  );
}

export default Slider