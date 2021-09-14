import {useState, useCallback} from 'react';
import { Typography, Grid, TextField  } from '@material-ui/core';


export default function PaymentForm({handleError}) {
  const [cardName, setCardName] = useState("");
  const [cardNumber,setCardNumber] = useState();
  const [expDate, setExpDate] = useState();
  const [cvv, setCvv] = useState();
  const [confirm, setConfirm] = useState(false);

  const saveCardName = (event) => {
    setCardName(event.target.value)
}
  const saveCardNumber = (event) => {
    setCardNumber(event.target.value)
  }
  
  const saveExpDate = (event) => {
    setExpDate(event.target.value)
  }

  const saveCvv = (event) => {
    setCvv(event.target.value)
  }



  const validacion = () => {
    if(cardName.trim().length && cardNumber.toString().trim().length && expDate.toString().trim().length && cvv.trim().length){
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

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Método de Pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField 
          required 
          id="cardName"
          name='cardName'
          label="Nombre del titular de la tarjeta" 
          helperText="Complete con el nombre tal como figura en su tarjeta"
          fullWidth 
          autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cardNumber"
            name='cardNumber'
            type="number"
            label="Número de Tarjeta de crédito/débito"
            helperText="Complete los 16 digitos de su tarjeta"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          required 
          id="expDate" 
          name='expDate'
          type="number"
          label="Fecha Vencimiento" 
          fullWidth 
          helperText="mmAA"
          autoComplete="cc-exp"
           />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name='cvv'
            label="CVV"
            helperText="Código de seguridad de 3 dígitos"
            type="password"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>

        
      </Grid>
    </>
  );
}