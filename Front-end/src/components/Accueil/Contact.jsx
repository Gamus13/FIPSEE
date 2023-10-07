import React, { useState } from 'react';

const Contacts = () => {
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [submitError, setSubmitError] = useState('');

  const validateName = (event) => {
    const name = event.target.value;

    if (name.length === 0) {
      setNameError('Le nom est requis');
      return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
      setNameError('Écrivez le nom complet');
      return false;
    }

    setNameError('');
    return true;
  };

  const validatePhone = (event) => {
    const phone = event.target.value;

    if (phone.length === 0) {
      setPhoneError('Le numéro de téléphone est requis');
      return false;
    }

    if (phone.length !== 11) {
      setPhoneError('Le numéro  doit comporter 11 chiffres');
      return false;
    }

    if (!phone.match(/^[0-9]{11}$/)) {
      setPhoneError('Seulement des chiffres');
      return false;
    }

    setPhoneError('');
    return true;
  };

  const validateEmail = (event) => {
    const email = event.target.value;

    if (email.length === 0) {
      setEmailError('Email requis');
      return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      setEmailError('Email invalide');
      return false;
    }

    setEmailError('');
    return true;
  };

  const validateMessage = (event) => {
    const message = event.target.value;
    const required = 30;
    const left = required - message.length;

    if (left > 0) {
      setMessageError(`${left} plus de caractères requis`);
      return false;
    }

    setMessageError('');
    return true;
  };

  const validateForm = (event) => {
    event.preventDefault();

    if (
      !validateName(event) ||
      !validatePhone(event) ||
      !validateEmail(event) ||
      !validateMessage(event)
    ) {
      setSubmitError('Veuillez corriger les erreurs pour soumettre');

      setTimeout(() => {
        setSubmitError('');
      }, 3000);

      return false;
    }

    // Submit form logic
    return true;
  };

  return (
    <div className="container">
        <h1>hello world</h1>

        <form>
            <i className="fas fa-paper-plane"></i>

            <div className="input-group">
            <label>Nom et prénom :</label>
            <input
                id="contact-name"
                onKeyUp={validateName}
                type="text"
                placeholder="Enter your name"
            />
            <span>{nameError}</span>
            </div>

            <div className="input-group">
            <label>téléphone :</label>
            <input
                id="contact-phone"
                onKeyUp={validatePhone}
                type="tel"
                placeholder="123 456 7890"
            />
            <span>{phoneError}</span>
            </div>

            <div className="input-group">
            <label>Email:</label>
            <input
                id="contact-email"
                onKeyUp={validateEmail}
                type="email"
                placeholder="Enter Email"
            />
            <span>{emailError}</span>
            </div>

            <div className="input-group">
            <label>Votre Message:</label>
            <textarea
                id="contact-message"
                onKeyUp={validateMessage}
                rows="5"
                placeholder="Enter your message"
            ></textarea>
            <span>{messageError}</span>
            </div>

            <button onClick={validateForm}>Soumettre</button>
            <span>{submitError}</span>
        </form>
    </div>
  );
};

export default Contacts;