import React from 'react';
import '../../Styles/DashbordClient/Infosuser.css';

const UserComponent = () => {
  return (
    <div className="contentr">
      <div className="uppercontent">
        {/* <div className="namebar">
          <div className="name">Rishabh Gupta</div>
          <i className="fa fa-ellipsis-v" id="dots"></i>
          <i className="fas fa-arrow-left" id="arrow"></i>
        </div> */}
        <div className="profilepic">
          <img src="Rishabh Profile image.jpg" alt="" id="pic" />
          <span className="nametag">@Rishabh_G😎😎</span>
        </div>
        <div className="following">
          <span className="no1">8</span>
          <span className="text1">Following</span>
        </div>
        <div className="followers">
          <span className="no2">200.4k</span>
          <span className="text2">Followers</span>
        </div>
        <div className="hearts">
          <span className="no3">903.7k</span>
          <span className="text3">Hearts</span>
        </div>
        <div className="button">
          <button className="followbt">Follow</button>
        </div>
        <div className="insta">
          <i className="fa fa-instagram" style={{ fontSize: '24px' }} id="insta"></i>
        </div>
        <div className="bio">
          Kabhi-kabhi lagta hai apun ichh bhagwan hai(Sometimes I feel that I am the only god. - An Indian Meme) ~ Peace
        </div>
        <div className="expand">
          <div className="sortings">
            <i className="fa fa-sort" style={{ fontSize: '24px' }} id="sortby"></i>
          </div>
          <div className="likedv">
            <i className="fa fa-heart" style={{ fontSize: '24px' }} id="liked"></i>
          </div>
        </div>
        <div className="videos">
          <img src="IMG_20201128_134433.jpg" alt="" id="video1" />
          <img src="IMG_20201128_134518.jpg" alt="" id="video2" />
          <img src="IMG_20201128_134606.jpg" alt="" id="video3" />
        </div>
      </div>
    </div>
  );
};

export default UserComponent;