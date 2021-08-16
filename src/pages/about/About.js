import React, { useState } from 'react';
import './about.css';
import { withAuth } from '../../lib/authContext';
import { Link } from 'react-router-dom';
import headerImage from './beer-2695358_1920.jpg';
import HeaderSection from '../../components/header-section/HeaderSection';
import ContactItem from './components/contact-item/ContactItem';
import BackButton from '../../components/back-button/BackButton';
import Button from '../../components/button/Button';
import InputField from './components/input-field/InputField';
import MessageField from './components/message-field/MessageField';

const About = () => {
  const [alert, setAlert] = useState({});
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: ''
  })

  console.log(userData);
  console.log(alert);

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

  const sendContactData = () => {
    // const content = {
    //     "to": ["57"],
    //     "messageProperties": {
    //         "page": pageName,
    //         "name": userData.name,
    //         "email": userData.email,
    //         "message": userData.message
    //     },
    //     "emailTemplateEnum": "JOIN_COURSE"
    // }

    // Mesh.sendEmail(content)
    // .then((response) => {
    //     if (response.status === 200) {
    //         setUserData({});
    //         setShowsModal({
    //             show: true,
    //             type: "success",
    //             optionalMessage: "Your message was sent successfully!",
    //         });
    //     } else {
    //         setShowsModal({
    //             show: true,
    //             type: "fail",
    //             optionalMessage: "There was an unexpected error. Your message could not be sent.",
    //         });
    //     }
    // })
    //     .catch(() => {
    //         setShowsModal({
    //             show: true,
    //             type: "fail",
    //             optionalMessage: "There was an unexpected error. Your message could not be sent.",
    //         });
    //     })
}

const handleButtonClick = () => {
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
        sendContactData()
        setAlert({})
    }
}

  return (
    <div className="contact-section">
      <HeaderSection 
        headline="Contact Us"
        breadText="Contact Us for more information."
        image={headerImage}/>

      <div className="contact-template">
        <div className="contact-template-left">
            <h2 data-testid="contact-name">Contact.</h2>
            {contactInfo.map((item, index) => 
              <ContactItem key={index} item={item}/>)}
        </div>

        <div className="contact-template-right">
          <h2>Let's talk.</h2>
          <form className="contact-form">
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
            <Button
              className="contact-button"
              text={'send'}
              action={handleButtonClick}
            />
          </form>
        </div>
      </div>
      <BackButton/>
    </div>
  );
}

export default withAuth(About);


// import React, {useState} from "react";
// import './contactTemplate.scss';
// import ContactItem from "./components/contact-item/ContactItem";
// import ContactHours from "./components/contact-hours/ContactHours";
// import {Col, Container, Row} from "react-bootstrap";
// import InputField from "../members-area/components/input-field/InputField";
// import Button from "../../theme/commons/button/Button";
// import MessageField from "./components/message-field/MessageField";
// import {capitalizeFirstLetter} from "../../utils/capitalizeFirstLetter";
// import Mesh from "../../backend/mesh/Mesh";
// import InfoModal from "../../theme/commons/infoModal/InfoModal";

// const ContactTemplate = ({pageName, contactName, contactInfo}) => {
    // const [userData, setUserData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    // })
