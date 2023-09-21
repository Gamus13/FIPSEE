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
export default function DefaultLayout() {
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
			{/*<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
				<div className="container flex flex-wrap items-center justify-between mx-auto">
					<a href="https://dcodemania.com/" className="flex items-center">
						
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							Fipsee
						</span>
					</a>
					
					<div className="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<NavLink
									to="/profile"
									className={({ isActive }) =>
										isActive
											? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
											: 'block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white'
									}>
									Profile
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/about"
									className={({ isActive }) =>
										isActive
											? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
											: 'block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white'
									}>
									About
								</NavLink>
							</li>

							<li>
								<a
									onClick={handleLogout}
									href="#"
									className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
									Logout
								</a>
							</li>
						</ul>
					</div>
				</div>
					</nav>*/}
			<main >
				
				<DashbordProjet />
				<Search placeholder="Entrer votre recherche"data={allUsers}/>
				<Nav/>
			</main>
			
			
		</>
	);
}

// export { handleLogout };