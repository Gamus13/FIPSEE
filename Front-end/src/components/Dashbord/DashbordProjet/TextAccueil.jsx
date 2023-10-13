// import React, { useEffect, useRef } from 'react';

// function TextSlider() {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const textElement = textRef.current;
//     const text = textElement.innerText;
//     let newDom = '';
//     const animationDelay = 6;

//     for (let i = 0; i < text.length; i++) {
//       newDom += `<span class="char">${text[i] === ' ' ? '&nbsp;' : text[i]}</span>`;
//     }

//     textElement.innerHTML = newDom;
//     const length = textElement.children.length;

//     for (let i = 0; i < length; i++) {
//       textElement.children[i].style['animation-delay'] = `${animationDelay * i}ms`;
//     }
//   }, []);

//   return (
//     <div>
//       <div className="centerer">
//         <p ref={textRef} className='texter' id="text" >
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
//            Cupiditate incidunt praesentium, rerum voluptatem
//           in reiciendis officia harum repudiandae tempore suscipit ex ea, adipisci ab porro.
//         </p>
//       </div>
//       {/* <div className="mylink">
//         <a target="_blank" href="http://kenyzachelin.fr">
//           Coded by Keny Zachelin
//         </a>
//       </div> */}
//     </div>
//   );
// }


// export default TextSlider;
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

import React from 'react';

const TextSlider = () => {
  return (
    <div>
      <p>Ceci est un paragraphe.</p>
    </div>
  );
};

export default TextSlider;