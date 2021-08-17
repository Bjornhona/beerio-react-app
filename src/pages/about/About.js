import React, { useState } from 'react';
import './about.css';
import { withAuth } from '../../lib/authContext';
import headerImage from './beer-2695358_1920.jpg';
import HeaderSection from '../../components/header-section/HeaderSection';
import ContactItem from './components/contact-item/ContactItem';
import BackButton from '../../components/back-button/BackButton';
import Button from '../../components/button/Button';
import InputField from './components/input-field/InputField';
import MessageField from './components/message-field/MessageField';
import emailjs from 'emailjs-com';
import InfoModal from './components/info-modal/InfoModal';

const About = () => {
  const [alert, setAlert] = useState({});
  const [showModal, setShowModal] = useState({show: false});
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: "faBuilding",
      title: "Created by",
      description: "Graphics By Åsa"
    },
    {
      icon: "faEnvelope",
      title: "Email",
      description: "ïnfo@graphicsbyasa.com",
      link: "mailto:info@graphicsbyasa.com"
    },
    {
      icon: "faGlobe",
      title: "Web",
      description: "www.graphicsbyasa.com",
      link: "https://www.graphicsbyasa.com/"
    }
  ]

  const capitalizeFirstLetter = (string) => {
    let stringArr = string.split(' ');

    for(let i=0; i<stringArr.length; i++) {
      stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
    }

    return stringArr.join(' ');
  }

  const setInputValue = (inputKey, value) => {
    if (
        inputKey === 'name'
    ) {
        value = capitalizeFirstLetter(value);
    }

    setUserData({
        ...userData,
        [inputKey]: value,
    });
  }

  const sendContactData = (formElement) => {

    emailjs.sendForm(
      'service_gpvskbp',
      'template_qnn7mge',
      formElement,
      'user_y4sNqK78lN1DM8C6rPXw9')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        if (response.status === 200) {
          setUserData({});
          setShowModal({
            show: true,
            type: "success",
            optionalMessage: "Your message was sent successfully!",
          });
        } else {
          setShowModal({
            show: true,
            type: "fail",
            optionalMessage: "There was an unexpected error. Your message could not be sent.",
          });
        }
      })
      .catch((err) => {
        console.log('FAILED...', err);

        setShowModal({
          show: true,
          type: "fail",
          optionalMessage: "There was an unexpected error. Your message could not be sent.",
        });
      });
}

const handleButtonClick = (e) => {
    e.preventDefault();
    let validInputs = {}
    let createAlerts = []

    const checks = (keyValue, boolean, errorMessage) => {
        validInputs = {...validInputs, [keyValue]: boolean}
        createAlerts = {...createAlerts, [keyValue]: errorMessage}
    }

    const checkName = (keyValue) => {
        const errorMessageEmpty = '*field empty'
        const errorMessageName = '*text invalid'
        const regexName = /^[a-zA-ZåäöüÅÄÖÜß ]{2,30}$/


        const name = userData[keyValue];

        name !== ''
            ? regexName.test(name)
                ? checks(keyValue, true, null)
                : checks(keyValue, false, errorMessageName)
            : checks(keyValue, false, errorMessageEmpty)
    }

    const checkEmail = (keyValue) => {
        let regexEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const errorMessage = '*invalid email'

        userData[keyValue] !== '' && regexEmail.test(userData[keyValue])
            ? checks(keyValue, true, null)
            : checks(keyValue, false, errorMessage)
    }

    const checkMessage = (keyValue) => {
        const errorMessageEmpty = '*field empty'
        const message = userData[keyValue];

        message !== ''
            ? checks(keyValue, true, null)
            : checks(keyValue, false, errorMessageEmpty)
    }

    checkName('name')
    checkEmail('email')
    checkMessage('message')

    setAlert(createAlerts)

    if (
        validInputs.name &&
        validInputs.email &&
        validInputs.message
    ) {
        sendContactData(e.target)
        setAlert({})
    }
}

  return (
    <>
      {showModal.show &&
        <InfoModal type={showModal.type}
                  optionalMessage={showModal.optionalMessage}
                  onModalClick={() => setShowModal({show: false})}/>}
      <div className="contact-section">
        <HeaderSection 
          headline="Contact Us"
          breadText="Contact Us for more information."
          image={headerImage}/>

        <div className="contact-template">
          <div className="contact-template-left">
              <h2 data-testid="contact-name">Contact.</h2>
              <div className="contact-fields">
              {contactInfo.map((item, index) => 
                <ContactItem key={index} item={item}/>)}
              </div>
          </div>

          <div className="contact-template-right">
            <h2>Let's talk.</h2>
            <form className="contact-form" onSubmit={handleButtonClick}>
              <div className="contact-fields">
                <InputField
                  title="Name"
                  defaultInput={userData.name ? userData.name : ''}
                  inputKey="name"
                  alert={alert.name}
                  setInputValue={setInputValue}
                />
                <InputField
                  title="Email"
                  defaultInput={userData.email ? userData.email : ''}
                  inputKey="email"
                  alert={alert.email}
                  setInputValue={setInputValue}
                />
                <MessageField
                  title="Message"
                  defaultInput={userData.message ? userData.message : ''}
                  inputKey="message"
                  alert={alert.message}
                  setInputValue={setInputValue}
                />
              </div>
              <Button text="Send" type="submit"/>
            </form>
          </div>

        </div>

        <BackButton/>
      </div>
    </>
  );
}

export default withAuth(About);
