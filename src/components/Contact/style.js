import styled from "styled-components";

export const ContactSection = styled.div`
  background: #252934;
  color: #fff;
  margin-top: 5rem;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const P = styled.p`
  color: #00a1a7;
  font-weight: 600;
  font-family: "Raleway";
  -webkit-font-smoothing: antialiased;
`;
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  max-width: 500px;
  margin-bottom: 2rem;
`;
export const Input = styled.input`
  background: #1e242c;
  border: 0;
  box-sizing: border-box;
  color: #fff;
  display: block;
  font-size: 12pt;
  margin-bottom: 3px;
  outline: none;
  padding: 10px 15px;
  width: 100%;
`;
export const Textarea = styled.textarea`
  background: #1e242c;
  border: 0;
  box-sizing: border-box;
  color: #fff;
  display: block;
  font-size: 12pt;
  margin-bottom: 3px;
  outline: none;
  padding: 10px 15px;
  width: 100%;
  margin: 0.2rem;
`;
export const Button = styled.button`
  width: 30%;
  background-color: transparent;
  border: 1px solid #fff;
  outline: none;
  padding: 0.5rem;
  color: #fff;
  margin-top: 0.5rem;
  align-self: flex-end;
`;
