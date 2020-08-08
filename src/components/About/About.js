import React from "react";
import {
  AboutWrapper,
  Text,
  Container,
  Child,
  Hexagon,
  Title,
  HexagonWrapper,
  P,
  Info,
  Person,
  Image,
  Skills,
  PersonImg,
  Strok,
  Fill,
  Skill,
} from "./style";
import Img from "../../media/asmaa.jpg";
const About = () => {
  return (
    <AboutWrapper>
      <Text>ABOUT</Text>
      <Container>
        <Child>
          <HexagonWrapper>
            <Hexagon />
          </HexagonWrapper>{" "}
          <Title>Fast</Title>
          <P>Fast load times and lag free interaction, my highest priority.</P>
        </Child>
        <Child>
          <HexagonWrapper>
            <Hexagon />
          </HexagonWrapper>{" "}
          <Title>Responsive</Title>
          <P>My layouts will work on any device, big or small.</P>
        </Child>
        <Child>
          <HexagonWrapper>
            <Hexagon />
          </HexagonWrapper>{" "}
          <Title>Intuitive</Title>
          <P>Strong preference for easy to use, intuitive UX/UI.</P>
        </Child>
        <Child>
          <HexagonWrapper>
            <Hexagon />
          </HexagonWrapper>{" "}
          <Title>Dynamic</Title>
          <P>
            Websites don't have to be static, I love making pages come to life.
          </P>
        </Child>
      </Container>
      <Info>
        <Person>
          <Image>
            <PersonImg src={Img} alt="" />
            </Image>
          <P>
            I'm a Front-End Developer.<br/> I have
            serious passion for UI effects, animations and creating intuitive,
            dynamic user experiences.
          </P>
        </Person>
        <Skills>
          <Strok>
            <Fill style={{ width: "95%" }}></Fill>
            <Skill>Html</Skill>
          </Strok>
          <Strok>
            <Fill style={{ width: "90%" }}></Fill>
            <Skill>CSS3</Skill>
          </Strok>
          <Strok>
            <Fill style={{ width: "90%" }}></Fill>
            <Skill>Javascript</Skill>
          </Strok>
          <Strok>
            <Fill style={{ width: "70%" }}></Fill>
            <Skill>Jquery</Skill>
          </Strok>
          <Strok>
            <Fill style={{ width: "85%" }}></Fill>
            <Skill>React</Skill>
          </Strok>
          <Strok>
            <Fill style={{ width: "75%" }}></Fill>
            <Skill>Redux</Skill>
          </Strok>
          <Strok>
            <Fill style={{ width: "70%" }}></Fill>
            <Skill>NodeJs</Skill>
          </Strok>
        </Skills>
      </Info>
    </AboutWrapper>
  );
};

export default About;
