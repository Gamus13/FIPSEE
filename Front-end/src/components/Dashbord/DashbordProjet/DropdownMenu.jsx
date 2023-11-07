
import  Logo from '../../../images/Logo-fipsee.png';
import  google from '../../../images/google.png';
import React, {useState, useEffect, useRef} from 'react';
import handleLogout from '../../ProtectedLayout';
import axios from '../../../axios';
function App() {

    const [open, setOpen] = useState(false);
    const [imageData, setImageData] = useState(null);
    const [user, setUser] = useState('');
    // const user = {
    //       isOnline: true, // si l'utilisateur est bel et bien connecter on n'affiche user is online sinon rien
    //   };
    const [matchingImages, setMatchingImages] = useState([]);
    const [formData, setFormData] = useState({
      nom: '',
      prenom: '',
      email: '',
      motDePasse: ''
  
    });

    const [infosUser, setInfosUser] = useState({
      image: '',
      lieu_de_residence: '',
      nationalité: '',
      profil: ''
    });

    // ici je recupere le nom et prenoms de l'utilisateur connecter

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/user');
          const user = response.data.data;
          setFormData(user);
          // console.log('Données utilisateur :', user);
        } catch (error) {
          console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
        }
      };
  
      fetchData();
    }, []);

    
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    };

    // ici j'effectue des comparaison lors de l'execution des scripts

    useEffect(() => {
      const fetchData = async () => {
        try {
          // je recupere d'abord id des data retourner par cette requete 

          const response = await axios.get('/user');
          const user = response.data.data;
          setFormData(user);
          // console.log('Données utilisateur :', user);

          // je recupere les information de l' infosuser dans cette requtte 
          const imageDataResponse = await axios.get('http://localhost:8000/api/infosUser');
          const imageData = imageDataResponse.data;
          // console.log('Données d\'image :', imageData);
    
          const images = [];

          // ici je compare id recuperer de la premiere requette et par rapport a celle de id_user de la seconde 

          for (let i = 0; i < imageData.length; i++) {
            if (imageData[i].user_id === user.id) {
              images.push(imageData[i]);
            }
          }
    
          setMatchingImages(images);
          
          // si les id et id_user ont la meme valaur je recupere l'id qui est retourner dans la requette 2

          if (images.length > 0) {
            // console.log('L\'ID de l\'utilisateur correspond à au moins un ID dans les données d\'image.');
            // console.log('Images correspondantes :', images);
          } else {
            // console.log('L\'ID de l\'utilisateur ne correspond à aucun ID dans les données d\'image.');
          }
        } catch (error) {
          console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
        }
      };
    
      fetchData();
    }, []);

    //ici je recupere id de la requette 2 et je l'utilise comme parametre pour attaquer la route pour retourner les data en fonction de l'utilisateur actuel
    const fetchUserInfo = async (id) => {
      try {
        const response = await axios.get(`/infos-users/${id}`);
        const userInfo = response.data;
        // console.log('Informations utilisateur :', userInfo);
        setInfosUser(userInfo.InfosUser); // Mettre à jour l'état avec les données de userInfo
      } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur :', error);
      }
    };
    // Utilisation de la fonction avec la première correspondance d'image
    if (matchingImages.length > 0) {
      const firstMatchingImage = matchingImages[0];
      fetchUserInfo(firstMatchingImage.id);
    } else {
      console.log('L\'ID de l\'utilisateur ne correspond à aucun ID dans les données d\'image.');
    }
  
    const handleLogout = async () => {
          try {
              const resp = await axios.post('/logout');
              if (resp.status === 200) {
                  localStorage.removeItem('user');
                  window.location.href = '/';
          // console.log("test ok")
              }
          } catch (error) {
        // console.log("test error")
              console.log(error);
          }
      // console.log("test ook")
      };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        // console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        {/* {console.log('userInfo3 attendue:', infosUser)} */}

        <div className="menu-trigger" onClick={() => setOpen(!open)}>
          {/*ici je recupere l'image provenant du back par son chemin d'acces*/}

          {infosUser && (
            <img src={`http://localhost:8000/storage/InfosUser/image/${infosUser.image}`} alt="Image" />
          )}
        </div>
        {user.isOnline && <div className='profile'></div>}
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>{formData.lastName} <br/><span>{formData.name}</span></h3>
          <ul>
            <div className='bloc'>
              <a href='/profileuser'><DropdownItem img = {`https://cdn.pixabay.com/photo/2016/03/31/17/33/avatar-1293744_640.png`} text = {"profil"}/></a>
              <a href='/mon_compte'><DropdownItem img = {`https://cdn.pixabay.com/photo/2015/11/10/20/29/business-1037736_640.png`} text = {"Compte"}/></a>
              <a  onClick={handleLogout}><DropdownItem img = {`https://cdn.pixabay.com/photo/2013/03/29/13/40/exit-97636_1280.png`} text = {"Déconnexion"}/></a>
              {/* <DropdownItem img = {google} onClick={handleLogout} text = {"Logout"}/> */}
              
            </div>
            
          </ul>
        </div>  
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
      
    </li>
  );
}

export default App;

