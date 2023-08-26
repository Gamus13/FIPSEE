import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsSearch } from 'react-icons/bs';

function ContainerProjet(){
    return(
        <>
            {/*menu de projet */}
            
                <div className='dashboard-content'>
                    <div className='banner flex flex-sb'>
                        <div class="dashboard-content"> 
                           <div className="theme-texte">
                             <h1 id='titleheader'>Discover latest</h1>
                           </div>
                        
                            <div class="search flex">
                                
                                <input type="text" placeholder=" Search any collection" />
                                <div class="icon">
                                    <BsSearch className='bsicon'/>
                                </div>

                            </div>
                            <div className="blocProfil">
                                <div className="profilusers">
                                    <img src="" alt="" />
                                </div>
                                <div className="notif">
                                    
                                </div>
                            </div>
                           
                        </div>

                    </div>


                   
                </div>
                
           
           
            {/*menu des statistiques*/}
         
        </>

        
        
        
     
    
    )
}

export default ContainerProjet
