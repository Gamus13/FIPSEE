// import React from 'react'
// import { createContextInvest, useContextInvest, useState } from 'react';
// import axios from '../axios';
// import { useHistory } from 'react-router-dom';


// const AuthContentInvest = createContextInvest({
// 	user: null,
// 	setUser: () => {},
// 	csrfToken: () => {},
// });

// const { setUser } = useContextInvest(AuthContentInvest);
// const history = useHistory();

// const handleRegister = async (data) => {
//   try {
//     // Effectuez votre logique d'inscription ici

//     if (response.status === 200) {
//       setUser(response.data.user);
//       history.push('/dashboard'); // Redirection vers le dashboard après inscription réussie
//     }
//   } catch (error) {
//     // Gérez les erreurs ici
//   }
// };

// // Utilisez handleRegister dans votre composant pour effectuer l'inscription

// export const AuthProviderInvest = ({ children }) => {
// 	const [user, _setUser] = useState(
// 		JSON.parse(localStorage.getItem('user')) || null
// 	);

	

// 	// génération de jeton csrf pour les méthodes invitées
// 	const csrfToken = async () => {
// 		await axios.get('http://localhost:8000/sanctum/csrf-cookie');
// 		return true;
// 	};

// 	return (
// 		<AuthContentInvest.Provider value={{ user, setUser, csrfToken }}>
// 			{children}
// 		</AuthContentInvest.Provider>
// 	);
// };

// export const useAuthInvest = () => {
// 	return useContextInvest(AuthContentInvest);
// };

import React from 'react';
import { createContextInvest, useContextInvest, useState } from 'react';
import axios from '../axios';
import { useHistory } from 'react-router-dom';

const AuthContentInvest = createContextInvest({
  user: null,
  setUser: () => {},
  csrfToken: () => {},
});

export const AuthProviderInvest = ({ children }) => {
  const [user, _setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const history = useHistory(); // Ajout de useHistory

  const setUser = (user) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
    _setUser(user);
  };

  const handleRegister = async (data) => { // Ajout de handleRegister
    try {
      // Effectuez votre logique d'inscription ici

      if (response.status === 200) {
        setUser(response.data.user);
        history.push('/investisseur'); // Redirection vers le dashboard après inscription réussie
      }
    } catch (error) {
      // Gérez les erreurs ici
    }
  };

  const csrfToken = async () => {
    await axios.get('http://localhost:8000/sanctum/csrf-cookie');
    return true;
  };

  return (
    <AuthContentInvest.Provider value={{ user, setUser, csrfToken }}>
      {children}
    </AuthContentInvest.Provider>
  );
};

export const useAuthInvest = () => {
  return useContextInvest(AuthContentInvest);
};