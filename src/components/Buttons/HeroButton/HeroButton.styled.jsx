import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 270px;
  height: 60px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 100%;
  text-transform: uppercase;
  color: #ffffff;
  background: #75e169;
  border-radius: 5px;
  border: 2px solid transparent;
  cursor: pointer;
  &:hover {
    border-color: #67aefc;
  }
  &:active {
    background: #67aefc;
    border-color: transparent;
  }
`;