//     const [alert, setAlert] = useState({});
//     const [showsModal, setShowsModal] = useState({
//         show: false
//     });

    // const setInputValue = (inputKey, value) => {
    //     if (
    //         inputKey === 'name'
    //     ) {
    //         value = capitalizeFirstLetter(value);
    //     }

    //     setUserData({
    //         ...userData,
    //         [inputKey]: value,
    //     });
    // }

    // const sendContactData = () => {
    //     const content = {
    //         "to": ["57"],
    //         "messageProperties": {
    //             "page": pageName,
    //             "name": userData.name,
    //             "email": userData.email,
    //             "message": userData.message
    //         },
    //         "emailTemplateEnum": "JOIN_COURSE"
    //     }

    //     Mesh.sendEmail(content)
    //     .then((response) => {
    //         if (response.status === 200) {
    //             setUserData({});
    //             setShowsModal({
    //                 show: true,
    //                 type: "success",
    //                 optionalMessage: "Your message was sent successfully!",
    //             });
    //         } else {
    //             setShowsModal({
    //                 show: true,
    //                 type: "fail",
    //                 optionalMessage: "There was an unexpected error. Your message could not be sent.",
    //             });
    //         }
    //     })
    //         .catch(() => {
    //             setShowsModal({
    //                 show: true,
    //                 type: "fail",
    //                 optionalMessage: "There was an unexpected error. Your message could not be sent.",
    //             });
    //         })
    // }

    // const handleButtonClick = () => {
    //     let validInputs = {}
    //     let createAlerts = []

    //     const checks = (keyValue, boolean, errorMessage) => {
    //         validInputs = {...validInputs, [keyValue]: boolean}
    //         createAlerts = {...createAlerts, [keyValue]: errorMessage}
    //     }

    //     const checkName = (keyValue) => {
    //         const errorMessageEmpty = '*field empty'
    //         const errorMessageName = '*text invalid'
    //         const regexName = /^[a-zA-ZåäöüÅÄÖÜß ]{2,30}$/


    //         const name = userData[keyValue];

    //         name !== ''
    //             ? regexName.test(name)
    //                 ? checks(keyValue, true, null)
    //                 : checks(keyValue, false, errorMessageName)
    //             : checks(keyValue, false, errorMessageEmpty)
    //     }

    //     const checkEmail = (keyValue) => {
    //         let regexEmail =
    //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //         const errorMessage = '*invalid email'

    //         userData[keyValue] !== '' && regexEmail.test(userData[keyValue])
    //             ? checks(keyValue, true, null)
    //             : checks(keyValue, false, errorMessage)
    //     }

    //     const checkMessage = (keyValue) => {
    //         const errorMessageEmpty = '*field empty'
    //         const message = userData[keyValue];

    //         message !== ''
    //             ? checks(keyValue, true, null)
    //             : checks(keyValue, false, errorMessageEmpty)
    //     }

    //     checkName('name')
    //     checkEmail('email')
    //     checkMessage('message')

    //     setAlert(createAlerts)

    //     if (
    //         validInputs.name &&
    //         validInputs.email &&
    //         validInputs.message
    //     ) {
    //         sendContactData()
    //         setAlert({})
    //     }
    // }

//     return (
//         <>
//             {showsModal.show &&
//                 <InfoModal type={showsModal.type}
//                            optionalMessage={showsModal.optionalMessage}
//                            onModalClick={() => setShowsModal({show: false})}/>}
//             <Container fluid>
//                 <Row className="contact-template" xs={1} sm={1} lg={2}>
//                     <Col className="contact-template-left">
//                         <h2 data-testid="contact-name">{contactName}.</h2>
//                         {contactInfo.map((item, index) => {
//                             switch (item.SHORT_TEXT_1) {
//                                 case "item":
//                                     return <ContactItem key={index} item={item}/>
//                                 case "hours":
//                                     return <ContactHours key={index} hours={item}/>
//                                 default:
//                                     return null;
//                             }
//                         })}
//                     </Col>
//                     <Col className="contact-template-right">
//                         <h2>Let's talk.</h2>
//                         <form className="contact-form">
//                             <div className="contact-fields">
//                                 <InputField
//                                     title="Name"
//                                     defaultInput={userData.name ? userData.name : ''}
//                                     inputKey="name"
//                                     alert={alert.name}
//                                     setInputValue={setInputValue}
//                                 />
//                                 <InputField
//                                     title="Email"
//                                     defaultInput={userData.email ? userData.email : ''}
//                                     inputKey="email"
//                                     alert={alert.email}
//                                     setInputValue={setInputValue}
//                                 />
//                                 <MessageField
//                                     title="Message"
//                                     defaultInput={userData.message ? userData.message : ''}
//                                     inputKey="message"
//                                     alert={alert.message}
//                                     setInputValue={setInputValue}
//                                 />
//                             </div>
//                             <Button
//                                 className="contact-button"
//                                 text={'send'}
//                                 onClick={handleButtonClick}
//                                 isNormalBtn
//                             />
//                         </form>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// };

// export default ContactTemplate;