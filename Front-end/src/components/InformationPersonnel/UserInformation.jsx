import React from 'react';
import FormComponent from './Formulaire1';
// import FormComponent2 from './Formulaire3';
class MenuTab extends React.Component {
    componentDidMount() {
    // Function to handle tab clicks
    const handleTabClick = (index) => {
      const tabBtns = document.querySelectorAll(".nav ul li");
      const tabs = document.querySelectorAll(".tab");

      tabBtns.forEach((btn, i) => {
        if (i === index) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });

      tabs.forEach((tab, i) => {
        if (i === index) {
          tab.style.display = "block";
        } else {
          tab.style.display = "none";
        }
      });
    };

    // Add click event listener to tab buttons
    const tabBtns = document.querySelectorAll(".nav ul li");
    tabBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        handleTabClick(index);
      });
    });

    // Show the first tab by default
    handleTabClick(0);

    // Handling bio text and "See More" button
    const bio = document.querySelector(".bio");
    const bioMore = document.querySelector("#see-more-bio");
    const bioLength = bio.innerText.length;

    function truncateBio() {
      bio.oldText = bio.innerText;
      bio.innerText = bio.innerText.substring(0, 100) + "...";
      bio.innerHTML += `<span onclick='expandBio()' id='see-more-bio'>See More</span>`;
    }

    function expandBio() {
      bio.innerText = bio.oldText;
      bio.innerHTML +=
        "&nbsp;" + `<span onclick='truncateBio()' id='see-less-bio'>See Less</span>`;
      document.getElementById("see-less-bio").addEventListener("click", () => {
        document.getElementById("see-less-bio").style.display = "none";
      });
    }

    truncateBio();

    // Style the alert message font size if greater than 9
    const alertMessage = document.querySelector(".alert-message");
    if (parseInt(alertMessage.innerText) > 9) {
      alertMessage.style.fontSize = ".7rem";
    }
  }
  render() {
    return (
      <div className="containers">
        <div className="profile-header">
          <div className="profile-img">
            <img src="./bg.jpg" width="200" alt="Profile Image" />
          </div>
          <div className="profile-nav-info">
            <h3 className="user-name">Bright Code</h3>
            <div className="address">
              <p id="state" className="state">New York,</p>
              <span id="country" className="country">USA.</span>
            </div>
          </div>
          <div className="profile-option">
            <div className="notification">
              <i className="fa fa-bell"></i>
              <span className="alert-message">3</span>
            </div>
          </div>
        </div>

        <div className="main-bd">
          <div className="left-side">
            <div className="profile-side">
              <p className="mobile-no"><i className="fa fa-phone"></i> +23470xxxxx700</p>
              <p className="user-mail"><i className="fa fa-envelope"></i> Brightisaac80@gmail.com</p>
              <div className="user-bio">
                <h3>Bio</h3>
                <p className="bio">
                  Lorem ipsum dolor sit amet, hello how consectetur adipisicing elit. Sint consectetur provident magni yohoho consequuntur, voluptatibus ghdfff exercitationem at quis similique. Optio, amet!
                </p>
              </div>
              <div className="profile-btn">
                <button className="chatbtn" id="chatBtn"><i className="fa fa-comment"></i> Chat</button>
                <button className="createbtn" id="Create-post"><i className="fa fa-plus"></i> Create</button>
              </div>
              <div className="user-rating">
                <h3 className="rating">4.5</h3>
                <div className="rate">
                  <div className="star-outer">
                    <div className="star-inner">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                  <span className="no-of-user-rate"><span>123</span>&nbsp;&nbsp;reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="nav">
              <ul>
                <li onClick={() => tabs(0)} className="user-post active">Posts</li>
                <li onClick={() => tabs(1)} className="user-review">Reviews</li>
                <li onClick={() => tabs(2)} className="user-setting">Settings</li>
              </ul>
            </div>
            <div className="profile-body">
              <div className="profile-posts tab">
              
               <div>
                <FormComponent />
               </div>
                
              </div>
              <div className="profile-reviews tab">
                <div>
                  {/* <FormComponent2 /> */}
                </div>
              </div>
              <div className="profile-settings tab">
               <div className="account-setting">
                  <h1>Account Setting</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit omnis eaque, expedita nostrum, facere libero provident laudantium. Quis, hic doloribus! Laboriosam nemo tempora praesentium. Culpa quo velit omnis, debitis maxime, sequi
                    animi dolores commodi odio placeat, magnam, cupiditate facilis impedit veniam? Soluta aliquam excepturi illum natus adipisci ipsum quo, voluptatem, nemo, commodi, molestiae doloribus magni et. Cum, saepe enim quam voluptatum vel debitis
                    nihil, recusandae, omnis officiis tenetur, ullam rerum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuTab;