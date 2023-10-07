import React, { useEffect } from 'react';

const TextSlider = () => {
  useEffect(() => {
    const swiftUpElements = document.querySelectorAll('.swift-up-text');

    swiftUpElements.forEach((elem) => {
      const words = elem.textContent.split(' ');
      elem.innerHTML = '';

      words.forEach((el, index) => {
        words[index] = `<span><i>${words[index]}</i></span>`;
      });

      elem.innerHTML = words.join(' ');

      const children = document.querySelectorAll('span > i');
      children.forEach((node, index) => {
        node.style.animationDelay = `${index * 0.2}s`;
      });
    });
  }, []);

  return (
    <div className="container">
      <h1 className="swift-up-text">
        Bienvenue sur Fipsee,
        votre plateforme de crowdfunding
        pour les amoureux de l'Investissement.
      </h1>
    </div>
  );
};

export default TextSlider;
// import React from 'react';
// import { useState } from "react";


// function TextSlider() {
//   const [toggleState, setToggleState] = useState(1);
  
//   const toggleTab = (index) => {
//     setToggleState(index);
//     console.log(index);
//   }
//   <div className="container">
//     <div className="bloc_tabs">
//       <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} 
//        onClick={() => toggleTab(1)}
//       >Formulaire 1</div>
//       <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} 
//        onClick={() => toggleTab(2)}
//       >Formulaire 2</div>
//       <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} 
//        onClick={() => toggleTab(3)}
//       >Formulaire 3</div>
     
//     </div>

//     <div className="content-tabs">
//       <div
//        className={toggleState === 1 ? "content active-content" : "content"} 
//        >
//         <h2>Content 1</h2>
//         <hr />
//         <p>
//           Le lorem ipsum est, en imprimerie, une suite de mots
//           sans signification utilisée à titre provisoire pour 
//           calibrer une mise en page, le texte définitif venant
//           remplacer le faux-texte dès qu'il est prêt
//         </p>
//       </div>

//       <div  className={toggleState === 2 ? "content active-content" : "content"} >
//         <h2>Content 2</h2>
//         <hr />
//         <p>
//           Le lorem ipsum est, en imprimerie, une suite de mots
//           sans signification utilisée à titre provisoire pour 
//           calibrer une mise en page, le texte définitif venant
//           remplacer le faux-texte dès qu'il est prêt
//         </p>
//       </div>

//       <div  className={toggleState === 3 ? "content active-content" : "content"} >
//         <h2>Content 3</h2>
//         <hr />
//         <p>
//           Le lorem ipsum est, en imprimerie, une suite de mots
//           sans signification utilisée à titre provisoire pour 
//           calibrer une mise en page, le texte définitif venant
//           remplacer le faux-texte dès qu'il est prêt
//         </p>
//       </div>
//     </div>
//   </div>
// }

// export default TextSlider;