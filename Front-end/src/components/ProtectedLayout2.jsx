import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';
import 'material-symbols';
import DashbordProjet from './Dashbord/DashbordProjet/Navbar';
import Search from '../components/SearchBar';// les lignes a importer
import  {  useState } from "react";
import Nav from '../components/HorizontalNav';

// import UserStat from './Dashbord/DashbordProjet/UserList';
import { useEffect } from "react";
export default function Layout() {
	const { user, setUser } = useAuth();

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

	// déconnecte l'utilisateur
	const handleLogout = async () => {
		try {
			const resp = await axios.post('/logout');
			if (resp.status === 200) {
				localStorage.removeItem('user');
				window.location.href = '/';
			}
		} catch (error) {
			console.log(error);
		}
	};

	//
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

			<main >
				
				<DashbordProjet />
				{/* <Search placeholder="Entrer votre recherche"data={allUsers}/>
				<Nav/> */}
			</main>
			
			
		</>
	);
}

// export { handleLogout };