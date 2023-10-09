// // import logo from './logo.svg';
// import user from '../../../images/Logo-fipsee.png';
// import edit from '../../../images/Logo-fipsee.png';
// import inbox from '../../../images/Logo-fipsee.png';
// import settings from '../../../images/Logo-fipsee.png';
// import help from '../../../images/Logo-fipsee.png';
// import logout from '../../../images/Logo-fipsee.png';
import  Logo from '../../../images/Logo-fipsee.png';
import  google from '../../../images/google.png';
import React, {useState, useEffect, useRef} from 'react';
import handleLogout from '../../ProtectedLayout';
import axios from '../../../axios';
function App() {

  const [open, setOpen] = useState(false);
  const user = {
		isOnline: true, // si l'utilisateur est bel et bien connecter on n'affiche user is online sinon rien
	};

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
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={Logo}></img>
          {user.isOnline && <div className='profile'></div>}
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>Name<br/><span>Your status </span></h3>
          <ul>
            <div className='bloc'>
              <a href='/test'><DropdownItem img = {google} text = {"Profile"}/></a>
              <a  onClick={handleLogout}><DropdownItem img = {google} text = {"Logout"}/></a>
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