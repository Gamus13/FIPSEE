import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';
import Profile from './pages/Profile';
import LoginForm from './pages/Register';
import ProtectedLayout from './components/ProtectedLayout';
import Layout from './components/ProtectedLayout2';
import NotFound from './components/NotFound';
import CreateProduct from './components/Product/CreateProjet';
import Header from './components/Accueil/Header';
import Footer from './components/Accueil/Footer';
import Contacts from './components/Accueil/Contact';
import Navbar from './components/Accueil/Navbar';
import MenuTab from './components/InformationPersonnel/UserInformation';
import Defilant from './components/Accueil/Defilant';
import SimpleComponent from './components/Accueil/SiteComponent';
import ImageGallery from './ImageGallary';
import ModalPOPUP from './components/Dashbord/DashbordProjet/ModalBtn';
import FixedContainer from './components/Dashbord/DashbordProjet/SectionProjet';
// import {List } from './components/Product/ListProjet';
import List  from './components/Product/ListProjet';
// import { properties } from "./constants/data";
// import ProfilButtons from './components/Dashbord/DashbordProjet/ProfilPage';

import ProfilInformation from './components/Dashbord/DashbordProjet/PersonnelInformation';
 import Card from "./components/Dashbord/DashbordProjet/Card/Card";
 import PrimarySearchAppBar from './components/Dashbord/DashbordProjet/SectionRight';
 import SearchBar from './components/SearchBar';
import AlignItemsList from './components/Dashbord/DashbordProjet/UserList';
import MyComponent from './components/Dashbord/DashbordProjet/ContainerDiv';
import UserRegister from './components/InformationPersonnel/UserRegistration';
import FormComponent2 from './components/InformationPersonnel/Formulaire3'
import ProductCard from './components/Dashbord/DashbordProjet/DetailProjet'

import './Styles/DashbordClient/ProtectedLayout.css';
import './Styles/DashbordClient/ContainerProjet.css';
import './Styles/DashbordClient/SectionProjet2.css';
import './Styles/DashbordClient/SectionRight.css';
import './Styles/DashbordClient/UserStat.css';
import './Styles/DashbordClient/UserInformation.css';
import './Styles/Accueil/Footer.css';
import './Styles/Accueil/Header.css';
import './Styles/Accueil/Defilant.css';
import './Styles/Accueil/Navbar.css';
//import { Modal } from 'react-bootstrap';
import "./Styles/DashbordClient/List.css";
import "./Styles/DashbordClient/SearchBar.css";
import "./Styles/DashbordClient/DetailProjet.css";
import "./Styles/Accueil/Contact.css";


import "./Styles/DashbordClient/HorizontalNav.css";
// import "./Styles/DashbordClient/ProfilPage.css";


const router = createBrowserRouter([

	//route pour l'accueil de la plateforme
	{
		path: '/',
		element: (
			// au chargement du site ce composant est charger et contient le header, navbar et section1 du site web
			<>
				<SimpleComponent/>	
			</>
		),
	},
	// {
	// 	path: '/Explorer_projet',
	// 	element: (
	// 		<>
	// 			<Navbar />
				
				
			 
	// 		</>
	// 	),
	// },
	// {
	// 	path: '/Contact',
	// 	element: (
	// 		<>
	// 			<Navbar />
	// 			<Contacts />
	// 			<Footer />
			 
	// 		</>
	// 	),
	// },
	// {
	// 	path: '/Services',
	// 	element: (
	// 		<>
	// 			<Navbar />
				
				
			 
	// 		</>
	// 	),
	// },

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
				{/* <List />  */}
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
				{/* <ModalPOPUP /> */}
				
				{/* <List /> */}
				<MyComponent />

			</>
		),
	},
	{
		path: '/test',
		element: (
			<>
			 <ProtectedLayout />
			 <MenuTab />
			 
			 {/* <ProfilButtons /> */}
			 {/* <ImageGallery />  */}
			 {/* <CreateProduct/> */}
			</>
		),
	},

	{
		path: '/test2',
		element: (
			<>
			 <ProtectedLayout />
			 <FormComponent2 />
			 
			 
			</>
		),
	},

	{
		path: '/detail_du_projet',
		element: (
			<>
			 <Layout />
			 <ProductCard/>
			 
			</>
		),
	},

	{
		path: '/Finalregister',
		element: (
			<>
				<ProtectedLayout />
				{/* <ImageGallary /> */}
				{/* <CreateProduct/> */}
				{/* <ModalPOPUP /> */}
				
				{/* <List /> */}
				<UserRegister />

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
