

import React, { useState,useEffect  } from 'react';
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
import axios from '../../axios';
import { useForm } from "react-hook-form";

const   FormComponent2 = () => {
  const { register,  watch, formState: { errors } } = useForm();
  // const onSubmit = (data) => console.log(data);
  // ici je cree un state qui va contenir les data de l'utilisateur actuellement connecter
  const [infosUser, setInfosUser] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchinfosUser = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/infosUser'); // Remplacez '1' par l'ID de l'utilisateur souhaité
        setInfosUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchinfosUser();
  }, []);
 
  useEffect(() => {
    // ajout de la prise en charge de l'image initial
    try {
      const image = `http://localhost:8000/storage/InfosUser/image/${infosUser[0]?.image}`;
      setSelectedImage({
        binary: undefined,
        source: image
      });
    } catch (error) {
      console.error(error);
    }

    // preremplissage du state de control des input
    try {
      setFormData({
        date_de_naissance: infosUser[0]?.date_de_naissance,
        entreprise: infosUser[0]?.entreprise,
        lieu_de_residence: infosUser[0]?.lieu_de_residence,
        nationalité: infosUser[0]?.nationalité,
        site_internet: infosUser[0]?.site_internet,
        sexe: infosUser[0]?.sexe,
      })
    } catch (error) {
      
    }
  }, [infosUser]);
 
 console.log("Info user :", infosUser);

  const hamdleChamge = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormData(
      {
        ...formData,
        [fieldName]: fieldValue
      }
    );
  };

  const handleLoginSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Ajoutez les champs du formulaire à l'objet FormData
      formData.set('user_id', infosUser[0]?.id);
      formData.append('entreprise', data.entreprise);
      formData.append('site_internet', data.site_internet);
      formData.append('date_de_naissance', data.date_de_naissance);
      formData.append('lieu_de_residence', data.lieu_de_residence);
      selectedImage.binary ? formData.append('image', selectedImage.binary) : null;  // [0] pour obtenir le premier fichier sélectionné
      formData.append('nationalité', data.nationalité);
      formData.append('sexe', data.sexe);

      // Envoyer la requête POST vers votre API
      const response = await axios.post(`http://localhost:8000/api/infosUser/${infosUser[0]?.id}`, formData);

      // Traitez la réponse si nécessaire
      console.log(response.data);
    } catch (error) {
      // Gérez les erreurs de requête
      console.log("submitance error :", error);
    }
  };

  // useEffect(() => {
  //   if (infosUser[0]) {
  //     setSelectedImage(infosUser[0].image);
  //   }
  // }, [selectedImage]);


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage({
      binary: file,
      source: URL.createObjectURL(file)
    });
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
  };
  // console.log(errors);

  console.log("form data: ", formData);

  return (
    <div className="App__form">
      <h1> Vos Informations - Liers au donnees personnel </h1>
      
        <form onSubmit={() => handleLoginSubmit(formData)}>
         
            <Grid container spacing={2}>
                
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    name="entreprise"
                    type="text"
                    label="entreprise"
                    value={formData?.entreprise}
                    variant="outlined"
                    fullWidth
                    {...register('entreprise', { required: 'entreprise est requis.' })}
                    error={Boolean(errors.entreprise)}
                    helperText={errors.entreprise?.message}
                    onChange={hamdleChamge}
                  />
                </Grid>
                
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="site internet"
                    value={formData?.site_internet}
                    type="text"
                    variant="outlined"
                    fullWidth
                    name="site_internet"
                    {...register('site_internet', { required: 'site internet est requis.' })}
                    error={Boolean(errors.site_internet)}
                    helperText={errors.site_internet?.message}
                    onChange={hamdleChamge}
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
                    value={formData?.date_de_naissance}
                    
                    name="date_de_naissance"
                    {...register("date_de_naissance", { required: "la date de naissance est requise." })}
                    error={Boolean(errors.date_de_naissance)}
                    helperText={errors.date_de_naissance?.message}
                    onChange={hamdleChamge}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="lieu de residence"
                    value={formData?.lieu_de_residence}
                    type="text"
                    variant="outlined"
                    fullWidth
                    name="lieu_de_residence"
                    {...register("lieu_de_residence", { required: "le lieu de residence est requis." })}
                    error={Boolean(errors.lieu_de_residence)}
                    helperText={errors.lieu_de_residence?.message}
                    onChange={hamdleChamge}
                  />
                </Grid>
              </Grid> 
              <Grid container spacing={2}>
                
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="nationalité"
                    value={formData?.nationalité}
                    variant="outlined"
                    type="text"
                    fullWidth
                    name="nationalité"
                    {...register("nationalité", { required: "la nationalité est requise." })}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                    onChange={hamdleChamge}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl error={Boolean(errors.gender)}>
                        {/* value={formData?.sexe} */}
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
                        // value={formData?.image}
                        {...register('profil', { required: "votre image de profil est requise." })}
                        error={Boolean(errors.profil)}
                        helperText={errors.profil?.message}
                        onChange={handleImageChange}
                      />
                      <Grid item xs={6}>
                      {selectedImage && (
                        <div>
                          <img src={selectedImage.source} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px',marginTop: '5px',  }} />
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