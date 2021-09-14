import React from 'react';
import { Typography} from '@material-ui/core';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none'
    },
    text:{
        color: '#DAF7A6', 
        marginRight: '2rem', 
        fontWeight: 700, 
        fontSize: '1.5 rem'
    }
}))

const SinCopete = () => {
const classes = useStyles();

return(
    <Link exact to='/' className={classes.link}>
        <Typography variant='h5' className={classes.text}>
            Sin Copete
        </Typography>
    </Link>
)
}
    

export default SinCopete
