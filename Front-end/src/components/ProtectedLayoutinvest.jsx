import React from 'react'
import { useAuthInvest } from '../contexts/AuthContext';
import axios from '../axios';
import { Navigate, Outlet } from 'react-router-dom';
import  {  useState } from "react";
function ProtectedLayoutInvestisseur() {

    const { user, setUser } = useAuthInvest();

    // vérifie si l'utilisateur est connecté ou non depuis le serveur
    useEffect(() => {
		(async () => {
			try {
				const resp = await axios.get('/user');
				if (resp.status === 200) {
					setUser(resp.data.data);
				}
			} catch (error) {
				if (error.response.status === 401) {
					localStorage.removeItem('user');
					window.location.href = '/';
				}
			}
		})();
	}, []);

    // si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
	if (!user) {
		return <Navigate to="/" />;
	}

    const [allUsers, setAllcountry] = useState([]);

    useEffect(() => {
        const getusers = async () => {
            const getres = await fetch("http://127.0.1:8000/api/users");
            const setusers = await getres.json();
            setAllcountry(await setusers.results);
        };
        getusers();
    }, []);

    return (
        <>

        </>
    )
}

export default ProtectedLayoutInvestisseur
