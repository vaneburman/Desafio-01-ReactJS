import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    color: {
        color: '#C73966',
    }
  }));

export default function Loading() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress className={classes.color} size={'5rem'} thickness={2.5}/>
        </div>
    )
}
