import React from "react";
import Navbar from "./Navbar"
import useSticky from './useSticky'
import {HomeStyle, Canvas, Intro, Name, Text,Button } from "./style";
const Home = () => {
  const { isSticky, element } = useSticky()
  return (
    <HomeStyle  ref={element}>
      <Canvas ></Canvas>
      <Intro>
        <Text>
          Hello, I'm <Name>Asmaa Essam</Name>
          <br /> I'm a full-stack web developer
        </Text>
        <Button>View my work</Button>
        <Navbar sticky={isSticky}/>
      </Intro>
    </HomeStyle>
  );
};

export default Home;
