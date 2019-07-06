import React, { Component } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import "./style.css";
export default class FooterCustom extends Component {
  render() {
    return (
      <div>
        <Row style={{  backgroundColor: "transparent", marginTop: "10px" }}>
          <Col>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=istanbul%20teknik%20%C3%BCniversitesi%20ar%C4%B13&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                />
              </div>
            </div>
          </Col>
          <Col c>
            <img
              src={require("../../images/orion-logo2.png")}
              width="700px"
              style={{ padding: "8%" }}
            />
          </Col>
        </Row>
        <Row
          style={{
            color: "white",
            background: "#38393A",
            paddingTop: "10px",
            paddingBottom: "10px",
            
          }}
        >
          <Col style={{marginLeft:"2%"}}> &copy; {new Date().getFullYear()} Copyright Orion - OAK</Col>
        </Row>
      </div>
    );
  }
}