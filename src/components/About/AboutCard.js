import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hello, I’m <span className="purple">Arsh Khan</span> from <span className="purple">Ranchi, Jharkhand</span>. <br /> I'm currently pursuing a degree in <i className="purple">Electronics and Communication Engineering</i> at <i className="purple">NIT Jamshedpur</i>
          , where I am honing my skills and exploring innovative technologies. <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />Learning Something New
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Arsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
