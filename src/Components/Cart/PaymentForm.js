import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  
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
          label="Nombre del titular de la tarjeta" 
          fullWidth 
          autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cardNumber"
            label="Número de Tarjeta de crédito/débito"
            helperText="Complete con el nombre tal como figura en su tarjeta"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Fecha Vencimiento" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Código de seguridad de 3 dígitos"
            type="password"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Recordar método de pago"
          />
        </Grid>
      </Grid>
    </>
  );
}