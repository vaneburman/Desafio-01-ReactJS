import {useEffect} from 'react';
import Boton from '../Cart/Boton';
import { Container, Button, Grid } from '@material-ui/core';
import { TableContainer, Paper, TableCell, Table, TableHead, TableRow, TableBody, IconButton } from '@material-ui/core';
import useCart from '../../Context/useCart';
import useOC from '../../Context/useOC';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import OrdenContainer from '../Cart/OrdenContainer';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    tablecontainer:{
        width: '90%', 
    },
    link:{
        color: 'white',
        textDecoration: 'none'
    },
    button: {
        backgroundColor: '#34A512',
        margin: '0 2rem',
        [theme.breakpoints.down('sm')]: {
            margin:  theme.spacing(2),
            },
    },
    root: {
        flexGrow: 1,
        height: '100vh',
        justifyContent: 'center',
        padding: theme.spacing(0, 6, 0, 1) ,
        [theme.breakpoints.down('sm')]: {
            padding:  theme.spacing(0, 0, 0, 6),
            },
      },

        appBarSpacer: theme.mixins.toolbar
          
      }
))


export default function UserPage() {
    const { buyer } = useOC();
    const columns = ['Nombre', 'Email', 'Teléfono']
    const classes = useStyles()

    // useEffect(() => {
    //     totalCart()
    // }, [cart])

    if(Object.keys(buyer).length !== 0){
        return (
            <>
                <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.root}>
                        <Grid container justify = "center" align='center' spacing={8}> 
                            <Grid item xs={12} >
                                <TableContainer component={Paper} className={classes.tablecontainer}>
                                        <Table size="small" aria-label="a dense table" >
                                            <TableHead>
                                                <TableRow>
                                                    {columns.map(col => (<TableCell>{col}</TableCell>))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                    <TableRow key={buyer.id}>
                                                        <TableCell>{buyer.name}</TableCell>
                                                        <TableCell>{buyer.email}</TableCell>
                                                        <TableCell>{buyer.phone}</TableCell>
                                                    </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                        </Grid>
                    </Container>
                </>
        )
    
    } else {
        return (
            <>
                <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.root}>
                        <Grid container justify = "center" align='center' spacing={8}>   
                            <Grid item xs={12} >
                                <Typography variant='h6'> No se encontraron datos de usuario </Typography> 
                            </Grid>
                            <Grid item xs={12} >
                                <Link to='/' className={classes.link}>
                                    <Button variant="contained" color='primary' className={classes.button}>
                                        Volver al inicio 
                                        <AiOutlineHome />
                                    </Button>
                                </Link> 
                            </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
    
}
