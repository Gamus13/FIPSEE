

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
import axios from '../../axios';

const   FormComponent4 = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const onSubmit = (data) => console.log(data);
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
  
      // Ajoutez les champs du formulaire à l'objet FormData
      formData.append('entreprise', data.entreprise);
      formData.append('site_internet', data.site_internet);
      formData.append('date_de_naissance', data.date_de_naissance);
      formData.append('lieu_de_residence', data.lieu_de_residence);
      formData.append('image', data.image[0]); // [0] pour obtenir le premier fichier sélectionné
      formData.append('nationalité', data.nationalité);
      formData.append('sexe', data.sexe);
      formData.append('profil', data.profil[0]); // [0] pour obtenir le premier fichier sélectionné
  
      // Envoyer la requête POST vers votre API
      const response = await axios.post('http://localhost:8000/api/infosUser', formData);
  
      // Traitez la réponse si nécessaire
      console.log(response.data);
    } catch (error) {
      // Gérez les erreurs de requête
      console.error(error);
    }
  };
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', backgroundColor: 'white' }}>
        <h1> Votre compte est incomplet pour l'instant - Terminez votre authentification </h1>
        <form onSubmit={handleSubmit(onSubmit)} >
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
                {...register("nationalité", { required: "la nationalité est requise." })}
                error={Boolean(errors.nationalité)}
                helperText={errors.nationalité?.message}
              />
            </Grid>
          </Grid>
        
  <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl error={Boolean(errors.sexe)}>
            <FormLabel component="legend">Sexe</FormLabel>
            <RadioGroup row aria-label="sexe" name="sexe">
              <FormControlLabel
                value="femme"
                control={<Radio {...register('sexe', { required: 'Choisir votre sexe' })} />}
                label="femme"
              />
              <FormControlLabel
                value="homme"
                control={<Radio {...register('sexe', { required: 'Choisir votre sexe' })} />}
                label="homme"
              />
            </RadioGroup>
            <FormHelperText style={{ color: '#d32f2f' }}>{errors.sexe?.message}</FormHelperText>
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
              Envoyer 
            </Button>
        </form>
      </div>
    </div>
    
  )
}
export default FormComponent4