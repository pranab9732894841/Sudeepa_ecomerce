import React from "react";
import { Container, Image  } from "semantic-ui-react";
import covid from "../../assets/covid.png";
import aw from "../../assets/aw.png";
import "../../root.css";
function About() {
  return (
    <Container>
      <Image centered size="small" src={covid} className="about-img" />
      <Image centered size="large" src={aw} className="about-img" />
    </Container>
  );
}

export default About;
