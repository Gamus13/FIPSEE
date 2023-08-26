import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';
import Profile from './pages/Profile';
import LoginForm from './pages/Register';
import ProtectedLayout from './components/ProtectedLayout';


import Header from './components/Accueil/Header';
import Navbar from './components/Accueil/Navbar';
import Defilant from './components/Accueil/Defilant';

import './Styles/DashbordClient/ProtectedLayout.css';
import './Styles/DashbordClient/ContainerProjet.css';
import './Styles/DashbordClient/SectionProjet2.css';
import './Styles/DashbordClient/SectionRight.css';
import './Styles/DashbordClient/UserStat.css';
import './Styles/Accueil/Header.css';
import './Styles/Accueil/Defilant.css';
import './Styles/Accueil/Navbar.css';



const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Header />
				<Navbar />
				<Defilant />
				
			</>
		),
	},

	{
		path: '/profile',
		element: (
			<>
				<ProtectedLayout />
				
				
			</>
		),
	},
	
	


		

   
	
]);

export default router;
