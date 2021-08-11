import React from 'react';
import { Typography} from '@material-ui/core';
import { Link } from 'react-router-dom'

const SinCopete = () => 
    <Link exact to='/' style={{textDecoration: 'none'}}>
       <Typography variant='h5' style={{ color: '#DAF7A6', marginRight: '2rem', fontWeight: 700, fontSize: '1.5 rem' }}>
            Sin Copete
        </Typography>

    </Link>

export default SinCopete