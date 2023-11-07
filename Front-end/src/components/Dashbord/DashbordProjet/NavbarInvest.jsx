import React from 'react';
import { NavLink } from 'react-router-dom';
import 'material-symbols';
import Col from 'react-bootstrap/Col';
import { useEffect } from "react";
import  Logo from '../../../images/Logo-fipsee.png';
// import handleLogout from './components/ProtectedLayout';

function DashbordProjet(){

    


    return(
        <div>
			<Col sm="2" lg="1" className="sidebar">
				<div className="logo">
					<img src={Logo} alt="Logo" class='logo' /><a href='/'></a>
					
				</div>
				<ul className="links">
					<h4>Menu principal</h4>
					<li>
						<span className="material-symbols-outlined">dashboard</span>
						<a href="/dashbord">Accueil</a>
					</li>
					<li>
						<span className="material-symbols-outlined">show_chart</span>
						<a href="/Revenue">Revenue</a>
					</li>
					{/* <li>
						<span className="material-symbols-outlined">work</span>
						<a href="/projet">projet</a>
					</li> */}
					<hr />
					<h4>Menu Avancée</h4>
					<li>
						<span className="material-symbols-outlined">person</span>
						<a href="/a propos">Mon compte</a>
					</li>
					<li>
						<span className="material-symbols-outlined">help</span>
						<a href="/"  /*onClick={handleLogout}*/>Assistance </a>
					</li>
					
					<li>
						<span className="material-symbols-outlined">group</span>
						<a href="#">Forums</a>
					</li>
					<li>
						<span className="material-symbols-outlined">monitoring</span>
						<a href="#">Statistiques</a>
					</li>
					<hr/>
					<h4>Votre Espace</h4>
					<li>
						<span className="material-symbols-outlined">bar_chart</span>
						<a href="#">Evolution</a>
					</li>
					<li>
						<span className="material-symbols-outlined">mail</span>
						<a href="#">Message</a>
					</li>
					<li>
						<span className="material-symbols-outlined">settings</span>
						<a href="#">Parametre</a>
					</li>
					<li className="logout-link">
						<span className="material-symbols-outlined">logout</span>
						<a href="#">Logout</a>
					</li>
				</ul>
			</Col>

				



		</div>
    )
}

export default DashbordProjet