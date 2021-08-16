import React from "react";
import './contactItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faGlobe, faEnvelope} from "@fortawesome/free-solid-svg-icons";

const ContactItem = ({item}) => {

    const getIcon = (icon) => {
        switch (icon) {
            case "faBuilding":
                return faBuilding
            case "faGlobe":
                return faGlobe
            case "faEnvelope":
                return faEnvelope
            default:
                return faBuilding
        }
    }

    return (
        <div className="contact-item">
            <div className="contact-item-title-row">
                <div className="contact-icon-container">
                    <FontAwesomeIcon
                        className="contact-icon"
                        icon={getIcon(item.icon)}
                    />
                </div>
                <h5>{item.title}</h5>
            </div>
            {item.link ?
                <a href={item.link}>
                    <p>{item.description}</p>
                </a> :
            <p>{item.description}</p>}
        </div>
    )
}

export default ContactItem;