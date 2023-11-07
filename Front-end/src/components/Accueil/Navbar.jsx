import React from 'react'
import  Logo from '../../images/Logo-fipsee.png'
import  google from '../../images/google.png'

import  Example  from './Navbar'; //ici j'importe la fonction ouverture 
import { useEffect } from "react";

import { BsFillEyeSlashFill } from 'react-icons/bs';
import { SiFacebook } from 'react-icons/si';
import { PiEyeSlashLight } from 'react-icons/pi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import { BiLogInCircle } from 'react-icons/bi';
import {  CgProfile } from 'react-icons/cg';
import { MdOutlineCancel } from 'react-icons/md';
import {MdNotifications} from 'react-icons/md'
import { BsMoon } from 'react-icons/bs';
import {  BsSearch } from 'react-icons/bs';
import {  FiSun } from 'react-icons/fi';

import {  BiLogIn } from 'react-icons/bi';
import {  MdOutlineClose } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa';
import {  CgMenuRightAlt } from 'react-icons/cg';
import Register from '../../pages/Register';
import GuestLayout from '../GuestLayout';
import Login from '../../pages/Login';
import "../../Styles/Accueil/Navbar.css";


function Navbar(){
    useEffect(() => {
        const body = document.querySelector("body");
        const modeToggle = document.querySelector(".dark-light");
        const searchToggle = document.querySelector(".searchToggle");
    
        let getMode = localStorage.getItem("mode");
        if (getMode && getMode === "dark-mode") {
          body.classList.add("dark");
          modeToggle.classList.add("active");
        }
    
        // code js pour basculer entre les modes sombre et clair
        modeToggle.addEventListener("click", () => {
          modeToggle.classList.toggle("active");
          body.classList.toggle("dark");
    
          // code js pour garder le mode sélectionné par l'utilisateur même l'actualisation de la page ou la réouverture du fichier
          if (!body.classList.contains("dark")) {
            localStorage.setItem("mode", "light-mode");
          } else {
            localStorage.setItem("mode", "dark-mode");
          }
        });
    
        // code js pour basculer le champ de recherche
        searchToggle.addEventListener("click", () => {
          searchToggle.classList.toggle("active");
        });
      }, []);
      // ce script concerne mon modal 
      window.onload = () => {
        // On récupère tous les boutons d'ouverture de modale
        const modalButtons = document.querySelectorAll("[data-toggle=modal]");
        
        for(let button of modalButtons){
            button.addEventListener("click", function(e){
                // On empêche la navigation
                e.preventDefault();
                // On récupère le data-target
                let target = this.dataset.target
                
                // On récupère la bonne modale
                let modal = document.querySelector(target);
                // On affiche la modale
                modal.classList.add("show");
    
                // On récupère les boutons de fermeture
                const modalClose = modal.querySelectorAll("[data-dismiss=dialog]");
                
                for(let close of modalClose){
                    close.addEventListener("click", () => {
                        modal.classList.remove("show");
                    });
                }
    
                // On gère la fermeture lors du clic sur la zone grise
                modal.addEventListener("click", function(){
                    this.classList.remove("show");
                });
                // On évite la propagation du clic d'un enfant à son parent
                modal.children[0].addEventListener("click", function(e){
                    e.stopPropagation();
                })
            });
        }
    
    }

   
     

    return(
        <nav>
        <div className="nav-bar">
            <i className='bx bx-menu sidebarOpen' ></i>
            <img src={Logo} alt="Logo" class='logo' /><a href='/'></a>

            <div className="menu">
                <div className="logo-toggle">
                    <span className="logo"><a href="#">Fipsee</a></span>
                    <i><CgMenuRightAlt /></i>
                </div>

                <ul className="nav-links">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/#servicesite">Investir dans un projet</a></li>
                    <li><a href="/#feature">Explorer</a></li>
                    <li><a href="/#Contact">Services</a></li>
                    <li><a href="/#blog">Contact</a></li>
                </ul>
            </div>

            <div className="darkLight-searchBox">
                <div className="dark-light">
                    <i><FiSun class='sun' /></i>
                    {/* <i><BsMoon class='moon' /></i> */}
                    
                </div>

                <div className="searchBox">
                   <div className="searchToggle">
                        {/* <i><MdOutlineCancel class='search' /></i> */}

                        <i><BsSearch class='search' /></i>
                   </div>

                    <div className="search-field">
                        <input type="text" placeholder="Entrer votre recherche ..." id='search'></input>
                        <i><BsSearch class='search' /></i>
                      </div>
                </div>
              <div id="container">
                <div id="menu2">
                  <input type="checkbox" id="menu2-toggle"/>
                  <ul id="ul">
                    
                    <li id="li">
                    
                      <a href="#" role="button" data-target="#modal" data-toggle="modal"><FaUserPlus class='icon-react'  /></a>
              
                    </li><li id="li">
                      <a href="#"  role="button" data-target="#modal2" data-toggle="modal"><BiLogIn class='icon-react' /></a>
                    </li><li id="li">
                      <a href="#">&#x2709;</a>
                    </li>
                  </ul>
                </div>
              </div>
              
                
            </div>

            
            <div class="modale" id="modal" role="dialog">
              
              <div class="modal-content">
                {/* <Link to="/components/GuestLayout.jsx">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-secondary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 sm:w-auto">
                    Ajouter un motif
                  </button>
                </Link> */}
                <Register/>
                <GuestLayout />
               
              </div>
               
            </div>

            <div class="modale" id="modal2" role="dialog">
                <div class="modal-content">

                  <Login />
                  <ToastContainer />

                </div>
            </div>
           
                    

        </div>

       
    </nav>
  )
}

export function Fermeture(){
    if(document.getElementById('search').style.display =='block'){
        document.getElementById('search').style.display = 'none';
    }
}



export default Navbar