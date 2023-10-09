import React from 'react';

function MenuTab() {
  return (
    <div id="menu-tab">
      <div id="page-wrap">
        <div className="tabs">
          {/* Onglet-01 */}
          <div className="tab">
            <input id="tab-1" checked={true} name="tab-group-1" type="radio" />
            <label htmlFor="tab-1">Accueil</label>
            <div className="content">
              <p><a href="#">Retour Accueil</a></p>
              <p><a href="#">Contact</a></p>
              <p><a href="#">Newsletter</a></p>
            </div>
          </div>

          {/* Onglet-02 */}
          <div className="tab">
            <input id="tab-2" name="tab-group-1" type="radio" />
            <label htmlFor="tab-2">Articles</label>
            <div className="content">
              <p>Exemple, une image, du texte</p>
              <br />
              <p><img src="http://ekladata.com/UM-RXN_kZ3q93_FwWhFA15FP_uc.jpg" alt="" /></p>
            </div>
          </div>

          {/* Onglet-03 */}
          <div className="tab">
            <input id="tab-3" name="tab-group-1" type="radio" />
            <label htmlFor="tab-3">Forum</label>
            <div className="content">
              <p>Exemple, une image, et une vidéo...</p>
              <br />
              <p>
                <img src="http://ekladata.com/UM-RXN_kZ3q93_FwWhFA15FP_uc.jpg" alt="" />
                <iframe
                  style={{ marginLeft: '30px', boxShadow: '6px 6px 10px grey' }}
                  src="https://player.vimeo.com/video/36778024"
                  frameborder="0"
                  width="500"
                  height="281"
                ></iframe>
              </p>
            </div>
          </div>

          
          
        </div>
      </div>
      <p><br /><br /><br /></p>
    </div>
  );
}

export default MenuTab;