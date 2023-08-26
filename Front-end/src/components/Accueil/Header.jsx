import React from 'react';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { PiEyeSlashLight } from 'react-icons/pi';


// ici cette fonction va derouler au clic sur l'icone profil un menu
export function ouverture(){
    const containerMenu = document.querySelector('.container-menu');
    const btnMenu = document.querySelector('.btn-menu');

    btnMenu.addEventListener('click', () => {

    containerMenu.classList.toggle('active')

    })
}


function Home(){
    // ici c'est la fonction qui permet le slide avant de chaque background*/
    function handleNextClick() {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]);
    }

    function handlePrevClick() {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
    }

  

    

    return(
        
        <div class="container" >
        
            <div id="slide"> { /*ici c'est l'evenement au clic qui declanche la fermeture de mon input*/}
                    
                    <div class="item" id='slide1'>
                    
                        <div class="content">
                            <hr class="desi"></hr>
                            <div class="localisation"> <i>< FaMapMarkerAlt  /></i> Douala-Cameroun</div>
                            <div class="name">BGFI BANK</div>
                            <div class="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                            <div class="bloc-infos">
                                <div class="details"><span class="fa fa-bookmark"></span></div>
                                <button>decouvrir</button>
                            </div>
                        </div>
                    </div>
                    <div class="item" id='slide2'>
                        <div class="content">
                            <hr class="desi"></hr>
                            <div class="localisation"><i>< FaMapMarkerAlt  /></i> Douala-Cameroun</div>
                            <div class="name">SOCIETE GENERAL</div>
                            <div class="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                            <div class="bloc-infos">
                                <div class="details"><span><FaPlay /></span></div>
                                <button>decouvrir</button>
                            </div>
                        </div>
                    </div>
                    <div class="item" id='slide3'>
                        <div class="content">
                            <hr class="desi"></hr>
                            <div class="localisation"><i>< FaMapMarkerAlt  /></i> Douala-Cameroun</div>
                            <div class="name">FACEBOOK</div>
                            <div class="des">Premier réseau social Africain de financement participatif</div>
                            <div class="bloc-infos">
                                <div class="details"><span class="fa fa-bookmark"></span></div>
                                <button>decouvrir</button>
                            </div>
                        </div>
                    </div>
                    <div class="item" id='slide4'>
                        <div class="content">
                            <hr class="desi"></hr>
                            <div class="localisation"><i>< FaMapMarkerAlt  /></i> Douala-Cameroun</div>
                            <div class="name">Onomo market</div>
                            <div class="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu Premier réseau social Africain de financement participatif</div>
                            <div class="bloc-infos">
                                <div class="details"><span class="fa fa-play"></span></div>
                                <button>decouvrir</button>
                            </div>
                        </div>
                    </div>
                    <div class="item" id='slide5'>
                        <div class="content">
                            <hr class="desi"></hr>
                            <div class="localisation"><i>< FaMapMarkerAlt  /></i> Douala-Cameroun</div>
                            <div class="name">SAMSUNG</div>
                            <div class="des">Premier réseau social Africain de financement participatif</div>
                            <div class="bloc-infos">
                                <div class="details"><span class="fa fa-bookmark"></span></div>
                                <button>decouvrir</button>
                            </div>
                        </div>
                    </div>
                    <div class="item" id='slide6'>
                        <div class="content">
                            <hr class="desi"></hr>
                            <div class="localisation"><i>< FaMapMarkerAlt  /></i> Douala-Cameroun</div>
                            <div class="name">BANQUES ATLANTIQUES</div>
                            <div class="des">secteur: agricole,Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                            <div class="bloc-infos">
                                <div class="details"><span class="fa fa-play"></span></div>
                                <button>decouvrir</button>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                
                </div>
                
                <div class="buttons">
                    <button id="prev" onClick={handlePrevClick}><i><FiChevronLeft class='direction'/></i></button> {/*ici j'ai mis l'evenements onClick pour charger l'evenement*/}
                    <button id="next" onClick={handleNextClick}><i><FiChevronRight class='direction' /></i></button> 
                    
                </div>0

            </div>

        
        

      
       
    
    
    )
}

export default Home
