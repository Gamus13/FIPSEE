
import  Logo from '../../../images/Logo-fipsee.png';
import  google from '../../../images/google.png';
import React, {useState, useEffect, useRef} from 'react';
import handleLogout from '../../ProtectedLayout';
import axios from '../../../axios';
function App() {

    const [open, setOpen] = useState(false);
    const [imageData, setImageData] = useState(null);
    // const [imageUrl, setImageUrl] = useState('');
    const [user, setUser] = useState('');
    // const user = {
    //       isOnline: true, // si l'utilisateur est bel et bien connecter on n'affiche user is online sinon rien
    //   };

    const [formData, setFormData] = useState({
      nom: '',
      prenom: '',
      email: '',
      motDePasse: ''
  
    });

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

    useEffect(() => {
      const fetchImageData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/infosUser');
          const { data } = response;
          console.log(data); // Vérifiez la structure des données dans la console
          if (Array.isArray(data) && data.length > 0) {
            const imageData = data[0];
            console.log(imageData); // Vérifiez l'objet de données dans la console
            setImageData(imageData);
          }
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchImageData();
    }, []);
  
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
        <div className='menu-trigger' onClick={() => setOpen(!open)}>
          {imageData && (
            <img src={`http://localhost:8000/storage/InfosUser/image/${imageData.image}`} alt="Image" />
          )}
        </div>
        {user.isOnline && <div className='profile'></div>}
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>{formData.lastName} <br/><span>{formData.name}</span></h3>
          <ul>
            <div className='bloc'>
              <a href='/test'><DropdownItem img = {google} text = {"profil"}/></a>
              <a href='/mon_compte'><DropdownItem img = {google} text = {"Compte"}/></a>
              <a  onClick={handleLogout}><DropdownItem img = {google} text = {"Déconnexion"}/></a>
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

