

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@material-ui/core/Grid';
// import './App.css';
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
} from '@mui/material';
import { useForm } from "react-hook-form";

const   FormComponent2 = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
  };
  // console.log(errors);

  return (
    <div className="App__form">
      <h1> Vos Informations - Liers au donnees personnel </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
       <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              name="entreprise"
              type="text"
              label="entreprise"
              variant="outlined"
              fullWidth
              {...register('entreprise', { required: 'entreprise est requis.' })}
              error={Boolean(errors.entreprise)}
              helperText={errors.entreprise?.message} 
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="site internet"
              type="text"
              variant="outlined"
              fullWidth
              name="site_internet"
              {...register('site_internet', { required: 'site internet est requis.' })}
              error={Boolean(errors.site_internet)}
              helperText={errors.site_internet?.message}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              type="date"
              variant="outlined"
              fullWidth
              name="date_de_naissance"
              {...register("date_de_naissance", { required: "la date de naissance est requise." })}
              error={Boolean(errors.date_de_naissance)}
              helperText={errors.date_de_naissance?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="lieu de residence"
              type="text"
              variant="outlined"
              fullWidth
              name="lieu_de_residence"
              {...register("lieu_de_residence", { required: "le lieu de residence est requis." })}
              error={Boolean(errors.lieu_de_residence)}
              helperText={errors.lieu_de_residence?.message}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              
              variant="outlined"
              type="file"
              fullWidth
              name="image"
              {...register("image", { required: "carte national d'identite est requis." })}
              error={Boolean(errors.image)}
              helperText={errors.image?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="nationalité"
              variant="outlined"
              type="text"
              fullWidth
              name="nationalité"
              {...register("email", { required: "la nationalité est requise." })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
          </Grid>
        </Grid>
        {/* <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          fullWidth
          name="email"
          {...register("email", { required: "E-mail Address is required." })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        /> */}
{/* Radio button */}
        {/* <FormControl error={Boolean(errors.gender)} >
          <FormLabel component="legend"> Sexe</FormLabel>
          <RadioGroup row aria-label="gender" name="gender">
            <FormControlLabel 
              value="femme" 
              control={
                <Radio {...register("gender", { required: "Choose your gender" })} />
              } 
              label="femme"
             />
            <FormControlLabel 
              value="homme" 
              control={
                <Radio {...register("gender", { required: "Choose your gender" })} />
              } 
              label="homme  " 
              />
            
          </RadioGroup>
          <FormHelperText style={{color:'#d32f2f'}}>{errors.gender?.message}</FormHelperText>
        </FormControl>
        <div className="clearfix"></div> */}

<Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl error={Boolean(errors.gender)}>
          <FormLabel component="legend">Sexe</FormLabel>
          <RadioGroup row aria-label="gender" name="gender">
            <FormControlLabel
              value="femme"
              control={<Radio {...register('gender', { required: 'Choose your gender' })} />}
              label="femme"
            />
            <FormControlLabel
              value="homme"
              control={<Radio {...register('gender', { required: 'Choose your gender' })} />}
              label="homme"
            />
          </RadioGroup>
          <FormHelperText style={{ color: '#d32f2f' }}>{errors.gender?.message}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="file"
          fullWidth
          name="profil"
          {...register('profil', { required: "votre image de profil est requise." })}
          error={Boolean(errors.profil)}
          helperText={errors.profil?.message}
          onChange={handleImageChange}
        />
        <Grid item xs={6}>
        {selectedImage && (
          <div>
            <img src={selectedImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px',marginTop: '5px',  }} />
            <Button variant="contained" style={{ backgroundColor: 'red', color: 'white' }} onClick={handleImageRemove}>
              Supprimer
            </Button>
          </div>
        )}
      </Grid>
      </Grid>
      
    </Grid>
        
        <Button variant="contained" color="primary" type="submit" className="btns" style={{ position: 'relative', top: '11px', }}>
           Modifier 
          </Button>
      </form>
    </div>
  )
}
export default FormComponent2