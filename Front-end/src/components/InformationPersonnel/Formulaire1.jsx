

import React, { useState, useEffect } from 'react';
import axios from '../../axios';

import './Formulaire1.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: ''

  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/user');
        const user = response.data.data;
        setFormData(user);
        console.log('Données utilisateur1 :', user);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
      }
    };

    fetchData();
  }, []);

  console.log("Form 1 user data", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };

  return (

    <div className="containertt">
      <div className="title">Vos informations</div>
      <form onSubmit={handleSubmit} action="#">
        <div className="form-group">
          <span htmlFor="nom">Noms</span>
          <input 
           type="text" 
           id="nom"
           name="nom" 
           value={formData.name} 
           onChange={handleChange} 
           readOnly 
           placeholder="Enter name" 
           required 
          />
        </div>
        <div className="form-group">
    
          <span htmlFor="prenom">Prenoms</span>
          <input type="text" 
            id="prenom" 
            name="prenom" 
            value={formData.lastName} 
            onChange={handleChange}  
            readOnly 
            placeholder="Enter username" 
            required 
          />
        </div>
        <div className="form-group">
        
          <span htmlFor="email">Email</span>
          <input type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            readOnly 
            placeholder="Enter email" 
            required 
          />
        </div>
        <div className="form-group">
          <span>Mot de passe actuel</span>
          <input type="password" placeholder="Entrer un nouveau mot de passe" required />
        </div>
        <div className="form-group">
       
          <span  htmlFor="password">Nouveau mot de passe</span>
          <input type="password" 
          id="password" 
          name="password" 
          placeholder="Entrer votre nouveau mot de passe" 
          required />
        </div>
        <div className="form-group">
          <span>Ancien Mot de passe</span>
          <input type="password" placeholder="Entrer votre ancien mot de passe" required />
        </div>
        <div className="button">
          <input type="submit" value="envoyer" />
        </div>
      </form>
    </div>
  

  );
};

export default FormComponent; 