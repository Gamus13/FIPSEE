import React from 'react';
import "./Formulaire1.scss";
class RegistrationForm extends React.Component {
  componentDidMount() {
    // Full name validation
    document.querySelector('#full-name').addEventListener('blur', (event) => {
      let err = document.querySelector(".error-messg");
      err.innerText = "";
      try {
        // If field is empty
        if (event.target.validity.valueMissing)
          throw event.target.validationMessage;

        else if (event.target.validity.patternMismatch) {
          throw "Please enter a valid name!";
        }

        else {
          event.target.style.borderBottomColor = 'green';
          err.innerText = "";
        }
      }

      catch (messg) {
        err.innerText = messg;
      }
    });

    // Email validation
    document.querySelector('#email').addEventListener('blur', (event) => {
      validateEmail(event);
    });

    // Confirm email validation
    document.querySelector('#confirm-email').addEventListener('blur', (event) => {
      validateEmail(event);
      validateConfirmation(document.querySelector('#email'), event.target);
    });

    // Contact number validation
    document.querySelector('#contact-no').addEventListener('blur', function (event) {
      let error = event.target.nextElementSibling;
      error.innerText = "";
      try {
        if (event.target.validity.valueMissing)
          throw event.target.validationMessage;

        else if (event.target.value.length !== 10)
          throw "Please enter a 10-digit mobile number.";

        else
          event.target.style.borderBottom = "2px solid green";
      }
      catch (messg) {
        error.innerText = messg;
      }
    });

    // Password show/hide functionality
    document.querySelector('.passkey-icon').addEventListener('click', displayPassword);
    document.querySelectorAll('.passkey-icon')[1].addEventListener('click', displayPassword);

    function displayPassword(event) {
      if (event.target.parentNode.getAttribute('data-display-passkey') === 'off') {
        event.target.parentNode.setAttribute('data-display-passkey', 'on');
        event.target.setAttribute('class', 'fas fa-eye-slash');
        event.target.parentElement.previousSibling.previousSibling.setAttribute('type', 'text');
      }
      else {
        event.target.parentNode.setAttribute('data-display-passkey', 'off');
        event.target.setAttribute('class', 'fas fa-eye');
        event.target.parentElement.previousSibling.previousSibling.setAttribute('type', 'password');
      }
    }

    // Password validation
    document.querySelector("#passkey").addEventListener('blur', validatePassword);

    function validatePassword(event) {
      let error = event.target.parentElement.nextElementSibling;
      error.innerText = "";
      try {
        console.log((event.target.value));
        console.log();
        if (event.target.validity.valueMissing)
          throw event.target.validationMessage;

        else if (!(/[0-9]{4,}/g).test(event.target.value)) {
          throw "There must be at least 4 digits.";
        }

        else if (event.target.value.length < 8 || event.target.value.length > 15) {
          throw "Password must be 8 to 15 characters.";
        }

        else {
          document.querySelector('[type="submit"]').removeAttribute('disabled');
          event.target.style.borderBottom = "2px solid green";
        }
      }
      catch (messg) {
        document.querySelector('[type="submit"]').setAttribute('disabled', "disabled");
        error.innerText = messg;
      }
      console.log(error);
    }

    // Confirm password validation
    document.querySelector('#confirm-passkey').addEventListener('blur', function (event) {
      try {
        var error = document.querySelectorAll('.error-messg')[5];
        error.innerText = "";
        if (event.target.validity.valueMissing)
          throw event.target.validationMessage;

        else if (document.querySelector('#passkey').value !== event.target.value) {
          throw "Passwords do not match!";
        }

        else {
          document.querySelector('[type="submit"]').removeAttribute('disabled');
          event.target.style.borderBottom = "2px solid green";
        }
      }

      catch (messg) {
        document.querySelector('[type="submit"]').setAttribute('disabled', "disabled");
        error.innerText = messg;
      }
    });
  }

    render() {
    return (
      <div className="wrapper">

        {/* Form container */}
        <div className="form-container">
          <form action="" method="post">
            {/* Flexbox and its items */}
            <div className="flex">
              <div className="flex-item">
                {/* Full name field */}
                <div className="field-container">
                  <label htmlFor="full-name">
                    Full Name: <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    pattern="^[A-Za-z\s]+$"
                    required
                  />
                  <span className="error-messg"></span>
                </div>

                {/* Email field */}
                <div className="field-container">
                  <label htmlFor="email">
                    Email: <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                  />
                  <span className="error-messg"></span>
                </div>

                {/* Confirm Email field */}
                <div className="field-container">
                  <label htmlFor="confirm-email">
                    Confirm Email: <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="confirm-email"
                    required
                  />
                  <span className="error-messg"></span>
                </div>

                {/* Contact Number field */}
                <div className="field-container">
                  <label htmlFor="contact-no">
                    Contact Number: <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-no"
                    pattern="[0-9]{10}"
                    required
                  />
                  <span className="error-messg"></span>
                </div>
              </div>

              {/* Password field */}
              <div className="flex-item">
                <div className="field-container">
                  <label htmlFor="passkey">
                    Password: <span className="required">*</span>
                  </label>
                  <div className="passkey-wrapper">
                    <input
                      type="password"
                      id="passkey"
                      minLength={8}
                      maxLength={15}
                      required
                    />
                    <i className="fas fa-eye passkey-icon" data-display-passkey="off"></i>
                  </div>
                  <span className="error-messg"></span>
                </div>

                {/* Confirm Password field */}
                <div className="field-container">
                  <label htmlFor="confirm-passkey">
                    Confirm Password: <span className="required">*</span>
                  </label>
                  <div className="passkey-wrapper">
                    <input
                      type="password"
                      id="confirm-passkey"
                      required
                    />
                    <i className="fas fa-eye passkey-icon" data-display-passkey="off"></i>
                  </div>
                  <span className="error-messg"></span>
                </div>
              </div>
            </div>

            {/* Submit button */}
            <button type="submit" disabled>Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;