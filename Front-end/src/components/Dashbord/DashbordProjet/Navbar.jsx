import React from 'react';
import { NavLink } from 'react-router-dom';
import 'material-symbols';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from "react";
import  Logo from '../../../images/Logo-fipsee.png';


function DashbordProjet(){

    


    return(
        <Row>
				<Col sm="2" lg="1" className="sidebar">
					<div className="logo">
						<img src={Logo} alt="Logo" class='logo' />
						<h2>FIPSEE</h2>
					</div>
					<ul className="links">
						<h4>Main Menu</h4>
						<li>
							<span className="material-symbols-outlined">dashboard</span>
							<a href="#">Dashboard</a>
						</li>
						<li>
							<span className="material-symbols-outlined">show_chart</span>
							<a href="#">Revenue</a>
						</li>
						<li>
							<span className="material-symbols-outlined">flag</span>
							<a href="#">Reports</a>
						</li>
						<hr />
						<h4>Advanced</h4>
						<li>
							<span className="material-symbols-outlined">person</span>
							<a href="#">Designer</a>
						</li>
						<li>
							<span className="material-symbols-outlined">group</span>
							<a href="#">Developer </a>
						</li>
						<li>
							<span className="material-symbols-outlined">ambient_screen</span>
							<a href="#">Magic Build</a>
						</li>
						<li>
							<span className="material-symbols-outlined">group</span>
							<a href="#">Theme Maker</a>
						</li>
						<li>
							<span className="material-symbols-outlined">monitoring</span>
							<a href="#">Analytic</a>
						</li>
						<hr/>
						<h4>Account</h4>
						<li>
							<span className="material-symbols-outlined">bar_chart</span>
							<a href="#">Overview</a>
						</li>
						<li>
							<span className="material-symbols-outlined">mail</span>
							<a href="#">Message</a>
						</li>
						<li>
							<span className="material-symbols-outlined">settings</span>
							<a href="#">Settings</a>
						</li>
						<li className="logout-link">
							<span className="material-symbols-outlined">logout</span>
							<a href="#"  >Logout</a>
						</li>
					</ul>
				</Col>

				



			</Row>
    )
}

export default DashbordProjet