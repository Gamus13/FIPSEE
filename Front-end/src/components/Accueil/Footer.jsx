import React from 'react';

import  Logo from '../../images/Logo-fipsee.png';


function Footer(){
    return(
        <div className='footer-btr' > 
           
            <footer>
                <div class="row">
                    <div class="col">
                        <img src={Logo} class="footer_logo"/>
                        <p class="footer_about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore harum molestias nesciunt, 
                            doloremque magni aspernatur iste blanditiis, fugiat quaerat accusamus ut, vero tempore. 
                            Fugiat, illum!
                        </p>
                    </div>
                    <div class="col">
                        <h3>Bureau <div class="bottom_line"><span></span></div></h3>
                        <p>2841 Romines Mill Road</p>
                        <p>Fipsee</p>
                        <p>douala, ZIP 75074, cameroun</p>
                        <p class="footer_email">marcelnoumsi8@gamil.com</p>
                        <h4>+1 - 2145958195</h4>
                    </div>
                    <div class="col">
                        <h3>Liens <div class="bottom_line"><span></span></div></h3>
                        <ul>
                            <li><a href="">HOME</a></li>
                            <li><a href="">ABOUT</a></li>
                            <li><a href="">SERVICE</a></li>
                            <li><a href="">CONTACT US</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h3>Lettre d'information <div class="bottom_line"><span></span></div></h3>
                        <form>
                            <ion-icon class="icon" name="mail"></ion-icon>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit"><ion-icon class="icon_right" name="arrow-round-forward"></ion-icon></button>
                        </form>
                        <div class="social_icons">
                            <ion-icon class="social_icon" name="logo-facebook"></ion-icon>
                            <ion-icon class="social_icon" name="logo-whatsapp"></ion-icon>
                            <ion-icon class="social_icon" name="logo-twitter"></ion-icon>
                            <ion-icon class="social_icon" name="logo-instagram"></ion-icon>
                        </div>
                    </div>
                </div>
                <hr/>
                <p class="copyright">Fipsee Learning Ⓒ 2022 - All Rights Reserved</p>
            </footer> 
        </div>

       
    )
}

export default Footer