import React from "react";
import Navbar from "./Navbar"
import {HomeStyle, Canvas, Intro, Name, Text,Button } from "./style";
const Home = () => {
  return (
    <HomeStyle>
      <Canvas></Canvas>
      <Intro>
        <Text>
          Hello, I'm <Name>Asmaa Essam</Name>
          <br /> I'm a full-stack web developer
        </Text>
        <Button>View my work</Button>
        <Navbar/>
      </Intro>
    </HomeStyle>
  );
};

export default Home;
