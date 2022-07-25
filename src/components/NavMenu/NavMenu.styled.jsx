import styled from "styled-components";

export const SiteNav = styled.div`
  display: flex;
`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-right: 35px;
  }
`;

export const MenuLink = styled.a`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  color: #ffffff;
  &:hover {
    color: #000000;
  }
`;
