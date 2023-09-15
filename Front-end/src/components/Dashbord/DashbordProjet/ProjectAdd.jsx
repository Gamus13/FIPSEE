import React, { useState } from 'react';
import { ToastContainer} from 'react-toastify';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from '../../../axios';
function ProjetForm() {

  const handleFileChange = (event) => {
    const files = event.target.files;
    setState((prevState) => ({
      ...prevState,
      selectedImages: files,
    }));
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setState((prevState) => ({
      ...prevState,
      selectedImages: files,
    }));
  };
  
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setState] = useState({
    titre: '',
    Secteur: '',
    Montant_de_levée: '',
    Monnaie: '',
    Duree_de_la_levée: '',
    description: '',
    
  })
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const next = () => {
    if (formNo === 1 && state.titre && state.Secteur && state.Montant_de_levée) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 2 && state.Monnaie && state.Duree_de_la_levée && state.description) {
      setFormNo(formNo + 1)
    } else {
      toast.error('Veuillez remplir tous les champs de saisie') // ici c'est le message d'erreur renvoyer 
    }
  }
  const pre = () => {
    setFormNo(formNo - 1)
  }

  const sendDataToApi = async () => {
    try {
      const formData = new FormData();
    
      // Ajouter les valeurs du formulaire dans l'objet FormData
      formData.append('titre', state.titre);
      formData.append('Secteur', state.Secteur);
      formData.append('Montant_de_levée', state.Montant_de_levée);
      formData.append('Monnaie', state.Monnaie);
      formData.append('Duree_de_la_levée', state.Duree_de_la_levée);
      formData.append('description', state.description);
    
      // Vérifier si selectedImages est défini
    //   if (state.selectedImages) {
    //     // Ajouter les images sélectionnées à l'objet FormData
    //     formData.append('images[]', state.selectedImages);
       
    //   }
    // console.log(state.selectedImages )

    for (let i=0; i<state.selectedImages.length; i++){
      formData.append('images[]', state.selectedImages[i]);
    }
      
      try {
        await axios.post('http://localhost:8000/api/products',formData)
      } catch (error) {
        
      }

      console.log("resquest sent :", response)    
      // Reste du code...
    } catch (error) {
      console.log('Erreur lors de la requête vers l\'API:', error.message);
    }
  };
  return (
    <div >
      <ToastContainer className={`w-[35px]`} />
      <div >
        <div className='flex justify-center items-center'>
          {
            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
              {v}
            </div>
              {
                i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
              }
            </>)
          }
        </div>
        {
          formNo === 1 && <div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="titre">Titre du projet</label>
              <input 
                value={state.titre}
                onChange={inputHandle}
               className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='titre' placeholder='name' id='titre'
              />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="Secteur">Secteur d'activité</label>
              <input 
                value={state.Secteur}
                onChange={inputHandle}
                className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='Secteur' placeholder='dept name' id='Secteur' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="Montant_de_levée">Montant de la levée de fonds</label>
              <input value={state.Montant_de_levée}
                onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="number" name='Montant_de_levée' placeholder='batch' />
            </div>
            <div className='mt-4 flex justify-center items-center'>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Suivant</button>
            </div>
          </div>
        }

        {
          formNo === 2 && <div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="Monnaie">Monnaie</label>
              <input value={state.Monnaie} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='Monnaie' placeholder='varsity name' id='Monnaie' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="Duree_de_la_levée">Fin de la levée de fonds</label>
              <input value={state.Duree_de_la_levée} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="date" name='Duree_de_la_levée' placeholder='session' id='Duree_de_la_levée' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="description">Description du projet</label>
              <textarea value={state.description} onChange={inputHandle} row='10' className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="number" name='description' placeholder='plus de details sur le projet' ></textarea>
            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Retour</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Suivant</button>
            </div>
          </div>
        }

        
        { formNo === 3 && (
            <div>
              <div className='flex flex-col mb-2'>
                
                <label htmlFor='district'>Ajouter des images a votre projet</label>
                <div
                  className='p-12 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                  onDrop={handleDrop}
                  onDragOver={(event) => event.preventDefault()}
                >
                  <input
                    
                    type='file'
                    multiple
                    name='images[]'
                    onChange={handleFileChange}
                    id='images'
                  />
                  
                </div>
              </div>
  
    
              {/* Reste du formulaire */}
              <div className='mt-4 gap-3 flex justify-center items-center'>
                <button
                  onClick={pre}
                  className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'
                >
                  Retour
                </button>
                <button
                 // onClick={finalSubmit}
                 onClick={sendDataToApi}
                 type="submit"
                  className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'
                >
                  Envoyer
                </button>
              </div>
            </div>
          )
        }
        

      </div>
    </div>
  );
}

export default ProjetForm;
