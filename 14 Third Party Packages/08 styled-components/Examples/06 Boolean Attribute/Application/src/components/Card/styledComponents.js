
// CSS-in-JS
import styled from "styled-components";


// Container

export const Container = styled.div`
  padding: 20px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

// Heading
export const Heading = styled.h1`
  color: green;
  font-family: "Roboto";
`;


// Paragraph
export const Paragraph = styled.p`
  color: orange;
  font-family: "Roboto";
`;


// Buttons
export const CustomButton = styled.button`
  padding: 10px;
  margin: 20px;
  font-size: 15px;
  color: ${(props) => (props.outline ? "#ffffff" : "#0070c1")};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color:${(props) => (props.outline ? "#0070c1" : "#ffffff")};
`;
