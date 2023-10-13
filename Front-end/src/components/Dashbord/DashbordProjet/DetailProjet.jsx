import React, { useEffect } from 'react';

const ProductCard = () => {

    useEffect(() => {
        const imgs = document.querySelectorAll('.img-select a');
        const imgBtns = [...imgs];
        let imgId = 1;
    
        imgBtns.forEach((imgItem) => {
          imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
          });
        });
    
        function slideImage() {
          const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    
          document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
        }
    
        window.addEventListener('resize', slideImage);
    
        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener('resize', slideImage);
        };
      }, []); // Empty dependency array to run the effect only once
    
  return (
        <div className="card-contentd">
            <a href='/projet'className='retourlink'>Retour</a>
            <div className="card-wrapper22">
                
                    <div className="card">
                        {/* card left */}
                        
                        <div className="product-imgs">
                            <div className="img-display">
                                <div className="img-showcase">
                                <img src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg" alt="shoe image" />
                                <img src="https://cdn.pixabay.com/photo/2014/11/14/19/57/sneakers-531172_640.jpg" alt="shoe image" />
                                <img src="https://cdn.pixabay.com/photo/2014/11/14/19/57/sneakers-531172_640.jpg" alt="shoe image" />
                                <img src="https://cdn.pixabay.com/photo/2014/11/14/19/57/sneakers-531172_640.jpg" alt="shoe image" />
                            </div>
                        </div>
                        <div className="img-select">
                            <div className="img-item">
                            <a href="#" data-id="1">
                                <img src="https://cdn.pixabay.com/photo/2014/11/14/19/57/sneakers-531172_640.jpg" alt="shoe image" />
                            </a>
                            </div>
                            <div className="img-item">
                            <a href="#" data-id="2">
                                <img src="https://cdn.pixabay.com/photo/2014/11/14/19/57/sneakers-531172_640.jpg" alt="shoe image" />
                            </a>
                            </div>
                            <div className="img-item">
                            <a href="#" data-id="3">
                                <img src="https://cdn.pixabay.com/photo/2014/11/14/19/57/sneakers-531172_640.jpg" alt="shoe image" />
                            </a>
                            </div>
                            <div className="img-item">
                            <a href="#" data-id="4">
                                <img src="https://cdn.pixabay.com/photo/2014/11/14/19/57/sneakers-531172_640.jpg" alt="shoe image" />
                            </a>
                            </div>
                        </div>
                        </div>
                        {/* card right */}
                        <div className="product-content">
                            <h2 className="product-title">nike shoes</h2>
                            {/* <a href="#" className="product-link">visit nike store</a>
                            <div className="product-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <span>4.7(21)</span>
                            </div> */}

                            {/* <div className="product-price">
                                <p className="last-price">Old Price: <span>$257.00</span></p>
                                <p className="new-price">New Price: <span>$249.00 (5%)</span></p>
                            </div> */}

                            <div className="product-detail">
                                <h2>Description du projet: </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p> */}
                                <ul className='content-u'>
                                    <li className='content-lis'>porteur de projet: <span className='content-spa'>Black</span></li>
                                    <li className='content-lis'>Site web: <span className='content-spa'>in stock</span></li>
                                    <li className='content-lis'>Nationalite: <span className='content-spa'>Shoes</span></li>
                                    <li className='content-lis'>Secteur: <span className='content-spa'>All over the world</span></li>
                                    <li className='content-lis'>Cout d'investissement: <span className='content-spa'>Free</span></li>
                                </ul>
                            </div>

                            <div className="purchase-info">
                                <input type="number" min="0" value="1" />
                                <button type="button" className="btn">
                                Add to Cart <i className="fas fa-shopping-cart"></i>
                                </button>
                                <button type="button" className="btn">Commentaire</button>
                            </div>

                            <div className="social-links">
                                <p>Partager sur: </p>
                                <a href="https://fr-fr.facebook.com/login.php/" className='face'>
                                <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/login?lang=fr" className='twit'>
                                <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/accounts/login/" className='instg'>
                                <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://web.whatsapp.com/%F0%9F%8C%90/fr" className='what'>
                                <i className="fab fa-whatsapp"></i>
                                </a>
                                <a href="https://www.pinterest.fr/login/" className='pint'>
                                <i className="fab fa-pinterest"></i>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
  );
};

export default ProductCard;