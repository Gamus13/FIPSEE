

import React, { useState, useEffect } from 'react';
import axios from '../../axios';

import './Formulaire3.css';

const FormComponent2 = () => {
    
  const [profil, setprofil] = useState(null);
  const [image, setimage] = useState(null);

  

  const handleDeleteprofil = () => {
    setprofil(null);
  };

  const handleDeleteimage = () => {
    setimage(null);
  };

   const [formData, setFormData] = useState({});
    const [infosUser, setInfosUser] = useState('');
    
    const [state, setState] = useState({
        sexe: '',
        nationalité: '',
        date_de_naissance: '',
        lieu_de_residence: '',
        entreprise: '',
        site_internet: '',
        image: null, // Champ pour l'image
        profil: null, // Champ pour l'image de la carte d'identité
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append('sexe', state.sexe);
        formData.append('nationalité', state.nationalité);
        formData.append('date_de_naissance', state.date_de_naissance);
        formData.append('lieu_de_residence', state.lieu_de_residence);
        formData.append('entreprise', state.entreprise);
        formData.append('site_internet', state.site_internet);
        formData.append('image', state.image); // Champ pour l'image
        formData.append('profil', state.profil); // Champ pour l'image de la carte d'identité
      
        try {
          const response = await axios.post(`http://localhost:8000/api/infosUser/${infosUser}`, formData);
          console.log('Données mises à jour avec succès:', response.data);
          console.log('Données envoyées:', formData);
        } catch (error) {
          console.error('Erreur lors de la mise à jour des données:', error);
        }
      };

      const handleprofilChange = (event) => {
        const file = event.target.files[0];
        setState((prevState) => ({
          ...prevState,
          profil: file,
        }));
      };
      
      const handleimageChange = (event) => {
        const file = event.target.files[0];
        setState((prevState) => ({
          ...prevState,
          image: file,
        }));
      };

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/infosUser');
            const { data } = response; // Destructuration des données
    
            setFormData(data[0]); // Mise à jour de l'état formData avec les données de l'API
            // console.log('Données récupérées avec succès:', data);
          } catch (error) {
            // console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
          }
        };
    
        fetchData();
      }, []);

    return (
    <div className="containertt">
        <form action="#" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="sexe">Sexe</label>
            <input
            type="text"
            id="sexe"
            name="sexe"
            onChange={handleInputChange}
            value={formData && formData.sexe ? formData.sexe : ''}
            placeholder="Entrer votre sexe"
            
            />
        </div>
        <div className="form-group">
            <label htmlFor="nationalité">nationalité</label>
            <input
            type="text"
            id="nationalité"
            name="nationalité"
            onChange={handleInputChange}
            value={formData.nationalité || ''}
            placeholder="veuillez entrer votre pays"
            
            />
        </div>
        <div className="form-group">
            <label htmlFor="date_de_naissance">date_de_naissance</label>
            <input
            type="date"
            id="date_de_naissance"
            name="date_de_naissance"
            onChange={handleInputChange}
            value={formData.date_de_naissance || ''}
            placeholder="Enter username"
            
            />
        </div>
        <div className="form-group">
            <label htmlFor="lieu_de_residence">lieu_de_residence</label>
            <input
            type="text"
            id="lieu_de_residence"
            onChange={handleInputChange}
            name="lieu_de_residence"
            value={formData.lieu_de_residence || ''}
            placeholder="ou vous trouvez"
            
            />
        </div>
        <div className="form-group">
            <label htmlFor="entreprise">entreprise</label>
            <input
            type="text"
            id="entreprise"
            name="entreprise"
            onChange={handleInputChange}
            value={formData.entreprise || ''}
            placeholder="Enter email"
            
            />
        </div>
        <div className="form-group">
            <label htmlFor="site_internet">Votre site internet</label>
            <input
            type="text"
            onChange={handleInputChange}
            id="site_internet"
            name="site_internet"
            value={formData.site_internet || ''}
            placeholder="Votre site internet"
            
            />
        </div>
        <div className="form-group">
            <label htmlFor="profil">photo de profil</label>
            <input
            type="file"
            id="profil"
            name="profil"
            
            onChange={handleprofilChange}
            />
            
            {profil  && (
                <div className="image-container" style={{ display: 'flex', marginLeft: '11px', }}>
                    <img src={profil } alt="Prévisualisation de la photo de profil"  style={{ height: '110px', width: '110px' }}  />
                    <button onClick={handleDeleteprofil } style={{ background: 'red', height: '41px', width: '165px',textAlign: 'center',}}>Supprimer</button>
                </div>
            )}
        </div>
        <div className="form-group">
            <label htmlFor="carte_identite">Insérer votre carte d'identité</label>
            <input
            type="file"
            id="carte_identite"
            name="image"
            onChange={handleimageChange}
            />
            {image && (
                <div className="image-container2" style={{ display: 'flex', marginLeft: '21px', }}>
                    <img src={image} alt="Prévisualisation de la carte d'identité"  style={{ height: '110px', width: '120px' }} />
                    <button onClick={handleDeleteimage} style={{ background: 'red', height: '41px', width: '165px',textAlign: 'center',}}>Supprimer</button>
                </div>
            )}
            
        </div>
        
        <div className="button">
            <input type="submit" value="envoyer"  />
        </div>
        </form>
    </div>
    );
   
    

};

export default FormComponent2; 