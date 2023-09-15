import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';
import Profile from './pages/Profile';
import LoginForm from './pages/Register';
import ProtectedLayout from './components/ProtectedLayout';
import NotFound from './components/NotFound';
import CreateProduct from './components/Product/CreateProjet';
import Header from './components/Accueil/Header';
import Navbar from './components/Accueil/Navbar';
import Defilant from './components/Accueil/Defilant';
import ImageGallery from './ImageGallary';
import ModalPOPUP from './components/Dashbord/DashbordProjet/ModalBtn';
import FixedContainer from './components/Dashbord/DashbordProjet/SectionProjet';
// import {List } from './components/Product/ListProjet';
import List  from './components/Product/ListProjet';
// import { properties } from "./constants/data";
 import Card from "./components/Dashbord/DashbordProjet/Card/Card";
 import PrimarySearchAppBar from './components/Dashbord/DashbordProjet/SectionRight';
 import SearchBar from './components/SearchBar';
import AlignItemsList from './components/Dashbord/DashbordProjet/UserList';


import './Styles/DashbordClient/ProtectedLayout.css';
import './Styles/DashbordClient/ContainerProjet.css';
import './Styles/DashbordClient/SectionProjet2.css';
import './Styles/DashbordClient/SectionRight.css';
import './Styles/DashbordClient/UserStat.css';
import './Styles/Accueil/Header.css';
import './Styles/Accueil/Defilant.css';
import './Styles/Accueil/Navbar.css';
//import { Modal } from 'react-bootstrap';
import "./Styles/DashbordClient/List.css";
import "./Styles/DashbordClient/SearchBar.css";
import "./Styles/DashbordClient/HorizontalNav.css";

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

	//route pour l'authentification de l'utilisateur
	{
		path: '/profile',
		element: (
			<>
				<AlignItemsList/>
				<ProtectedLayout />
				<FixedContainer/>
			</>
		),
	},
	//route pour le dashbord de l'entrepreuneur
	{
		path: '/dashbord',
		element: (
			<>
				<ProtectedLayout />
				<AlignItemsList/>
				<FixedContainer/>
				{/* <List /> */}
				{/* <div className='List'>
					{List.map((item) => (
						<Card data={item} key={item.id} />
					))}
				</div> */}
				{/* <SearchBar placeholder="Entrer votre recherche"/> */}
			</>
		),
	},
	{
		path: '/Revenue',
		element: (
			<>
				<ProtectedLayout />
				<List />
				
			</>
		),
	},
	{
		path: '/projet',
		element: (
			<>
				<ProtectedLayout />
				{/* <ImageGallary /> */}
				{/* <CreateProduct/> */}
				<ModalPOPUP />

			</>
		),
	},
	{
		path: '/test',
		element: (
			<>
				
			 <ImageGallery /> 
			 {/* <CreateProduct/> */}
			</>
		),
	},
	
	
	//Route pour la page Notfound
	{
		path: '*',
		element: (
			
			<NotFound />
				
				
			
		),
	},

   
	
]);

export default router;
