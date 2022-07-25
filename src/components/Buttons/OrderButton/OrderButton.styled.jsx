import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 38px;
  margin-left: 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 100%;
  text-transform: uppercase;
  color: #ffffff;
  background: #75e169;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border-color: #ffffff;
  }
  &:active {
    background: #ffffff;
    border-color: transparents;
    color: #67aefc;
  }
`;
