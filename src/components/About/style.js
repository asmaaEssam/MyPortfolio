import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 577px) {
    margin-top: 2.5rem;
  }
`;
export const Header = styled.div`
  font-size: 30pt;
  color: #444649;
  font-family: "raleway-bold";
  position: relative;
  width: fit-content;
  display: inline-block;
`;
export const Line = styled.div`
  width: 5rem;
  border-top: 3px solid #444649;
  position: absolute;
  display: inline;
  right: 50%;
  left: 26%;
  bottom: 0;
`;
export const Child = styled.div`
  padding: 1%;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HexagonWrapper = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: flex-end;
`;
export const Hexagon = styled.div`
  width: 50px;
  height: 0px;
  border-top: 50px solid #04c2c9;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  position: relative;
  :before {
    content: "";
    width: 50px;
    height: 0px;
    border-bottom: 50px solid #04c2c9;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    position: absolute;
    bottom: 49px;
    left: -35px;
  }
`;
export const Title = styled.b`
  font-size: 18pt;
  color: #616161;
  font-family: "Raleway-bold";
  margin-top: 0.5rem;
`;
export const P = styled.p`
  line-height: 18pt;
  font-family: "Raleway";
  color: #616161;
  margin: 0;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const Person = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  @media (max-width: 577px) {
    width: 85%;
    margin-bottom: 5%;
  }
`;
export const Image = styled.div`
  justify-content: center;
  align-items: center;
  width: 300px;
`;
export const PersonImg = styled.img`
  border-radius: 50%;
  width: 200px;
`;
export const Skills = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Strok = styled.div`
  height: 25px;
  position: relative;
  background: #eee;
  width: 300px;
  margin: 0.5rem;
`;
export const Fill = styled.span`
  display: block;
  height: 100%;
  background-color: #00a1a7;
  position: relative;
`;
export const Skill = styled.span`
  display: block;
  height: 100%;
  background-color: #04c2c9;
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  color: rgb(255, 255, 255);
`;
export const Icon = styled(FontAwesomeIcon)`
position: absolute;
top: -4.5rem;
left: 0rem;
color: #fff;
`;
