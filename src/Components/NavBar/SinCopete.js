import React from 'react';
import { Typography} from '@material-ui/core';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none'
    },
    text:{
        color: '#34A512', 
        filter: 'drop-shadow(3px 0px 0px #E8E8E8)',
        marginRight: '2rem', 
        fontWeight: 500, 
        fontSize: '2rem',
        fontFamily: `'Barriecito', cursive`
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
