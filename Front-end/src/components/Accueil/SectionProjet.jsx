import React from 'react'

import  google from '../../images/google.png'
import  img2 from '../../images/img2.jpg'
import  img3 from '../../images/img3.jpg'
import  img4 from '../../images/img4.jpg'
import  img5 from '../../images/img5.jpg'
import  img7 from '../../images/img7.jpg'
import  img8 from '../../images/img8.jpg'
import  img10 from '../../images/img10.jpg'

import  testi1 from '../../images/testi1.jpg'

import $ from 'jquery';


function SectionProjet(){
   
        $(document).ready(function () {
          $(".filter-item").click(function () {
            const value = $(this).attr("data-filter");
            if (value == "all"){
              $(".post-box").show("1000")
            } else{
              $(".post-box")
                  .not("." + value)
                  .hide(1000);
              $(".post-box")
              .filter("." + value)
              .show("1000")
            }
          });
          $(".filter-item").click(function () {
            $(this).addClass("active-filter").siblings().removeClass("active-filter")
          });
        });




    return(
           
        <>
            <div class="post-filter container">
                <span class="filter-item active-filter" data-filter="all">Front end</span>
                <span class="filter-item" data-filter="tech">Back end</span>
                <span class="filter-item" data-filter="food">ux/ui design</span>
                <span class="filter-item" data-filter="news">Graphisme</span>
            </div>

            <div class="post container">
        
                <div class="post-box tech">
                    <img src={img2} alt="" class="post-img" />
                    <h2 class="category">Tech</h2>
                    <a href="#" class="post-title">How to create the best UI with Figma</a>
                    <span class="post-date">12 Feb 2022</span>
                    <p class="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                    <div class="profile">
                        <img src={testi1} alt="" class="profile-img" />
                        <span class="profile-name">MKHB</span>
                    </div>
                </div>
                
                <div class="post-box food">
                    <img src={img3} alt="" class="post-img" />
                    <h2 class="category">Tech</h2>
                    <a href="#" class="post-title">How to create the best UI with Figma</a>
                    <span class="post-date">12 Feb 2022</span>
                    <p class="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                    <div class="profile">
                        <img src={testi1} alt="" class="profile-img" />
                        <span class="profile-name">MKHB</span>
                    </div>
                </div>
                
                <div class="post-box food">
                    <img src={img4} alt="" class="post-img" />
                    <h2 class="category">Food</h2>
                    <a href="#" class="post-title">How to create the best UI with Figma</a>
                    <span class="post-date">12 Feb 2022</span>
                    <p class="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                    <div class="profile">
                        <img src={testi1} alt="" class="profile-img" />
                        <span class="profile-name">MKHB</span>
                    </div>
                </div>
            
                <div class="post-box news">
                    <img src={img5} alt="" class="post-img" />
                    <h2 class="category">Tech</h2>
                    <a href="#" class="post-title">How to create the best UI with Figma</a>
                    <span class="post-date">12 Feb 2022</span>
                    <p class="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                    <div class="profile">
                        <img src={testi1} alt="" class="profile-img" />
                        <span class="profile-name">MKHB</span>
                    </div>
                </div>
                
                <div class="post-box tech">
                    <img src={img7} alt="" class="post-img" />
                    <h2 class="category">Tech</h2>
                    <a href="#" class="post-title">How to create the best UI with Figma</a>
                    <span class="post-date">12 Feb 2022</span>
                    <p class="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                    <div class="profile">
                        <img src={testi1} alt="" class="profile-img" />
                        <span class="profile-name">MKHB</span>
                    </div>
                </div>
                
                <div class="post-box news">
                    <img src={img8} alt="" class="post-img" />
                    <h2 class="category">News</h2>
                    <a href="#" class="post-title">How to create the best UI with Figma</a>
                    <span class="post-date">12 Feb 2022</span>
                    <p class="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                    <div class="profile">
                        <img src={testi1} alt="" class="profile-img" />
                        <span class="profile-name">MKHB</span>
                    </div>
                </div>
                
                <div class="post-box tech">
                    <img src={img10} alt="" class="post-img" />
                    <h2 class="category">Tech</h2>
                    <a href="#" class="post-title">How to create the best UI with Figma</a>
                    <span class="post-date">12 Feb 2022</span>
                    <p class="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                    <div class="profile">
                        <img src={testi1} alt="" class="profile-img" />
                        <span class="profile-name">MKHB</span>
                    </div>
                </div>
                
                <div class="post-box news">
                    <img src={img8} alt="" class="post-img" />
                    <h2 class="category">News</h2>
                    <a href="#" class="post-title">How to create the best UI with Figma</a>
                    <span class="post-date">12 Feb 2022</span>
                    <p class="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                    <div class="profile">
                        <img src={testi1} alt="" class="profile-img" />
                        <span class="profile-name">MKHB</span>
                    </div>
                </div>
                
                <div class="post-box food">
                    <img src={img10} alt="" class="post-img" />
                    <h2 class="category">Food</h2>
                    <a href="#" class="post-title">How to create the best UI with Figma</a>
                    <span class="post-date">12 Feb 2022</span>
                    <p class="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                    <div class="profile">
                        <img src={testi1} alt="" class="profile-img" />
                        <span class="profile-name">MKHB</span>
                    </div>
                </div>
            </div>

        </>

       
    )
}

export default SectionProjet