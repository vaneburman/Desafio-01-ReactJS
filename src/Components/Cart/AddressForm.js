import {useState, useEffect, useCallback} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { firestore } from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useOC from '../../Context/useOC';

const useStyles = makeStyles((theme) => ({
button: {
  marginTop: theme.spacing(3),
  marginLeft: theme.spacing(1),
},
}))

 const AddressForm = ({handleError}) => {
  const classes = useStyles();
  const { newBuyer } = useOC();
  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [email,setEmail] = useState("")
  const [confirm, setConfirm] = useState(false)

  const saveName = (event) => {
      setName(event.target.value)
  }

  const savePhone = (event) => {
      setPhone(event.target.value)
  }

  const saveEmail = (event) => {
      setEmail(event.target.value)
  }

  const validacion = () => {
    if(name.trim().length && phone.trim().length && email.trim().length){
        return true
    }else {
        return false
    }
}
  const confirmar = useCallback((event) => {
      event.preventDefault()
      if(validacion()){
          handleError(false);
          setConfirm(true)
      }else{
          handleError(true)
      }
  }); 
  useEffect(() => {
      if(confirm){
        firestore.collection('buyers').add({
          name: name,
          email: email,
          phone: phone
        })
        .then((docRef)=>{
          newBuyer(docRef.id)
        }
        )
      }
        
    }, [confirm]
  )

  return (
    <form>
      <Typography variant="h6" gutterBottom>
        Gestión de Compra
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id='Name'
            name='Name'
            label='Nombre Completo'
            fullWidth
            autoComplete='Name'
            onChange={saveName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='email'
            name='email'
            label='Email de Contacto'
            type='email'
            fullWidth
            autoComplete='email'
            onChange={saveEmail}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='Phone'
            name='Phone'
            label='Teléfono'
            type='number'
            fullWidth
            autoComplete='Phone'
            onChange={savePhone}
          />
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color='secondary' name='saveAddress' value='yes' />}
            label='Guardar la información para futuras compras'
          />
        </Grid>
      </Grid>
      <Button onClick={confirmar} className={classes.button} variant="contained" color='primary'>
        Confirmar datos
      </Button>
      
      </Grid>
    </form>
  );
}


export default AddressForm;