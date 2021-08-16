import React from "react";
import './contactHours.scss';
import {weekday} from "../../../../utils/DaysEnum";
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

const ContactHours = ({hours}) => {
    const hoursArr = hours.TEXT_2 && hours.TEXT_2.replace(/'/g, "\"");

    return (
        <div className="contact-hours">
            <div className="contact-hours-title-row">
                <div className="contact-icon-container">
                    <FontAwesomeIcon
                        className="contact-icon"
                        icon={faClock}
                    />
                </div>
                <h4 data-testid="contact-hours">{hours.H1}</h4>
            </div>

            {JSON.parse(hoursArr).map((item, index) => {
                const allDays = item.days.map(d =>
                    weekday[d].substring(0, 3)
                );

                return (
                    <Row sm="row d-flex justify-content-between" key={index}>
                        <Col xs="left-contact-text" sm="auto">
                            <p data-testid={`contact-day-${item.days}`}>{item.days && allDays.join(", ")}</p>
                        </Col>
                        <Col xs="align-items-left" sm="auto">
                            <p data-testid={`contact-hour-${item.hours}`}>{item.hours && item.hours.join(" and ")}</p>
                        </Col>
                    </Row>
                )
            })}
        </div>
    )
}

export default ContactHours;