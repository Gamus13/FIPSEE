import React, { useEffect,useState } from 'react';
import '../../../Styles/DashbordClient/InvestForm.css';
import axios from '../../../axios';

const CardFormComponent = () => {
  // les donnees a envoyer

  const [user, setUser] = useState(null);
  const [cc_number, setcc_number] = useState('');
  const [email, setemail] = useState('');
  const [amount, setamount] = useState('');
  const [cvv, setcvv] = useState('');
  const [expiry_month, setexpiry_month] = useState('');
  const [expiry_year, setexpiry_year] = useState('');

  const handlecc_numberChange = (event) => {
    setcc_number(event.target.value);
  };

  const handleemailChange = (event) => {
    setemail(event.target.value);
  };

  const handleamountChange = (event) => {
    setamount(event.target.value);
  };
  const handlecvvChange = (event) => {
    setcvv(event.target.value);
  };

  const handleexpiry_monthChange = (event) => {
    setexpiry_month(event.target.value);
  };

  const handleexpiry_yearChange = (event) => {
    setexpiry_year(event.target.value);
  };


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/userinvestisseur');
        const userId = response.data.id; // Extrait l'ID de la réponse de l'API
        // console.log("User ID:", userId);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchUser();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Créez un objet avec les données du formulaire
    const formData = {
      cc_number: cc_number,
      email: email,
      amount: amount,
      cvv: cvv,
      expiry_month,
      expiry_year,
      user_id: userId,
      // user_id: user ? user.id : null, // Ajoutez l'ID de l'utilisateur s'il est disponible, sinon null
    
    };
    console.log("data:", user_id)
    // Envoyez une requête POST à l'API
    axios.post('http://localhost:8000/api/charge', formData)
      .then(response => {
        // Gérez la réponse de l'API ici
        // console.log(response.data);
      })
      .catch(error => {
        // Gérez les erreurs de requête ici
        console.error(error);
      });
  };

  // logique de previsualisation
    useEffect(() => {
        const handlecardeNumberInput = () => {
          document.querySelector('.carde-number-boxx').innerText = document.querySelector('.carde-number-input').value;
        };
    
        const handlecardeHolderInput = () => {
          document.querySelector('.carde-holder-name').innerText = document.querySelector('.carde-holder-input').value;
        };
    
        const handleMonthInput = () => {
          document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
        };
    
        const handleYearInput = () => {
          document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
        };
    
        const handleCvvMouseEnter = () => {
          document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
          document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
        };
    
        const handleCvvMouseLeave = () => {
          document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
          document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
        };
    
        const handleCvvInput = () => {
          document.querySelector('.cvv-boxx').innerText = document.querySelector('.cvv-input').value;
        };
    
        document.querySelector('.carde-number-input').addEventListener('input', handlecardeNumberInput);
        document.querySelector('.carde-holder-input').addEventListener('input', handlecardeHolderInput);
        document.querySelector('.month-input').addEventListener('input', handleMonthInput);
        document.querySelector('.year-input').addEventListener('input', handleYearInput);
        document.querySelector('.cvv-input').addEventListener('mouseenter', handleCvvMouseEnter);
        document.querySelector('.cvv-input').addEventListener('mouseleave', handleCvvMouseLeave);
        document.querySelector('.cvv-input').addEventListener('input', handleCvvInput);
    
        // Clean up event listeners on component unmount
        return () => {
          document.querySelector('.carde-number-input').removeEventListener('input', handlecardeNumberInput);
          document.querySelector('.carde-holder-input').removeEventListener('input', handlecardeHolderInput);
          document.querySelector('.month-input').removeEventListener('input', handleMonthInput);
          document.querySelector('.year-input').removeEventListener('input', handleYearInput);
          document.querySelector('.cvv-input').removeEventListener('mouseenter', handleCvvMouseEnter);
          document.querySelector('.cvv-input').removeEventListener('mouseleave', handleCvvMouseLeave);
          document.querySelector('.cvv-input').removeEventListener('input', handleCvvInput);
        };
      }, []);
  return (
    <div className="Icontainer">
      <div className="carde-Icontainer">
        <div className="front">
          <div className="image">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSq47Uuwb4-CPwMr-1PwgreCZYy0HdY7SyduLiq3nHN-7Up5Jpw" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Hu7Ta2ANFACk5PebCmaPwMUOgYD23PRBkM3-KR49Hat5wuwb" alt="" />
          </div>
          <div className="carde-number-boxx">#### #### #### #### </div>
          <div className="flexbox">
            <div className="boxx">
              <span className='txty'>Proprietaire :</span>
              <div className="carde-holder-name">noms</div>
            </div>
            <div className="boxx">
              <span className='txty'>expire:</span>
              <div className="expiration">
                <span className="exp-month">mm</span>
                <span className="exp-year">yy</span>
              </div>
            </div>
          </div>  
        </div>
        <div className="back">
          <div className="stripe"></div>
          <div className="boxx">
            <span className='txty'>cvv</span>
            <div className="cvv-boxx"></div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Hu7Ta2ANFACk5PebCmaPwMUOgYD23PRBkM3-KR49Hat5wuwb" alt="" />
          </div>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="inputBoxx">
          <span className='txty'>Numero de Carte</span>
          <input 
            type="text" 
            maxLength="50" 
            className="carde-number-input" 
            placeholder="Entrer votre numero de carte " 
            value={cc_number}
            onChange={handlecc_numberChange}
          />
        </div>
        <div className="inputBoxx">
          <span className='txty'>TITULAIRE DE LA CARTE</span>
          <input type="text" className="carde-holder-input" placeholder="votre noms" />
        </div>
        <div className="flexbox">
          <div className="inputBoxx">
            <span className='txty'>Mois d'expiration</span>
            <select 
              name="" 
              id="" 
              className="month-input"
              value={expiry_month}
              onChange={handleexpiry_monthChange}
            >
              <option value="month" selected disabled>
                mois
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="inputBoxx">
            <span className='txty'>Annee d'expiration</span>
            <select 
              name="" 
              id="" 
              className="year-input"
              value={expiry_year}
              onChange={handleexpiry_yearChange}
            >
              <option value="year" selected disabled>
                Annee
              </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>
          <div className="inputBoxx">
            <span className='txty'>cvv</span>
            <input 
              type="text" 
              maxLength="4" 
              className="cvv-input" 
              value={cvv}
              onChange={handlecvvChange}
            />
          </div>
        </div>
        <div className="flexbox">
          <div className="inputBoxx">
            <span className='txty'>Montant de la levee</span>
            <input 
              type="text" 
              maxLength="177" 
              className="cvv-input" 
              placeholder='combien voulez-vous investir?' 
              value={amount}
              onChange={handleamountChange}
            />
          </div>
          <div className="inputBoxx">
            <span className='txty'>Email</span>
            <input 
              type="email" 
              maxLength="100" 
              className="cvv-input"
              value={email}
              onChange={handleemailChange}
            />
          </div>
          <div className="inputBoxx">
            <span className='txty'>Vos Part du projet</span>
            <input type="text" maxLength="16" className="cvv-input" />
          </div>
        </div>
        <button 
          type="submit" 
         
          className="submit-btn" 
        >investir</button>
      </form>
    </div>
  );
};

export default CardFormComponent;