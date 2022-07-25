import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 45px;
  background: #ffffff;
  border-radius: 15px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const HeadItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Dot = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  background: #75e169;
  border-radius: 50%;
`;

export const Title = styled.p`
  margin-left: 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 175%;
  color: #111111;
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  & svg {
    transform: ${(p) => (p.isopen === "open" ? "rotate(180deg)" : null)};
  }
`;

export const BodyItem = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-left: 10px;
  padding: 10px 40px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 175%;
  color: #000000;
  border-left: 1px solid #000000;
`;
